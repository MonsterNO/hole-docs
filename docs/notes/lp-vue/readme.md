---
title: lp-vue
permalink: /lp-vue/
createTime: 2024/09/05
---

lp-vue是一个开箱即用的组件库，包含功能：组件&二次开发、指令、常用函数等，它可以快速的实现需求，希望能够帮助到你。

## 依赖

- [Element](https://element.eleme.cn/#/zh-CN)

## 安装

```shell
npm install lp-vue -S
```

## 快速上手

```javascript
import lpVue from 'lp-vue'
Vue.use(lpVue)
```

## 按需引用

```javascript
import {DatePicker} from 'lp-vue'
Vue.component(DatePicker.name, DatePicker);
/* 或写为
 * Vue.use(DatePicker)
 */
```

## 支持一下

若该项目对您有帮助且能节省您的开发时间，**打赏50及以上即可联系作者索要源码**，答疑解惑都可，当前社会**知识付费**，一杯奶茶钱你好我也好！

<p align="center">
  <img src="https://store.lingping.icu/images/qr/zanshang.jpg" width="200">
  <img src="https://store.lingping.icu/images/qr/wx.jpg" width="200">
</p>