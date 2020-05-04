### Unix/Mac系统创建基于python的Web服务器
> python -m SimpleHTTPServer

### Chrome禁用安全性检测方法
1. windows系统
> chrome.exe --disable-web-security 
2. linux系统
>google-chrome --disable-web-security
3. Mac系统
>open -a "Google Chrome" --args --disable-web-security

### vscode three.js 智能提示
1. 安装node.js，使用npm
2. 执行命令安装typings 
>npm install -g typings
3. 项目根目录下执行命令安装three
>npm install three
4. 新建一个js文件，即可使用代码提示了

### 显示必要的类或元素
1. Scene 场景，容器用于保存、跟踪需渲染物体和光源
2. Camera 摄像机，决定场景能在场景看到什么
3. Renderer 渲染器，使用电脑显卡来渲染场景

### 渲染对象组成
1. Geometry 定义大小
2. Material 定义外观
3. Mesh 网格对象

### 光源
1. spotLight 点光源
2. 

### 阴影
1. 默认情况不会渲染阴影，增加阴影效果需做以下设置
>renderer.shadowMap.Enabled = true; //允许渲染阴影
>plane.receiveShadow = true; //接受阴影的物体
>cube.castShadow = true; //投射阴影的物体
2. 阴影需要耗费大量的计算资源

### 材质
1. MeshBasicMaterial 不会对光源有任何反应，只会用指定颜色来渲染物体
2. MeshLambertMaterial 
3. MeshPhysicalMaterial
4. MeshStandardMaterial
5. MeshPhongMaterial 已弃用

### 场景定时刷新函数的选择
1. setInterval 缺点是不管浏览器发生什么（如浏览其他网页）都会每隔x毫秒执行一次；而且并没有与屏幕的刷新同步。导致较高的cpu使用率和性能不良。
2. requestAnimationFrame 函数为为稳定连续的渲染场景提供了良好解决方案。在这个方法的回调函数里完成一帧的绘制操作即可，剩下的交给浏览器。

### 打印当前帧率的库
stats.js

### 方便调试的第三方GUI库
dat.GUI

### 场景对浏览器的自适应
> window.addEventListener('resize', onResize, false);
function onResize(){
    //更新摄像机的屏幕长宽比属性
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    //渲染器尺寸
    renderer.setSize(window.innerWidth, window.innerHeight);
}



