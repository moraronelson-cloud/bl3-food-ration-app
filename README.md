# BL3 Food Ration Control v26 — Round Creation Fix

Includes all v25 functionality.

Exact fix:
- Round creation/editing called `disableModal(...)`.
- The helper function was missing, causing `disableModal is not defined`.
- Added a safe modal-disable helper so Create/Save can complete normally.
- Error handling re-enables modal controls if a save fails.
- Service worker cache bumped.

Developed by Nelson Moraro.
