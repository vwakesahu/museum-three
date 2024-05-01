import "./style.css";
import * as THREE from "three";
import{OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import{GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
import * as lilgui from 'lil-gui'
import gsap from "gsap";

//canvas
const canvas = document.querySelector("canvas");

//scene
const scene = new THREE.Scene();

//camera
const camera = new THREE.PerspectiveCamera(
    45, // field of view
    window.innerWidth / window.innerHeight, //ascept ratio
    0.1, //near
    1000 // far
);
//camera.position.z = 5; //move it back
//scene.add(camera);

camera.position.set(0.42, 6.95, 3.89,)
camera.rotation.set(-0.59, 0.19, 0.13)


//renderer
const renderer = new THREE.WebGLRenderer({
    canvas:canvas,
});
renderer.setSize(window.innerWidth, window.innerHeight);

// orbit controls
const controls = new OrbitControls(camera, canvas);
controls.enableDumping = true;  // sense of weight 

let position = 0;

// gltf loader
const gltfLoader = new GLTFLoader();
gltfLoader.load('/models/museum3/scene.gltf', (gltf)=>{ 
    console.log('our model here',gltf);
    const model = gltf.scene;
    scene.add(model);

    window.addEventListener("mouseup", function(){
        console.log(camera.position);
        console.log(camera.rotation);
    });

    window.addEventListener("mouseup", function(){
        switch(position){
            case 0:
            cameraMovement(0.487,6.190,2.309);
            cameraRotation(-0.080,1.020,0.068);
            position = 1;
            break;

            case 1:
            cameraMovement(-3.569, 7.027,2.086);
            cameraRotation(-1.352,-0.832, -1.279);
            position = 2;
            break;
   
            case 2:
            cameraMovement(4.458, 1.734,0.077);
            cameraRotation(-0.570,1.067, 0.512);
            position = 3;
            break;
    
            case 3:
            cameraMovement(1.569, 1.979,-3.701);
            cameraRotation(-2.980,0.582,3.052);
            position = 4;
            break;
   
            case 4:
            cameraMovement(-2.589, 2.088, -1.834);
            cameraRotation(-2.778, -1.162, -2.806);
            position = 5;
            break;
            
            case 5:
            cameraMovement(0.514, 5.249, -0.236);
            cameraRotation(2.912, 0.633, -3.004);
            position = 6;
            break;

            case 6:
            cameraMovement(-0.808, 5.232, -1.362);
            cameraRotation(3.077, -0.870, 3.092);
            position = 7;
            break;

            case 7:
            cameraMovement(0.185, 5.521, 1.798);
            cameraRotation(-0.061, -0.244, -0.015);
            position = 8;
            break;
           
            case 8:
            cameraMovement(3.435, 6.147, -0.538);
            cameraRotation(-0.470, 1.238, 0.448);
            position = 9;
            break;

            case 9:
            cameraMovement(-0.317, 4.985, -2.946);
            cameraRotation(2.397, -0.101, 2.994);
            position = 0;
            break;

        }
    })
});

function cameraMovement(x, y, z){
    gsap.to(camera.position, {
        x,
        y,
        z,
        duration:3,
    });
    }
    
    
    function cameraRotation(x, y, z){
    gsap.to(camera.rotation, {
        x,
        y,
        z,
        duration:3,
    });
    }
    

const animate = () => {
    renderer.render(scene, camera);

    // controls.update();
};

renderer.setAnimationLoop(animate);

animate();
