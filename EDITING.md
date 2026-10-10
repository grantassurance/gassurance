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

Photographs:
- Put image files in src/images/. They are published at /images/<file name>. Use JPEG or WebP, compressed, no wider than 2000px.
- Header photo (home page, hubs, service pages, insights index): add one line to the page's settings block, for example
  heroImage: "/images/eudr-hub.jpg"
  The photo sits behind the header text under a teal wash. Remove the line and the plain teal band returns.
- Article photo: add this line between the article header and the article body:
  <div class="article-photo"><img src="/images/NAME.jpg" alt="What the photo shows" width="1920" height="880"></div>
- Article card on the insights page: add this as the first line inside the card's <a>:
  <div class="article-image"><img src="/images/NAME.jpg" alt="" loading="lazy"></div>
  The featured card already has an article-image block; put the <img> inside it.
- Home page service card: <img class="card-photo" src="/images/NAME.jpg" alt="" loading="lazy"> as the first line inside the card.
- Home page about section: <img class="about-photo" src="/images/NAME.jpg" alt="What the photo shows" loading="lazy"> as the first line inside about-right.
- Hub or service page, beside the service list: <img class="service-photo" src="/images/NAME.jpg" alt="What the photo shows" loading="lazy"> after the service-desc paragraph. Not shown on phones.
- Every position is optional. A page with no photo in a position simply leaves it out.
- Write alt text that says what the photo shows. Use alt="" only where the photo repeats what the adjacent heading already says (cards).
