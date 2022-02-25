export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6218f797ce13810a706f281f",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-7c53oyi6",
                  apiId: "b10f9d23-1309-4bee-913f-dc9bf49cb989",
                },
                {
                  buildHookId: "6218f797eea8d508f2fc9e46",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-got23umf",
                  apiId: "20dafe8a-0986-422e-9282-cc0d8a6acdf3",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/M-Damink/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-got23umf.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
