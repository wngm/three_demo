import * as THREE from "three";
import blocks from "../../assets/images/blocks.png";

const texture = new THREE.TextureLoader().load(blocks);
texture.repeat.set(0.0625, 0.0625);

function getTexture(x, y) {
  let _texture = texture.clone();
  _texture.offset.set(x / 16, y / 16);
  return _texture;
}
let top = texture.clone();
let bottom = texture.clone();
let side = texture.clone();
top.offset.set(0, 15 / 16);
bottom.offset.set(2 / 16, 15 / 16);
side.offset.set(1 / 16, 15 / 16);
let coaltexture = texture.clone();
coaltexture.offset.set(4 / 16, 15 / 16);

const topMaterial = new THREE.MeshBasicMaterial({ map: top });
const bottomMaterial = new THREE.MeshBasicMaterial({ map: bottom });
const sideMaterial = new THREE.MeshBasicMaterial({ map: side });
const coalMaterial = new THREE.MeshBasicMaterial({ map: coaltexture });
const fireTopMaterial = new THREE.MeshBasicMaterial({ map: getTexture(1, 13) });
const fireSideMaterial = new THREE.MeshBasicMaterial({
  map: getTexture(0, 13),
});

const geometry = new THREE.BoxGeometry(1, 1, 1);

const mesh = new THREE.Mesh(geometry, [
  sideMaterial,
  sideMaterial,
  topMaterial,
  bottomMaterial,
  sideMaterial,
  sideMaterial,
]);

const coalMesh = new THREE.Mesh(geometry, coalMaterial);
const fireMesh = new THREE.Mesh(geometry, [
  fireSideMaterial,
  fireSideMaterial,
  fireTopMaterial,
  fireTopMaterial,
  fireSideMaterial,
  fireSideMaterial,
]);

class BaseBox {
  constructor(options) {
    const { position } = options;
    // this.material = new THREE.MeshBasicMaterial({ color: 0x0099cc });
    this.mesh = mesh.clone();
    if (position) {
      this.mesh.position.set(position.x, position.y, position.z);
    }
  }
}

class CoalBox extends BaseBox {
  constructor(options) {
    const { position } = options;
    super(options);
    this.mesh = coalMesh.clone();
    if (position) {
      this.mesh.position.set(position.x, position.y, position.z);
    }
  }
}

class FireBox extends BaseBox {
  constructor(options) {
    const { position } = options;
    super(options);
    this.mesh = fireMesh.clone();
    if (position) {
      this.mesh.position.set(position.x, position.y, position.z);
    }
  }
}

export default BaseBox;

export { BaseBox, CoalBox, FireBox };
