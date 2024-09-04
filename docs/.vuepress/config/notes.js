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
    {
      dir:'lp-vue',
      link: "/lp-vue/",
      sidebar:[
        {
          text: "组件",
          collapsed: false,
          icon: "material-symbols:travel-luggage-and-bags-rounded",
          items: ['date-picker'],
        },
        {
          text: "指令",
          collapsed: false,
          icon: "material-symbols:travel-luggage-and-bags-rounded",
          items: ['directive'],
        },
        {
          text: "方法",
          collapsed: false,
          icon: "material-symbols:travel-luggage-and-bags-rounded",
          items: ['fun'],
        }
      ]
    }
  ],
});

export default notes;
