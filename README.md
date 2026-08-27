# BL3 Food Ration Control v28 — Startup Recovery

Includes all v27 features.

Startup reliability changes:
- Boot-level watchdog starts before session restore.
- Saved-session validation times out after 4.5 seconds.
- If live restore fails but cached data exists, the app opens cached data instead of hanging.
- If startup exceeds 6 seconds, a Recovery screen appears with:
  - Retry connection
  - Open cached data
  - Return to access code
- Global error and unhandled-promise handlers prevent a permanent Loading screen.
- Service worker cache bumped to force the new startup code.

Backend:
- Added last_entered_by / last_entered_at to ration allocations.
- Added round / recipient / submitter fields to access requests.

Developed by Nelson Moraro.
