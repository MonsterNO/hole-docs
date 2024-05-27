import { definePlumeNotesConfig } from "vuepress-theme-plume";

const notes = definePlumeNotesConfig({
  dir: "notes",
  link: "/",
  notes: [
    {
      dir: "travel",
      link: "/travel/",
      sidebar: [
        {
          text: "旅游行程",
          collapsed: false,
          icon: "material-symbols:travel-luggage-and-bags-rounded",
          items: ['潮州之旅'],
        },
      ],
    },
  ],
});

export default notes;
