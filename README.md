# webMSG

**简单的js小插件 —— 能迅速的为你的网页部署提示信息模块**

## 声明

**version：1.1**

**该插件仍处于开发阶段，请期待后续功能更新，任何BUG或者点子都请联系我**

[我的博客](https://www.sometimesnaive.com.cn "双叶的魔法笔记")

## 使用

### html

**请确保你的DOM中存在如下块**

``` html
<!-- 用于弹出的提示信息块 -->
<div id="webMSG"></div>
<!-- 必须的依赖 -->
<script src="jQuery.min.js"></script>
<!-- 载入插件 -->
<script src="webMSG.js"></script>
```

v1.1版本改动了动画呈现方式，故必须依赖jQuery库才能够使用本插件。


### js

**在js载入的后方插入初始化模块**

``` javascript
let webMSG = new WebMSG(); //实例化
webMSG.init(); //初始化
```

## 触发

**你能够在任何监听事件中触发该模块**

### eg1

``` javascript
$('bottom').click(()=>{
  webMSG.show('点击按钮成功！');
});
```

默认show()方法会在3000ms后调用hide()方法，我们可以传入额外的值来阻止其启动定时器隐藏

### eg2
``` javascript
$('bottom1').click(()=>{
  webMSG.show({
    text: '点击按钮成功！',
    autoHide: false
  });
});

//在关闭autoHide后，我们可以手动调用hide()方法来隐藏提示块
$('bottom2').click(()=>{
  webMSG.hide();
});
```

## 样式

**该插件支持使用者自定义样式、时间等指数**

``` javascript
//这是插件提供的默认样式，我们可以在init()时，传递我们自己想要的参数
options: {
    text: '默认提示文本',
    top: 80,
    hiddenRight: -300,
    showRight: 30,
    overRight: 15,
    showTime: 500,
    overTime: 100,
    hiddenTime: 3000,
    showEasing: 'linear',
    width: 240,
    padding: '0 24px',
    borderRadius: 3,
    lineHeight: 44,
    color: 'white',
    backgroundColor: '#fd79a8',
},
```
