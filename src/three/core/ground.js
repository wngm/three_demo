import * as THREE from "three";
import { BaseBox, GrassBox, CoalBox, FireBox } from "../units/box";
import { ImprovedNoise } from "three/examples/jsm/math/ImprovedNoise";

// const BaseBox, GrassBox, CoalBox, StoneBox
class Noise {
  constructor() {
    this.noise = new ImprovedNoise();

    // BaseBox
    this.seed = 1.75 * 0.6;
    this.quality = 10;
    this.scale = 10;
    this.seedGrass = 1.75;
    this.qualityGrass = 10;
    this.scaleGrass = 10;
    this.seedCoal = 1.75 * 0.8;
    this.qualityCoal = 10;
    this.scaleCoal = 10;
  }

  get = (x, y, z) => {
    return this.noise.noise(x, y, z);
  };
}
class Ground {
  blocks = [];
  constructor() {
    this.width = 100;
    this.height = 100;
    this.fixY = 0;
    this.startY = -5;

    // this.createGround();
  }
  createGround() {
    const noise = new Noise();

    let blocks = [];

    for (let x = 0; x < this.width; x++) {
      for (let z = 0; z < this.height; z++) {
        let baseOffset =
          noise.get(x / noise.quality, z / noise.quality, noise.seed) *
          noise.scale;
        let grassOffset =
          noise.get(
            x / noise.qualityGrass,
            z / noise.qualityGrass,
            noise.seedGrass
          ) * noise.scaleGrass;
        let CoalOffset =
          noise.get(
            x / noise.qualityCoal,
            z / noise.qualityCoal,
            noise.seedCoal
          ) * noise.scaleCoal;
        let y1 = ~~baseOffset + this.fixY;
        let y2 = ~~grassOffset + this.fixY;
        let y3 = ~~CoalOffset + this.fixY;
        let maxy = Math.max(y1, y2, y3);

        // console.log(~~baseOffset + 5, ~~grassOffset + 5);

        for (let y = this.startY; y < maxy; y++) {
          if (y > y1) {
            if (y < y3) {
              blocks.push({ x, y, z, type: "CoalBox" });
            } else {
              blocks.push({ x, y, z, type: "GrassBox" });
            }
          } else {
            blocks.push({ x, y, z, type: "BaseBox" });
          }
        }
      }
    }
    blocks.push({ x: 10, y: 1, z: 10, type: "GrassBox" });
    return blocks;
  }
}

export { Ground };
