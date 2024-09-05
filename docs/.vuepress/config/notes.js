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
          items: ['潮州之旅'],
        },
      ],
    },
    {
      dir:'lp-vue',
      link: "/lp-vue/",
      sidebar:[
        '',
        {
          text: "组件",
          collapsed: false,
          items: ['date-picker'],
        },
        {
          text: "指令",
          collapsed: false,
          items: ['directive'],
        },
      ]
    }
  ],
});

export default notes;
