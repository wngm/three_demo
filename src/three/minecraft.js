import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { FlyControls } from "three/addons/controls/FlyControls.js";
import { FirstPersonControls } from "three/addons/controls/FirstPersonControls.js";
import { PointerLockControls } from "three/addons/controls/PointerLockControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { GlitchPass } from "three/addons/postprocessing/GlitchPass.js";
import * as Box from "./units/box";
import { ImprovedNoise } from "three/examples/jsm/math/ImprovedNoise";
import { Ground } from "./core/ground";

const { BaseBox, GrassBox, CoalBox, FireBox } = Box;
const loader = new GLTFLoader();

class World {
  constructor(options) {
    this.parentDom = options.dom;
    this.dom = options.dom;
    this.blocks = [];
    this._controls = {
      moveForward: false,
      moveBackward: false,
      moveLeft: false,
      moveRight: false,
      canJump: false,
    };

    this.raycaster = new THREE.Raycaster(
      new THREE.Vector3(),
      new THREE.Vector3(0, -1, 0),
      0,
      10
    );
    this.velocity = new THREE.Vector3();
    this.direction = new THREE.Vector3();
    this.vertex = new THREE.Vector3();
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
    this.composer = new EffectComposer(this.renderer);
    this.setController();
    this.render();
    // this.createParticles();

    this.animate();

    // this.addCameraHelper();
    this.onEvent();
  }
  onEvent() {
    window.addEventListener("resize", this.onWindowResize);
    document.addEventListener("keydown", this.onKeyDown);
    document.addEventListener("keyup", this.onKeyUp);
    this.dom.addEventListener("click", () => {
      this.controls.lock();
    });
    this.controls.addEventListener("lock", function () {
      // instructions.style.display = "none";
      // blocker.style.display = "none";
    });

    this.controls.addEventListener("unlock", function () {
      // blocker.style.display = "block";
      // instructions.style.display = "";
    });
  }
  onWindowResize = () => {
    const SCREEN_WIDTH = window.innerWidth;
    const SCREEN_HEIGHT = window.innerHeight;

    this.renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);

