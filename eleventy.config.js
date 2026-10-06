import fs from "node:fs";

export default function (eleventyConfig) {
  // Files copied to the site exactly as they are.
  eleventyConfig.addPassthroughCopy({ "src/favicon.svg": "favicon.svg" });
  eleventyConfig.addPassthroughCopy({ "src/favicon.png": "favicon.png" });
  eleventyConfig.addPassthroughCopy({ "src/_redirects": "_redirects" });

  // Inline a page's stylesheet from src/_includes/css/<name>.css.
  eleventyConfig.addShortcode("pageCss", (name) =>
    fs.readFileSync(`src/_includes/css/${name}.css`, "utf8")
  );

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    // Page bodies are plain HTML: no template processing inside them.
    htmlTemplateEngine: false,
    markdownTemplateEngine: false,
  };
}
