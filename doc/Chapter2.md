### 场景Scene常用方法
1. Add 向场景中添加对象
2. Remove 移除场景中对象
3. children 获取所有子对象列表
4. getObjectByName 获取name指定对象
5. traverse 逐子对象遍历执行方法
6. fog 给场景添加雾化效果
7. overrideMaterial 强制场景中所有物体使用相同材质

### 雾化效果
雾化效果是：场景中的物体离得越远就会变得越模糊
1. 线性增长的雾化效果
> scene.fog = new THREE.Fog(0xffffff, 0.015, 100); // 参数为雾的颜色，近处属性和远处属性。后两属性决定雾化开始和结束的地方，以及加深的程度。
2. 指数增长的雾化效果
> scene.fog = new THREE.FogExp2(0xffffff, 0.01); // 参数为雾的颜色和浓度（浓度最大值为0.1）

### 自定义几何体
通过定义顶点和面来自定义创建几何体：
> var vertices = [
    new THREE.Vector3(1,3,1),
    new THREE.Vector3(1,3,-1),
    new THREE.Vector3(1,-1,1),
    new THREE.Vector3(1,-1,-1),
    new THREE.Vector3(-1,3,-1),
    new THREE.Vector3(-1,3,1),
    new THREE.Vector3(-1,-1,-1),
    new THREE.Vector3(-1,-1,1),
];
var faces = [
    new THREE.Face3(0,2,1),
    new THREE.Face3(2,3,1),
    new THREE.Face3(4,6,5),
    new THREE.Face3(6,7,5),
    new THREE.Face3(4,5,1),
    new THREE.Face3(5,0,1),
    new THREE.Face3(7,6,2),
    new THREE.Face3(6,3,2),
    new THREE.Face3(5,7,0),
    new THREE.Face3(7,2,0),
    new THREE.Face3(1,3,4),
    new THREE.Face3(3,6,4),
]; 
var geom = new THREE.Geometry();
geom.vertices = vertices;
geom.faces = faces;
geom.computeFaceNormals();

- vertices 数组保存顶点；
- faces 数组保存顶点构成的三角形面，需注意顶点的顺序，面向摄像机的面，顺序为顺时针，反之为逆时针；
- 三角形面对渲染器和游戏引擎来说，效率更高；
- computeFaceNormal 方法用于计算每个面的法向量，法向量用于决定不同光源下的颜色；
