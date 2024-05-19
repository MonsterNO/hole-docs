---
title: el-table表头自动吸顶
author: lingping
createTime: 2024/05/16 10:33:34
permalink: /article/ciy1fn03/
tags:
  - ElementUI
  - 表格吸顶
---
## 背景

在使用`el-table`的时候，在数据多的情况下滚动表格会看不到表头是什么，可以使用高度自适应，这是对表格高度的限制同时会出现滚动条，这样用户体验不好，所以考虑不设置高度通过表头吸顶来实现。

## 思路

网上也有一些解决方案写了一大堆代码。很麻烦。（os：我没成功过）

我研究了`el-table`的`dom`结构，发现其实只需要少量简单的计算去修改样式就可以达到效果。

主要还是使用`CSS`属性` position: sticky`

## 注意

由于使用的是`sticky`，所以要保证祖先元素不能设置`overflow:hidden`这类的样式，否则不生效。

## 效果

@[bilibili](BV1xx4y1W7Ck)

## 实现

为了方便使用，把表头吸顶写成一个方法，最后在指令里调用即可。

1. 吸顶高度确认

> 指令什么都不传默认吸顶高度为0，可以传递具体的吸顶高度值(数字)，可以传递可以获取到`dom`的选择器名

```javascript
const stickyThead = (el, binging, vnode) => {
	let top = "0px";
    //如果是吸顶高度
    if (!isNaN(Number(binging.value))) {
    	top = binging.value + "px";
  	}
    //如果是选择器名
    if (typeof binging.value === "string") {
    	let rect = document.querySelector(binging.value)?.getBoundingClientRect();
    	top = rect ? rect.top + rect.height + "px" : "0px";
  	}
}
```

2. 头部吸顶

```javascript
el.style.overflow = "visible";
const tHeader = el.querySelector(".el-table__header-wrapper");
tHeader.style.position = "sticky";
tHeader.style.top = top;
tHeader.style.zIndex = 10;
```

到这里基本上已经实现表头吸顶的功能了，但是如果出现固定列的话就不行。那么继续完善。

研究表格元素结构发现，没有固定列的头部在` el-table__header-wrapper `，而有固定列的头部会被额外拆分到` el-table__fixed `、` el-table__fixed-right `， 其实可以直接修改`el-table__header-wrapper`里面的`th`样式即可。 

3. 去除`is-hidden`

> 需要把th中的is-hidden这个类名删除，才会显示固定列的头

```javascript
const ths = tHeader.querySelectorAll("th.is-hidden");
ths.forEach((item) => {
	item.classList.remove("is-hidden");
});
```

4. 固定列吸顶

```javascript
// 找到实例
const table = vnode.context.$children.find((item) => item.$el === el);
// 找到左边固定列的信息
const leftFixed = table.fixedColumns;
if (leftFixed && leftFixed.length) {
	let leftFixedWidth = 0;
	leftFixed.forEach((item) => {
		let itemW = item.width || item.realWidth || item.minWidth;
		const cell = tHeader.querySelector("th." + item.id);
		if (cell) {
			cell.style.position = "sticky";
			cell.style.left = leftFixedWidth + "px";
			cell.style.top = top;
			cell.style.zIndex = 10;
			leftFixedWidth += itemW;
		}
	});
}

// 找到右边固定列
const rightFixed = table.rightFixedColumns;
if (rightFixed && rightFixed.length) {
	let rightFixedWidth = 0;
	for (let i = rightFixed.length - 1; i >= 0; i--) {
		let itemW = rightFixed[i].width || rightFixed[i].realWidth || rightFixed[i].minWidth;
      const cell = tHeader.querySelector("th." + rightFixed[i].id);
      if (cell) {
        cell.style.position = "sticky";
        cell.style.right = rightFixedWidth + "px";
        cell.style.top = top;
        cell.style.zIndex = 10;
        rightFixedWidth += itemW;
      }
    }
  }
};
```

**细节：** 右边的固定列要倒着设置

5. 指令调用时机

```javascript
var tableOb = null;
var domOb = null;
export default {
  inserted(el, binging, vnode) {
    //监听表格变化
    tableOb = new ResizeObserver(() => {
      stickyThead(el, binging, vnode);
    });
    tableOb.observe(el);

    // 监听目标dom变化
    if (typeof binging.value === "string") {
      let isDom = document.querySelector(binging.value);
      if (isDom) {
        domOb = new ResizeObserver(() => {
          stickyThead(el, binging, vnode);
        });
        domOb.observe(isDom);
      }
    }
  },
  unbind(el, binging, vnode) {
    tableOb && tableOb.unobserve(el);
    if (typeof binging.value === "string") {
      let isDom = document.querySelector(binging.value);
      if (isDom) {
        domOb && domOb.unobserve(el);
      }
    }
  },
};
```

- 思考一：表格监听

表格插入到页面的时候要监听表格的变化，从而调用这个方法，这个监听是必要的，能够在表格变化的时候重新计算位置。（考虑左右位置的计算）

- 思考二：目标元素监听

在使用目标元素来决定吸顶高度时，随着页面的变化可能目标元素的高度会变高，那就有必要重新调用这个方法，如果高度固定就不需要监听；或者目标元素的宽小于等于表格的宽度，这样页面变化会触发表格的监听同样不需要这个监听。所以这个监听不是必要的。主要关注点还是在`stickyThead`这个方法上，剩下的就是触发时机。（考虑吸顶的位置）

## 优化

通过修饰符来决定执行的方法

- fixed

fixed修饰符表示当前表格有固定列需要使用表格监听，没有的话就可以使用普通的表头吸顶，减少性能消耗

```javascript
 if (binging.modifiers.fixed) {
	// 监听表格变化
	tableOb = new ResizeObserver(
		debounce(() => {
          stickyThead(el, binging, vnode)
        }, 500)
      )
      tableOb.observe(el)
    } else {
      sticky(el, binging, vnode)
}

// 简易吸顶
const sticky = (el, binging, vnode) => {
  let top = '0px'
  if (!isNaN(Number(binging.value))) {
    top = binging.value + 'px'
  }
  if (typeof binging.value === 'string') {
    const rect = document.querySelector(binging.value)?.getBoundingClientRect()
    top = rect ? rect.top + rect.height + 'px' : '0px'
  }

  el.style.overflow = 'visible'
  const tHeader = el.querySelector('.el-table__header-wrapper')
  tHeader.style.position = 'sticky'
  tHeader.style.top = top
  tHeader.style.zIndex = 10
}
```

- dom

dom修饰符表示如果传入选择器可以根据实际情况使用，正如上面思考二所说如果获取的dom高度会变化，导致表头吸顶位置不对，可以使用这个修饰符

```javascript
 if (binging.modifiers.dom) {
      // 监听目标dom变化
      if (typeof binging.value === 'string') {
        const isDom = document.querySelector(binging.value)
        if (isDom) {
          domOb = new ResizeObserver(
            debounce(() => {
              stickyThead(el, binging, vnode)
            }, 500)
          )
          domOb.observe(isDom)
        }
      }
}
```


[书洞笔记](https://mp.weixin.qq.com/s/YQQM8oXjsZaRmVCGPX29JQ)
