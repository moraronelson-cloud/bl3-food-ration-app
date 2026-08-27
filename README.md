# BL3 Ration Control v2

Production-ready responsive web app for BL3 food/ration disbursement control.

## Backend
Connected to Supabase project `bright-path-stock-control`, using separate `ration_*` tables so ration records do not interfere with stock-control records.

## Included
- 14-day ration rounds with editable dates
- Historical rounds can be inserted later and automatically reorder by coverage date
- Each round is isolated by database foreign keys; payments cannot cross into another round
- Closed rounds are protected at database level from allocation/payment changes
- Status is first on every homepage round card
- Automatic Not Disbursed / Partially Disbursed / Disbursed status
- Fully Disbursed requires full payment plus photo proof for every payment
- Private cloud photo storage for payment proof
- Desktop, tablet and phone responsive layouts
- Section allocations, headcount, rate/person, USD and FC calculations
- Payment-by-section controls and overpayment prevention in the UI
- Audit history for changes
- Realtime refresh across devices
- Cached last-known data for offline viewing
- Create-next-round copies structure only, never old payments or photos
- Share button / WhatsApp-compatible device share sheet
- Print-friendly reports
- English, French, Chinese and Lingala UI
- Authentication required before ration/payment data can be accessed

## First production use
Create/sign in to an account from the app. Depending on Supabase email settings, a new account may need email confirmation once before first login.