    this.camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
    this.camera.updateProjectionMatrix();
  };

  onKeyDown = (event) => {
    const controls = this._controls;
    switch (event.code) {
      case "ArrowUp":
      case "KeyW":
        controls.moveForward = true;
        break;

      case "ArrowDown":
      case "KeyS":
        controls.moveBackward = true;
        break;

      case "ArrowLeft":
      case "KeyA":
        controls.moveLeft = true;
        break;

      case "ArrowRight":
      case "KeyD":
        controls.moveRight = true;
        break;
      case "Space":
        if (controls.canJump === true) this.velocity.y += 50;
        controls.canJump = false;
        break;

      // case 'KeyC': controls.crouch = true; break;
      // case 'Space': controls.jump = true; break;
      // case 'ControlLeft':
      // case 'ControlRight': controls.attack = true; break;
    }
  };

  onKeyUp = (event) => {
    const controls = this._controls;
    switch (event.code) {
      case "ArrowUp":
      case "KeyW":
        controls.moveForward = false;
        break;

      case "ArrowDown":
      case "KeyS":
        controls.moveBackward = false;
        break;

      case "ArrowLeft":
      case "KeyA":
        controls.moveLeft = false;
        break;

      case "ArrowRight":
      case "KeyD":
        controls.moveRight = false;
        break;

      // case 'KeyC': controls.crouch = false; break;
      // case 'Space': controls.jump = false; break;
      // case 'ControlLeft':
      // case 'ControlRight': controls.attack = false; break;
    }
  };

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

    this.camera.position.z = 10;
    this.camera.position.x = 10;
    this.camera.position.y = 5;
  }
  // 设置渲染器
  setRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      // antialias: true,
    });

    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PFCSoftShadowMap;
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
    let ground = new Ground();
    let blocks = ground.createGround();
    blocks.forEach((i) => {
      let mesh = new Box[i.type]({ position: i }).mesh;
      this.blocks.push(mesh);
      this.scene.add(mesh);
    });
  }

  // 设置环境光
  setLight() {
    const backgroundColor = 0x87ceeb;

    // this.scene.fog = new THREE.Fog(backgroundColor, 1, 80);
    this.scene.background = new THREE.Color(backgroundColor);
    this.ambientLight = new THREE.AmbientLight(0xf0f0f0); // 环境光

    let pointLight = new THREE.PointLight(0xffffff, 30, 100);
    pointLight.position.set(50, 50, 50);
    const directionalLight = new THREE.DirectionalLight("#ffffff", 1);
    directionalLight.position.set(-40, 60, -10);

    directionalLight.shadow.camera.near = 20; //产生阴影的最近距离
    directionalLight.shadow.camera.far = 200; //产生阴影的最远距离
    directionalLight.shadow.camera.left = -50; //产生阴影距离位置的最左边位置
    directionalLight.shadow.camera.right = 50; //最右边
    directionalLight.shadow.camera.top = 50; //最上边
    directionalLight.shadow.camera.bottom = -50; //最下面

    //这两个值决定使用多少像素生成阴影 默认512
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.mapSize.width = 1024;
    // directionalLight.castShadow = true;
    this.scene.add(directionalLight);
    // this.scene.add(directionalLight.target(100, 100, 100));

    var areaLight1 = new THREE.RectAreaLight(0xff0000, 3);
    areaLight1.position.set(0, 1, 0);
    areaLight1.rotation.set(-Math.PI / 2, 0, 0);
    areaLight1.width = 4;
    areaLight1.height = 9.9;

    this.scene.add(this.ambientLight);
    // castShadow
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
    // this.controls = controls;
    this.controls = new PointerLockControls(this.camera, document.body);
    this.scene.add(this.controls.getObject());
    // setTimeout(() => {
    //   this.controls.lock();
    // }, 0);

    // controls.target.set(10, 10, 0);
    // controls.lookAt(new THREE.Vector3(10, 10, -10));
    // console.log(controls);
    // controls.autoRotate = true;

    // #FirstPersonControls
    // let controls = new FlyControls(this.camera, this.renderer.domElement);
    // controls.rollSpeed = Math.PI / 24; // 翻滚速度
    // controls.constrainVertical = false; //自动向前移动
    // controls.autoForward = false; //自动向前移动
    // controls.dragToLook = true;
    // controls.movementSpeed = 2; //移动速度

    // // controls.target.set(-20, 0, -40);
    // this.controls.addEventListener("change", this.render.bind(this));
    // this.controls.update();
  }
  render() {
    // const delta = this.clock.getDelta();
    // console.log(delta);
    this.renderer.render(this.scene, this.camera);
    // this.c(this.scene, this.camera);
    // this.animate()
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    // this.cube.rotation.x += 0.01;
    // this.cube.rotation.y += 0.01;
    // this.controls.update();
    const delta = this.clock.getDelta();
    const speed = 10;

    // this.controls.update(delta);
    const controls = this.controls;
    const raycaster = this.raycaster;
    const velocity = this.velocity;
    const direction = this.direction;

    const height = 4;
    const { moveForward, moveBackward, moveLeft, moveRight, canJump } =
      this._controls;
    if (controls.isLocked === true) {
      raycaster.ray.origin.copy(controls.getObject().position);
      raycaster.ray.origin.y -= height;

      const intersections = raycaster.intersectObjects(this.blocks, false);
      const onObject = intersections.length > 0;
      velocity.x -= velocity.x * 10.0 * delta;
      velocity.z -= velocity.z * 10.0 * delta;

      velocity.y -= 9.8 * 20.0 * delta; // 100.0 = mass

      direction.z = Number(moveForward) - Number(moveBackward);
      direction.x = Number(moveRight) - Number(moveLeft);
      direction.normalize(); // this ensures consistent movements in all directions

      if (moveForward || moveBackward)
        velocity.z -= direction.z * speed * delta;
      if (moveLeft || moveRight) velocity.x -= direction.x * speed * delta;

      if (onObject === true) {
        velocity.y = Math.max(0, velocity.y);
        this._controls.canJump = true;
      }

      intersections.forEach((i) => {
        const { object, distance } = i;
        console.log(i);
        if (distance < 1) {
          if (distance < 1) {
            if (raycaster.ray.origin.y - object.position.y == 1) {
              velocity.y = 0;
              this._controls.canJump = true;
            }
          }
        }
      });
      controls.moveRight(-velocity.x * delta);
      controls.moveForward(-velocity.z * delta);
      controls.getObject().position.y += velocity.y * delta; // new behavior

      // if (controls.getObject().position.y < 10) {
      //   velocity.y = 0;
      //   controls.getObject().position.y = 10;
      //   this._controls.canJump = true;
      // }
    }

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
