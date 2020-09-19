module.exports = {
  author: "@paiboon15721",
  siteTitle: "Paiboon Auengkongkatong Portfolio",
  siteShortTitle: "Paiboon", // Used as logo text in header, footer, and splash screen
  siteDescription:
    "Hi there! I'm Paiboon Auengkongkatong, a fullstack developer, based in bangkok thailand.",
  siteUrl: "https://me.secretsrc.com",
  siteLanguage: "en_US",
  siteIcon: "src/content/favicon.ico", // Relative to gatsby-config file

  splashScreen: true, // Set this to true if you want to use the splash screen

  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
  // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
  mediumRssFeed:
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40paiboon15721",
  shownArticles: 3,

  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance
  socialMedia: [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/paiboon-auengkongkatong-b92610a0/",
    },
    {
      name: "Medium",
      url: "https://medium.com/@paiboon15721",
    },
    {
      name: "Github",
      url: "https://github.com/paiboon15721",
    },
    {
      name: "Resume",
      url: "/paiboon_cv.pdf",
    },
  ],

  navLinks: {
    menu: [
      {
        name: "Articles",
        url: "/#articles",
      },
      {
        name: "About Me",
        url: "/#about",
      },
      {
        name: "Projects",
        url: "/#projects",
      },
    ],
    button: {
      name: "Contact",
      url: "/#contact",
    },
  },

  footerLinks: [
    {
      name: "Privacy Policy",
      url: "/privacy",
    },
  ],
}
