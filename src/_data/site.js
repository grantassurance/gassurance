// SITE_ENV=preview is set only on the temporary gassurance-rebuild Worker.
// On the live site it is unset, so pages are indexable.
export default {
  url: "https://gassurance.com",
  preview: process.env.SITE_ENV === "preview",
  year: new Date().getFullYear(),
};
