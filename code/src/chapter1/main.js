function init() {
    var scene = new THREE.Scene();//场景（容器，保存、跟踪需渲染的物体和光源）
    var camara = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    var stats = initStats();

    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0x000000));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;

    var axes = new THREE.AxesHelper(20);
    scene.add(axes);

    var planeGeometry = new THREE.PlaneGeometry(60, 20);
    var planeMaterial = new THREE.MeshLambertMaterial({
        color: 0xFFFFFF
    });
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.set(10, 0, 0);
    plane.receiveShadow = true;
    scene.add(plane);

    var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
    var cubeMaterial = new THREE.MeshLambertMaterial({
        color: 0xFF0000
    });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(-4, 4, 4);
    cube.castShadow = true;
    scene.add(cube);

    var sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
    var sphereMeterial = new THREE.MeshLambertMaterial({
        color: 0x7777FF
    });
    var sphere = new THREE.Mesh(sphereGeometry, sphereMeterial);
    sphere.position.set(20, 4, 2);
    sphere.castShadow = true;
    scene.add(sphere);

    var spotLight = new THREE.SpotLight(0xFFFFFF);
    spotLight.position.set(-40, 40, -15);
    spotLight.castShadow = true;
    spotLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
    spotLight.shadow.camera.far = 130;
    spotLight.shadow.camera.near = 40;
    scene.add(spotLight);

    camara.position.set(-20, 30, 30);
    camara.lookAt(scene.position);

    document.getElementById("webgl-output").appendChild(renderer.domElement);

    var step = 0;
    
    var controls = new function () {
        this.rotationSpeed = 0.02;
        this.bouncingSpeed = 0.04;
    }

    function renderScene() {
        stats.update();

        cube.rotation.x += controls.rotationSpeed;
        cube.rotation.y += controls.rotationSpeed;
        cube.rotation.z += controls.rotationSpeed;

        step += controls.bouncingSpeed;
        sphere.position.x = 20 + 10 * (Math.cos(step));
        sphere.position.y = 4 + 10 * Math.abs(Math.sin(step));

        requestAnimationFrame(renderScene);
        renderer.render(scene, camara);
    }
    var gui = new dat.GUI();
    gui.add(controls, 'rotationSpeed', 0, 0.5);
    gui.add(controls, 'bouncingSpeed', 0, 0.5);

    renderScene();

    window.addEventListener('resize', onResize, false);
    function onResize(){
        camara.aspect = window.innerWidth / window.innerHeight;
        camara.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
};

function initStats(type) {
    var panelType = (typeof type !== 'undefined' && type) && (!isNaN(type)) ? parseInt(type) : 0;
    var stats = new Stats();
    stats.showPanel(panelType); // 0:fps,1:ms,2:mb,3+:custom
    document.body.appendChild(stats.dom);
    return stats;
}

