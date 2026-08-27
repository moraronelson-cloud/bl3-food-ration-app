# BL3 Food Ration Control v29 — Self-contained startup

- Removed external jsDelivr JavaScript startup dependency.
- Added local Supabase-compatible REST/storage client.
- Added independent head-level startup recovery.
- Updated service worker to refresh app shell and replace old caches.
- Retains v28 features.
- Developed by Nelson Moraro.


## v29.1 exact runtime fix
Removed an accidental line break between `async` and `function` that caused `ReferenceError: async is not defined` at browser startup.
