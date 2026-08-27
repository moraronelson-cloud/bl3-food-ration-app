# BL3 Food Ration Control v19 — Round Sharing

Includes all v18 changes.

- Admin can Share Whole Site.
- Round sharing generates a link scoped directly to that round.
- Management can re-share a round and automatically passes Management access.
- Accountant can re-share a round and automatically passes Accountant access.
- Management and Accountant can export only the opened/shared round to Excel/CSV.
- Admin can export an individual round OR the whole site.
- A round export contains Site, Round, Section, No. workers, Amount/person, Total to disburse, Paid, Remaining and Grand Total.
- Round-scoped sessions are filtered to the specified round in the UI.
- Site Manager role, receiver editing, live grand totals, section translations and Developed by Nelson Moraro are all retained.

Security note: round scope is validated by the access service and enforced in the application view. The current Supabase anon data policies remain the underlying database boundary.
