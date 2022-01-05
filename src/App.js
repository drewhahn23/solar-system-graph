import logo from './logo.svg';
import './App.css';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import GetData from './components/LoadData';
// import './components/SceneInit';

function App() {

  const mountRef = useRef(null);
  const data = GetData();

  console.log(data);

  useEffect(() => {
    
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    
    renderer.setSize( window.innerWidth, window.innerHeight );
    
    document.body.appendChild( renderer.domElement );

    var sun = new THREE.SphereGeometry(1);
    var sunMaterial = new THREE.MeshBasicMaterial( {color: 0xFF0000 } );
    var sunSphere = new THREE.Mesh( sun, sunMaterial );

    scene.add( sunSphere );

    var mercury = new THREE.SphereGeometry(.1);
    var mercuryMaterial = new THREE.MeshBasicMaterial( {color: 0x808080 });
    var mercurySphere = new THREE.Mesh( mercury, mercuryMaterial );

    var venus = new THREE.SphereGeometry(.2);
    var venusMaterial = new THREE.MeshBasicMaterial( {color: 0xFFD580 });
    var venusSphere = new THREE.Mesh( venus, venusMaterial );
    
    var earth = new THREE.SphereGeometry(.3);
    var earthMaterial = new THREE.MeshBasicMaterial( {color: 0xADD8E6 });
    var earthSphere = new THREE.Mesh( earth, earthMaterial );

    var pivotMercury = new THREE.Object3D();
    var pivotVenus = new THREE.Object3D();
    var pivotEarth = new THREE.Object3D();

    mercurySphere.position.set(2,0,0);
    venusSphere.position.set(4,0,0);
    earthSphere.position.set(6,.4,0);


    scene.add(pivotMercury);
    scene.add(pivotVenus);
    scene.add(pivotEarth);


    pivotMercury.add(mercurySphere);
    pivotVenus.add(venusSphere);
    pivotEarth.add(earthSphere);


    camera.position.z = 10;
    
    var animate = function () {
      requestAnimationFrame( animate );


      pivotMercury.rotation.y += 0.01;
      pivotVenus.rotation.y += 0.005;
      pivotEarth.rotation.y += 0.0025;


      renderer.render( scene, camera );
    };
    
    animate();
  }, []);
  return (
    <div>
      <div>

      
    <ol>
      <ol>Hi</ol>
      <GetData></GetData>
    <ol><div ref={mountRef}></div></ol>



    </ol>
    </div>
    </div>
  );
}

export default App;
