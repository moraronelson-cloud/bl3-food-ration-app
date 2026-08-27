# BL3 Food Ration Control v21 — Loading Watchdog

Includes all v20 functionality.

Reliability changes:
- Data sync times out after 12 seconds instead of hanging forever.
- Sign-in/session restore times out after 10 seconds.
- If live sync fails and cached data exists, the app opens cached data immediately.
- If there is no cache, the app shows a clear Could Not Load screen with Retry and Use Cached Data.
- Loading screen shows a Retry Now button after 8 seconds.
- enterApp has a final safety catch so the UI cannot remain permanently stuck on Loading.
- Service-worker cache bumped so phones receive the reliability fix.

Developed by Nelson Moraro.
