---
title: DatePicker 日期选择器
createTime: 2024/09/03 16:40:17
permalink: /lp-vue/date-picker/
---

用于选择或输入日期

具体的属性方法请参考官方文档 [DatePicker](https://element.eleme.cn/#/zh-CN/component/date-picker)

## 选择周

以「周」为基本单位，基础的日期选择控件

基本单位有 type 属性指定，`type='week'`

```vue
<lp-date-picker
  v-model="time"
  type="week"
  placeholder="请选择周"
  value-format="yyyy-MM-dd"
  format="yyyy年WW周"
/>
```
