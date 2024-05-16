import { viteBundler } from "@vuepress/bundler-vite";
import { plumeTheme } from "vuepress-theme-plume";
import { defineUserConfig } from "vuepress";
import navbar from "./navbar";
import notes from "./notes";

export default defineUserConfig({
  title: "书洞笔记",
  description: "一个丰富的资源整合知识库网站",
  dest: "dist",
  lang: "zh-CN",
  bundler: viteBundler(),
  theme: plumeTheme({
    docsDir: "docs",
    notes,
    navbar,
    hostname: "https://hole.lingping.icu",
    footer: {
      message: "@2024 书洞笔记",
      copyright: "MIT Licensed | Copyright © 2024 书洞笔记",
    },
    plugins: {
      markdownPower: {
        bilibili: true,
      },
    },
    avatar: {
      url: "/avatar.jpg",
      name: "伶俜",
      description: "前端CV工程师，提供优质的技术文章和解决方案，前端铺子开业了",
      circle: true,
    },
    social: [
      { icon: 'juejin', link: 'https://juejin.cn/user/3186805642627192' },
      { icon: 'zhihu', link: 'https://www.zhihu.com/people/xpf4ox' },
      { icon: '', link: 'https://www.jianshu.com/u/4d7c034432dc' },
      { icon: '', link: 'https://blog.csdn.net/qq_45485759' },
      { icon: '', link: 'https://blog.51cto.com/lingpingM' },
      { icon: 'github', link: 'https://github.com/MonsterNO' },
    ],
  }),
});
