/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://www.agarwalrabdiwala.in",
    generateRobotsTxt: false, // kyunki tum already robots.txt bana chuke ho
    sitemapSize: 5000,

    exclude: [
        "/admin",
        "/admin/*",
    ],

    changefreq: "daily",
    priority: 0.7,
};
