import { render } from 'astro/compiler-runtime';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//Keep track of the mouse position, so we can make the eye move
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let object;
let controls;

let objToRender = "catoon_coffe"

const loader = new GLTFLoader();

loader.load(
    `models/${objToRender}/scene.gltf`,
    (gltf) => {
        object = gltf.scene;
        object.rotation.z = 0;
        object.rotation.x = 0;
        object.rotation.y = 0;
        scene.add(object);
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + "% loaded");
    },
    (error) => {
        console.log(error);
    }
);

const parent = document.querySelector("#parent3D");
const container = document.querySelector("#model3D");

const renderer = new THREE.WebGLRenderer({ alpha: true, canvas: container });
renderer.setSize(parent.clientWidth, parent.clientHeight);

camera.position.z = objToRender === "dino" ? 25 : 4;
camera.aspect = parent.clientWidth / parent.clientHeight;
camera.updateProjectionMatrix();
renderer.setSize(parent.clientWidth, parent.clientHeight);


//Add lights to the scene, so we can actually see the 3D model
const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
topLight.position.set(500, 500, 500) //top-left-ish
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, objToRender === "dino" ? 5 : 1);
scene.add(ambientLight);

//This adds controls to the camera, so we can rotate / zoom it with the mouse
if (objToRender === "dino") {
    controls = new OrbitControls(camera, renderer.domElement);
}

//Render the scene
function animate() {
    requestAnimationFrame(animate);
    //Here we could add some code to update the scene, adding some automatic movement
    //Make the eye move

    //if(object) object.rotation.x += 0.01;
    if(object) object.rotation.y += 0.02;
    //if(object) object.rotation.z += 0.01;

    /* if (object && objToRender === "catoon_coffe") {
      //I've played with the constants here until it looked good 
      object.rotation.y = -3 + mouseX / window.innerWidth * 3;
      object.rotation.x = -1.2 + mouseY * 2.5 / window.innerHeight;
    } */
    renderer.render(scene, camera);
}

  //Add a listener to the window, so we can resize the window and the camera
window.addEventListener("resize", function () {
    camera.aspect = parent.clientWidth / parent.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(parent.clientWidth, parent.clientHeight);
});
  //add mouse position listener, so we can make the eye move
document.onmousemove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
}

  //Start the 3D rendering
animate();

/* const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const container = document.querySelector("#model3D");

const renderer = new THREE.WebGLRenderer({
    canvas: container,
    alpha: true
});

renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(500, 500);

camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe: true})
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

function animate(){
    requestAnimationFrame(animate);

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;

    if ( resizeRendererToDisplaySize( renderer ) ) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    }

    renderer.render(scene, camera);
}

function resizeRendererToDisplaySize( renderer ) {

    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if ( needResize ) {
        renderer.setSize( width, height, false );
    }

    return needResize;

}

animate(); */