import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { FlyControls } from "three/addons/controls/FlyControls.js";
import { FirstPersonControls } from "three/addons/controls/FirstPersonControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { GlitchPass } from "three/addons/postprocessing/GlitchPass.js";
import BaseBox, { CoalBox, FireBox } from "./units/box";
const loader = new GLTFLoader();

class World {
  constructor(options) {
    this.parentDom = options.dom;
    this.init();
  }

  init() {
    // 第一步新建一个场景
    this.clock = new THREE.Clock();
    this.scene = new THREE.Scene();
    this.setCamera();
    this.setRenderer();
    this.setGround();
    this.setLight();
    // this.addModel();
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    this.scene.add(cube);
    this.cube = cube;

    this.composer = new EffectComposer(this.renderer);

    this.setController();

    this.render();

    // this.createParticles();

    this.animate();

    // this.addCameraHelper();
  }
  addCameraHelper() {
    const helper = new THREE.CameraHelper(this.camera);
    this.scene.add(helper);
  }

  // 新建透视相机
  setCamera() {
    // 第二参数就是 长度和宽度比 默认采用浏览器  返回以像素为单位的窗口的内部宽度和高度
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.parentDom.offsetWidth / this.parentDom.offsetHeight,
      0.1,
      1000
    );

    this.camera.position.z = 5;
  }

  // 设置渲染器
  setRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      // antialias: true,
    });
    // 设置画布的大小
    this.renderer.setSize(
      this.parentDom.offsetWidth,
      this.parentDom.offsetHeight
    );
    //这里 其实就是canvas 画布  renderer.domElement
    this.parentDom.appendChild(this.renderer.domElement);
    this.renderer.domElement.id = "test";
  }

  setGround() {
    let w = 50;
    let h = 50;
    for (let x = -w / 2; x < w / 2; x++) {
      for (let z = -h / 2; z < h / 2; z++) {
        this.scene.add(new BaseBox({ position: { x, y: -5, z } }).mesh);
      }
    }

    this.scene.add(new BaseBox({ position: { x: 0, y: -4, z: 0 } }).mesh);
    this.scene.add(new BaseBox({ position: { x: 0, y: -3, z: 0 } }).mesh);
    this.scene.add(new BaseBox({ position: { x: 0, y: -2, z: 0 } }).mesh);
    this.scene.add(new CoalBox({ position: { x: 1, y: -4, z: 0 } }).mesh);
    this.scene.add(new CoalBox({ position: { x: 2, y: -4, z: 0 } }).mesh);
    this.scene.add(new FireBox({ position: { x: 5, y: -4, z: 5 } }).mesh);
  }

  // 设置环境光
  setLight() {
    this.ambientLight = new THREE.AmbientLight(0xf0f0f0); // 环境光

    let pointLight = new THREE.PointLight(0xffffff, 30, 100);
    pointLight.position.set(0, 20, 0);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    this.scene.add(directionalLight);

    var areaLight1 = new THREE.RectAreaLight(0xff0000, 3);
    areaLight1.position.set(0, 1, 0);
    areaLight1.rotation.set(-Math.PI / 2, 0, 0);
    areaLight1.width = 4;
    areaLight1.height = 9.9;

    this.scene.add(this.ambientLight);
    // this.scene.add(pointLight);
    // this.scene.add(areaLight1);
  }

  createParticles() {
    var geom = new THREE.Geometry();
    var material = new THREE.PointCloudMaterial({
      size: 4,
      vertexColors: true,
      color: 0xffffff,
    });

    for (var x = -5; x < 5; x++) {
      for (var y = -5; y < 5; y++) {
        var particle = new THREE.Vector3(x * 10, y * 10, 0);
        geom.vertices.push(particle);
        geom.colors.push(new THREE.Color(Math.random() * 0x00ffff));
      }
    }

    var cloud = new THREE.PointCloud(geom, material);
    this.scene.add(cloud);
  }

  setController() {
    // let controls = new OrbitControls(this.camera, this.renderer.domElement);
    // controls.addEventListener("change", this.render.bind(this)); // use if there is no animation loop
    // controls.minDistance = -200;
    // controls.maxDistance = 200;
    // // controls.target.set(0, -0.15, -0.2);
    // controls.target.set(-20, 0, -40);
    // controls.autoRotate = true;

    // #FirstPersonControls
    let controls = new FlyControls(this.camera, this.renderer.domElement);
    controls.rollSpeed = Math.PI / 24; // 翻滚速度
    controls.constrainVertical = false; //自动向前移动
    controls.autoForward = false; //自动向前移动
    controls.dragToLook = true;
    controls.movementSpeed = 2; //移动速度

    // // controls.target.set(-20, 0, -40);
    // // controls.addEventListener("change", this.render.bind(this));
    // controls.update();

    this.controls = controls;
  }
  render() {
    this.renderer.render(this.scene, this.camera);

    // this.c(this.scene, this.camera);
    // this.animate()
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.controls.update(this.clock.getDelta());
    // this.controls.update();
    this.render();
  }

  addModel() {
    // loader.load(
    //   "/model/scene.gltf",
    //   (gltf) => {
    //     console.log(gltf);
    //     gltf.scene.position.set(-10, 20, -40);
    //     this.scene.add(gltf.scene);
    //     this.render();
    //   },
    //   undefined,
    //   function (error) {
    //     console.error(error);
    //   }
    // );

    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(90, 90, 10, 10),
      new THREE.MeshPhongMaterial({ color: 0xa0adaf, shininess: 150 })
    );

    ground.rotation.x = -Math.PI / 2; // rotates X/Y to X/Z
    ground.receiveShadow = true;
    ground.position.set(0, -10, 0);

    let air = new THREE.Mesh(
      new THREE.CircleGeometry(10, 100, 0, 2 * Math.PI),
      new THREE.MeshMatcapMaterial({ color: 0xff0000, side: THREE.DoubleSide })
    );
    air.position.set(0, 20, 0);

    this.scene.add(ground);
    this.scene.add(air);
  }
}

export default World;
