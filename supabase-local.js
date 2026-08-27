(function(global){
'use strict';
function createClient(baseUrl,key){
  const base=String(baseUrl||'').replace(/\/$/,'');
  const baseHeaders=()=>({apikey:key,Authorization:'Bearer '+key});
  class Query{
    constructor(table){this.table=table;this.method='GET';this.params=new URLSearchParams();this.body=null;this.returning=false;this.wantSingle=false;}
    select(cols='*'){this.params.set('select',cols);if(this.method!=='GET')this.returning=true;return this;}
    insert(body){this.method='POST';this.body=body;return this;}
    update(body){this.method='PATCH';this.body=body;return this;}
    delete(){this.method='DELETE';return this;}
    eq(col,val){this.params.append(col,'eq.'+String(val));return this;}
    order(col,opt={}){this.params.set('order',col+'.'+(opt.ascending===false?'desc':'asc'));return this;}
    limit(n){this.params.set('limit',String(n));return this;}
    single(){this.wantSingle=true;return this;}
    async exec(){
      try{
        const url=base+'/rest/v1/'+encodeURIComponent(this.table)+(this.params.toString()?'?'+this.params.toString():'');
        const headers={...baseHeaders(),Accept:this.wantSingle?'application/vnd.pgrst.object+json':'application/json'};
        if(this.body!==null)headers['Content-Type']='application/json';
        if(this.returning||this.wantSingle)headers.Prefer='return=representation';
        const res=await fetch(url,{method:this.method,headers,body:this.body===null?undefined:JSON.stringify(this.body)});
        const txt=await res.text();let data=null;if(txt){try{data=JSON.parse(txt)}catch{data=txt}}
        if(!res.ok){const msg=(data&&typeof data==='object'&&(data.message||data.hint||data.details))||('HTTP '+res.status);return {data:null,error:new Error(msg)}}
        if(this.wantSingle&&Array.isArray(data))data=data[0]||null;
        return {data,error:null};
      }catch(e){return {data:null,error:e instanceof Error?e:new Error(String(e))}}
    }
    then(ok,bad){return this.exec().then(ok,bad)}
    catch(bad){return this.exec().catch(bad)}
  }
  function storageBucket(bucket){
    const encPath=p=>String(p).split('/').map(encodeURIComponent).join('/');
    return {
      async upload(path,blob,opt={}){try{const headers={...baseHeaders(),'Content-Type':opt.contentType||blob.type||'application/octet-stream','x-upsert':opt.upsert?'true':'false'};const r=await fetch(base+'/storage/v1/object/'+encodeURIComponent(bucket)+'/'+encPath(path),{method:'POST',headers,body:blob});const data=await r.json().catch(()=>null);if(!r.ok)throw new Error(data?.message||('Upload failed '+r.status));return {data,error:null}}catch(e){return {data:null,error:e}}},
      async remove(paths){try{const r=await fetch(base+'/storage/v1/object/'+encodeURIComponent(bucket),{method:'DELETE',headers:{...baseHeaders(),'Content-Type':'application/json'},body:JSON.stringify({prefixes:paths})});const data=await r.json().catch(()=>null);if(!r.ok)throw new Error(data?.message||('Remove failed '+r.status));return {data,error:null}}catch(e){return {data:null,error:e}}},
      async createSignedUrl(path,expiresIn){try{const r=await fetch(base+'/storage/v1/object/sign/'+encodeURIComponent(bucket)+'/'+encPath(path),{method:'POST',headers:{...baseHeaders(),'Content-Type':'application/json'},body:JSON.stringify({expiresIn})});const data=await r.json().catch(()=>null);if(!r.ok)throw new Error(data?.message||('Signed URL failed '+r.status));const signed=data?.signedURL||data?.signedUrl||data?.signed_url;return {data:{signedUrl:signed&&signed.startsWith('http')?signed:base+'/storage/v1'+signed},error:null}}catch(e){return {data:null,error:e}}}
    };
  }
  return {from(table){return new Query(table)},storage:{from:storageBucket},channel(){const c={on(){return c},subscribe(){return c}};return c},removeChannel(){return Promise.resolve('ok')}};
}
global.supabase={createClient};
})(window);
