import lume from "lume/mod.ts";
import netlifyCMS from "lume/plugins/netlify_cms.ts";

const site: lume.Options = lume();

site.copy("media", "media");

site.filter("dateDisplay", (date) => date.toLocaleDateString(), {});

site.use(netlifyCMS());

export default site;
