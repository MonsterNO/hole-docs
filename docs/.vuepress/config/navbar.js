const navbar = [
  {
    text: "技术文章",
    icon: "material-symbols:article-outline",
    link: "/blog/",
    activeMatch: "^/(blog|article)/",
  },
  {
    text: "组件库",
    icon: "material-symbols:article-outline",
    link: "/lp-vue/",
  },
  {
    text: "资源导航",
    icon: "material-symbols:web-asset",
    link: "/nav/",
  },
  {
    text: "更多",
    icon: "mingcute:more-3-fill",
    items: [
      {
        text: "旅游攻略",
        icon: "material-symbols:travel-luggage-and-bags-rounded",
        link: "/travel/",
      },
      {
        text: "菜谱",
        icon: "material-symbols:travel-luggage-and-bags-rounded",
        link: "/cook/",
      },
    ],
  },
];

export default navbar;
