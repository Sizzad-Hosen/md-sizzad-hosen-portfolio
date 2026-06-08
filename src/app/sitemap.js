const routes = ["", "/about", "/skills", "/projects", "/services", "/blogs", "/contact"];

export default function sitemap() {
  const baseUrl = "https://md-sizzad-hosen-portfolio.vercel.app";

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
