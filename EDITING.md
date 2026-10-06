# Editing gassurance.com

The site is built by Eleventy. Cloudflare runs the build on every commit; you never edit the finished pages.

Where things live:
- src/_data/nav.js: the main menu. Change it here and every page updates.
- src/_includes/base.njk: the shared page frame (head, menu, footer).
- src/_includes/css/: one stylesheet per page type. chrome.css holds the shared menu rules.
- src/<section>/index.html: the content of each page. The block between the two --- lines at the top holds the page title, meta description and stylesheet name.
- src/_redirects: old addresses sent to new ones.

To change a page: open its file in src/, edit the text, commit. Cloudflare rebuilds within a minute or two.
If a build fails, the previous version stays live and Cloudflare shows the error under Deployments.
Preview builds run from the Rebuild branch on the gassurance-rebuild Worker.
