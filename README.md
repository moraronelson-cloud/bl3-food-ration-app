# BL3 Food Ration Control v18 — Site Manager + Section Translation + Total Fix

This build includes the Site Manager role changes from v17, so v17 is NOT required separately.

## Site Manager
- Visible role name is Site Manager.
- Access code: SITE-4F7K2M9Q.
- Site Manager can enter worker counts and amount/person for Admin-created sections.
- Site Manager can edit the Money Receiver name and WhatsApp/phone.
- Section creation/deletion remains Admin-only.

## Grand total fix
- Section total recalculates immediately while typing.
- Total workers recalculates immediately.
- Grand Total to Disburse recalculates immediately.
- The top Approved and Remaining cards now also update live.
- Save reloads the round from Supabase so the saved total is confirmed.

## Section translations
Each section now supports:
- English / main name
- Français
- 中文
- Lingala

Changing the app language automatically changes section names in the round table/payment selection.
Blank translations fall back to the main name.
Translations carry into duplicated rounds.

Developed by Nelson Moraro.
