# Button 按钮

常用操作按钮

## 基础用法

基础的函数用法

:::demo 使用`size`、`color`、`pain`、`round`属性来定义 Button 的样式。

```vue
<template>
  <client-only>
    <div style="margin-bottom:20px;">
      <WhButton color="blue">主要按钮</WhButton>
      <WhButton color="green">绿色按钮</WhButton>
      <WhButton color="gray">灰色按钮</WhButton>
      <WhButton color="yellow">黄色按钮</WhButton>
      <WhButton color="red">红色按钮</WhButton>
    </div>
    <div style="margin-bottom:20px;">
      <WhButton color="blue" plain>朴素按钮</WhButton>
      <WhButton color="green" plain>绿色按钮</WhButton>
      <WhButton color="gray" plain>灰色按钮</WhButton>
      <WhButton color="yellow" plain>黄色按钮</WhButton>
      <WhButton color="red" plain>红色按钮</WhButton>
    </div>
    <div style="margin-bottom:20px;">
      <WhButton size="small" plain>小按钮</WhButton>
      <WhButton size="medium" plain>中按钮</WhButton>
      <WhButton size="large" plain>大按钮</WhButton>
    </div>
    <div style="margin-bottom:20px;">
      <WhButton color="blue" round plain icon="search">搜索按钮</WhButton>
      <WhButton color="green" round plain icon="edit">编辑按钮</WhButton>
      <WhButton color="gray" round plain icon="check">成功按钮</WhButton>
      <WhButton color="yellow" round plain icon="message">提示按钮</WhButton>
      <WhButton color="red" round plain icon="delete">删除按钮</WhButton>
    </div>
    <div style="margin-bottom:20px;">
      <WhButton color="blue" round plain icon="search"></WhButton>
      <WhButton color="green" round plain icon="edit"></WhButton>
      <WhButton color="gray" round plain icon="check"></WhButton>
      <WhButton color="yellow" round plain icon="message"></WhButton>
      <WhButton color="red" round plain icon="delete"></WhButton>
    </div>
  </client-only>
</template>
```

:::

## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

:::demo 设置 icon 属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用 i 标签即可，可以使用自定义图标。

```vue
<template>
  <client-only>
    <div class="flex flex-row">
      <WhButton icon="edit" plain></WhButton>
      <WhButton icon="delete" plain></WhButton>
      <WhButton icon="share" plain></WhButton>
      <WhButton round plain icon="search">搜索</WhButton>
    </div>
  </client-only>
</template>
```
