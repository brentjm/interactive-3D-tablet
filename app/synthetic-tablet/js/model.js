import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as dat from 'dat.gui';

let camera, scene, renderer;
let alight, plight1, plight2;
let texture;
let mesh;

class Model {

  init() {

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x222222);

    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.0001, 1000 );
    camera.position.z = 1;

    alight = new THREE.AmbientLight(0x404040, 0.7)
    scene.add(alight);
    // default axes: (x, y, z) <-> (right, top, front)
    plight1 = new THREE.PointLight(0xffffff, 1, 0);
    plight1.position.set(200,300,500);
    scene.add(plight1);
    plight2 = new THREE.PointLight(0xffffff, 0.2, 0);
    plight2.position.set(500,-300,0);
    scene.add(plight2);

    // Load texture
    let loader = new THREE.TextureLoader();
    texture =loader.load('synthetic-tablet/model/rough.png',
      function ( e ) {
        e.wrapS = THREE.ClampToEdgeWrapping;
        e.wrapT = THREE.RepeatWrapping;
        e.repeat.set(1, 1);
        return e;
      },
      undefined,
      function ( err ) {
        console.log("error loading texture");
        console.error( err );
      }
    );

    // Create material for tablet face.
    const color = new THREE.Color( "rgb(200, 100, 100)" );
    const material = new THREE.MeshStandardMaterial({
      color: color,
      roughness: 0.9,
      bumpMap: texture,
      bumpScale: 0.001,
      morphTargets: true
    });

    // Load the meshes and apply materials.
    loader = new GLTFLoader();
    loader.load( 'synthetic-tablet/model/model.gltf', function ( gltf ) {
        gltf.scene.scale.set(0.2,0.2,0.2);
        gltf.scene.traverse( function(child) {
          if (child instanceof THREE.Mesh) {
            mesh = child;
          }
        } );
        mesh.material = material;
        mesh.rotation.x = 3.14 / 2;
        mesh.rotation.y = -0.5; 
        mesh.morphTargetInfluences = [0]

        scene.add( gltf.scene );
      },
      undefined, function ( error ) {
          console.error( error );
      } 
    );


    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setAnimationLoop( animation );

    document.body.appendChild( renderer.domElement );

    const controls = new OrbitControls( camera, renderer.domElement );

    animation();
  }

  changeRotate(rotate) {
    mesh.rotation.y = rotate;
  }

  changeTilt(tilt) {
    mesh.rotation.x = tilt;
  }

  changeColor(red, blue) {
    mesh.material.color = {r: red, g: mesh.material.color.g, b: blue};
  }

  changeEllipse(scale) {
    mesh.scale.set(mesh.scale.y * scale, mesh.scale.y, mesh.scale.z);
  }

  changeThickness(scale) {
    mesh.scale.set(mesh.scale.x, scale, mesh.scale.z);
  }

  changeRoughness(scale) {
    mesh.material.bumpScale = scale;
  }

  changeGloss(scale) {
    mesh.material.roughness = 1 - scale;
  }

  changeChip(scale) {
    mesh.morphTargetInfluences = [scale]
  }

}

function animation( time ) {
  renderer.render( scene, camera );
}

export default Model;
