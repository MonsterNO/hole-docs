const navbar = [
  {
    text: "技术文章",
    icon: "material-symbols:article-outline",
    link: "/blog/",
    activeMatch: "^/(blog|article)/",
  },
  {
    text: "组件库",
    icon: "icon-park-outline:figma-component",
    link: "/lp-vue/",
  },
  {
    text: "资源导航",
    icon: "iconoir:navigator",
    link: "/nav/",
  },
  {
    text: "更多",
    icon: "icon-park-outline:more-three",
    items: [
      {
        text: "旅游攻略",
        icon: "material-symbols:mode-of-travel",
        link: "/travel/",
      },
      {
        text: "菜谱",
        icon: "lucide:cooking-pot",
        link: "/cook/",
      },
    ],
  },
];

export default navbar;
