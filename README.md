# webMSG
**简单的js小插件 —— 能迅速的为你的网页部署提示信息模块**

## 声明
**version：1.0**
**该插件仍处于开发阶段，请期待后续功能更新，任何BUG或者点子都请联系我**
[我的博客](https://www.sometimesnaive.com.cn "双叶的魔法笔记")

## 使用

### html

**请确保你的DOM中存在如下块**
``` html
<div id="webMSG"></div>
<script src="webMSG.js"></script>
```

### js

**在js载入的后方初始化模块**
``` javascript
let webMSG = new WebMSG();
webMSG.init();
```

## 触发

**你能够在任何监听事件中触发该模块**
### eg1
```
$('bottom').click(()=>{
  webMSG.show('点击按钮成功！');
});
```

## 样式

**该插件支持使用者自定义样式、时间等指数**
