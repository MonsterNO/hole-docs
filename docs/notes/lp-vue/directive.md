---
title: v-tableSticky
createTime: 2024/09/05
permalink: /lp-vue/directive/
---

使ElementUI的el-table表头自动吸顶，支持左右固定列。

## 注意

主要使用 `CSS` 属性 `position: sticky` 实现。

由于使用的是 `sticky`，所以要保证祖先元素不能设置 `overflow:hidden` 这类的样式，否则不生效。

## 使用

在 [快速上手](/lp-vue/#快速上手) 中全局引用可以直接使用。

也可以按需使用：

```javascript
import {tableSticky} from '.lp-vue'
Vue.directive('tableSticky', tableSticky)
```

## 配置

### 基础使用

如果只是普通表格，不涉及固定列，直接使用即可。

```html
<el-table v-tableSticky>
  <!-- 表格内容 -->
</el-table>
```

### 设置距离

```html
<el-table v-tableSticky="10">
  <!-- 表格内容 -->
</el-table>

<el-table v-tableSticky="'.header'">
  <!-- 表格内容 -->
</el-table>
```

| 类型 | 说明 | 默认值 |
| ---- | ---- | ---- |
| `number` | 表头距顶部具体的数字 | `0` |
| `string` | 选择器，自动获取距目标元素高度位置 |  |

### 设置固定列

当表格有固定列时，需要设置 `fixed` 修饰符。

```html
<el-table v-tableSticky.fixed="10">
  <!-- 表格内容 -->
</el-table>
```

### 监听目标元素高度

在使用目标元素来决定吸顶高度时，随着页面的变化可能目标元素的高度会变高，那就有必要**使用dom修饰符**，如果高度固定就不需要监听；或者目标元素的宽小于等于表格的宽度，这样页面变化会触发表格的监听同样不需要这个监听。所以这个修饰符不是必要的。可以根据实际情况使用，如果发现表头吸顶位置不对，可以使用这个修饰符。

```html
<el-table v-tableSticky.dom="'.header'">
  <!-- 表格内容 -->
</el-table>
```

## 预览

@[bilibili](BV1xx4y1W7Ck)