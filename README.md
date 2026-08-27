# BL3 Food Ration Control v13 — Manage Sections Fix

Exact fix:
- Manage Sections was calling `modal()` even though the application uses `openModal()`.
- This caused the Manage Sections button to fail before the panel could open.
- Replaced the incorrect call with `openModal()`.
- Removed leftover unused Manage Designations code.
- Service-worker cache bumped to force the corrected JavaScript onto phones.

The round-level Site Manager receiver model from v12 remains unchanged.

Developed by Nelson Moraro.
