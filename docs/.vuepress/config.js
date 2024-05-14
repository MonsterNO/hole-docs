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
    footer: {
      message: "@2024 书洞笔记",
      copyright: "MIT Licensed | Copyright © 2024 书洞笔记",
    },
    notes,
    navbar,
  }),
});
