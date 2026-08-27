# BL3 Food Ration Control v22 — Startup Fix

Includes all v21 functionality.

Exact startup bug fixed:
- Export Round button used variable name `er`.
- Edit Round button later used the same `er` variable in the same function.
- This caused a JavaScript SyntaxError before the application could start.
- The Export Round variable is now `exportRoundBtn`.
- Full JavaScript syntax validation is performed before packaging.

Also retains:
- Site Manager role
- Round-specific sharing
- Management/Accountant inherited sharing
- Round-only Excel exports
- Whole-site Admin sharing/export
- Section translations
- Live grand total calculation
- Easy WhatsApp access-code copy/paste
- Loading watchdog
- Developed by Nelson Moraro
