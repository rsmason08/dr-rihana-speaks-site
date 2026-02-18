# Dr Rihana Speaks (static + Netlify)

This repo is a simple static site designed to deploy on **Netlify** and connect to your IONOS domain: **drrihanaspeaks.com**.

## Pages
- `index.html` — home
- `books.html` — Shopify Buy Button placeholder + Amazon links
- `speaking.html` — Netlify Forms speaking inquiry form
- `events.html` — FullCalendar month view + list view (editable in `assets/js/events.js`)
- `thank-you.html` — form success page

## Add your Shopify Buy Button
1. In Shopify Admin, go to **Sales channels → Buy Button** (or install the Buy Button channel if needed).
2. Create a Buy Button for your book(s).
3. Copy the embed code.
4. Paste it into `books.html` inside the "SHOPIFY BUY BUTTON PLACEHOLDER" area.

## Add your Amazon links
Open `books.html` and replace `href="#"` with the real Amazon product links.

## Update speaking events
Edit `assets/js/events.js` and update the `window.DRS_EVENTS` array.

## Netlify Forms
The form on `speaking.html` uses Netlify's HTML form detection:
- `data-netlify="true"`
- hidden `form-name`
- honeypot anti-spam

After deploying, check submissions in Netlify: **Site → Forms**.

## Deploy to Netlify (recommended flow)
1. Push this repo to GitHub.
2. Netlify → **Add new site → Import an existing project**.
3. Build command: (none)
4. Publish directory: `.`
5. Deploy.

## Domain
See the steps in your chat with ChatGPT for the exact DNS records to set in IONOS and what to click in Netlify.
