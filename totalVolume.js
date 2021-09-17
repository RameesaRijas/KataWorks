
const PI = 3.14159;
//sphere volume
const sphereVolume = (radius) => {
  return ((4 / 3) * PI * (radius * radius * radius));
};

//Cone volume
const coneVolume = (radius, height) => {
  return ((1 / 3) * PI * (radius * radius) * height);
};

//prism volume
const prismVolume = (height, width, depth) => {
  return width * depth * height;
};

//total volume function
const totalVolume = (solids) => {
  let totalVolume = 0; // to store total volume
  //calculate value of each solids
  for (const solid of solids) {
    if (solid.type === 'sphere') {
      totalVolume += sphereVolume(solid.radius);
    } else if (solid.type === 'cone') {
      totalVolume += coneVolume(solid.radius, solid.height);
    } else if (solid.type === 'prism') {
      totalVolume += prismVolume(solid.height, solid.width, solid.depth);
    }
  }
  return totalVolume;
};

const largeSphere = {
  type: 'sphere',
  radius: 40
};

const smallSphere = {
  type: 'sphere',
  radius: 10
};

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
};

const duck = [
  largeSphere,
  smallSphere,
  cone
];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);