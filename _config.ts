import lume from "lume/mod.ts";
import netlifyCMS from "lume/plugins/netlify_cms.ts";

const loc = new URL("https://jonathanhudak.github.io/fyodor");

const site: lume.Options = lume({
  location: loc,
});

site.copy("media", "media");

site.filter("dateDisplay", (date) => date.toLocaleDateString(), {});
site.filter("siteUrl", (path) =>
  Deno.env.get("LOCAL") ? path : new URL(`${loc}${path}`)
);

site.use(netlifyCMS());

export default site;
