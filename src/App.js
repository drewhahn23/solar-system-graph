import logo from './logo.svg';
import './App.css';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import GetData from './components/LoadData';
// import './components/SceneInit';

function App() {

  const mountRef = useRef(null);
  const data = GetData();

  // console.log(data);

  useEffect((data) => {

    // console.log({val.declination}});
    
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    
    renderer.setSize( window.innerWidth, window.innerHeight );
    
    document.body.appendChild( renderer.domElement );

    var sun = new THREE.SphereGeometry(3);
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

    var mars = new THREE.SphereGeometry(.2);
    var marsMaterial = new THREE.MeshBasicMaterial( {color: 0xFF0000 });
    var marsSphere = new THREE.Mesh( mars, marsMaterial );

    var jupiter = new THREE.SphereGeometry(1);
    var jupiterMaterial = new THREE.MeshBasicMaterial( {color: 0xFFFF99 });
    var jupiterSphere = new THREE.Mesh( jupiter, jupiterMaterial );

    var saturn = new THREE.SphereGeometry(.55);
    var saturnMaterial = new THREE.MeshBasicMaterial( {color: 0x8B8000 });
    var saturnSphere = new THREE.Mesh( saturn, saturnMaterial );

    var uranus = new THREE.SphereGeometry(.4);
    var uranusMaterial = new THREE.MeshBasicMaterial( {color: 0x00008B });
    var uranusSphere = new THREE.Mesh( uranus, uranusMaterial );

    var neptune = new THREE.SphereGeometry(.4);
    var neptuneMaterial = new THREE.MeshBasicMaterial( {color: 0x4B0082});
    var neptuneSphere = new THREE.Mesh( neptune, neptuneMaterial );

    var pluto = new THREE.SphereGeometry(.1);
    var plutoMaterial = new THREE.MeshBasicMaterial( {color: 0xA9A9A9 });
    var plutoSphere = new THREE.Mesh( pluto, plutoMaterial );


    var pivotMercury = new THREE.Object3D();
    var pivotVenus = new THREE.Object3D();
    var pivotEarth = new THREE.Object3D();
    var pivotMars = new THREE.Object3D();
    var pivotJupiter = new THREE.Object3D();
    var pivotSaturn = new THREE.Object3D();
    var pivotUranus = new THREE.Object3D();
    var pivotNeptune = new THREE.Object3D();
    var pivotPluto = new THREE.Object3D();

    mercurySphere.position.set(2,0,0);
    venusSphere.position.set(4,.6,.3);
    earthSphere.position.set(6,.8,.4);
    marsSphere.position.set(9,-1,-.5);
    jupiterSphere.position.set(15,-1.6,-.8);
    saturnSphere.position.set(20,-6.4,-2.9);
    uranusSphere.position.set(30,12,5);
    neptuneSphere.position.set(38,-3.5,-2.1);
    plutoSphere.position.set(50,-27,-13);


    scene.add(pivotMercury);
    scene.add(pivotVenus);
    scene.add(pivotEarth);
    scene.add(pivotMars);
    scene.add(pivotJupiter);
    scene.add(pivotSaturn);
    scene.add(pivotUranus);
    scene.add(pivotNeptune);
    scene.add(pivotPluto);


    pivotMercury.add(mercurySphere);
    pivotVenus.add(venusSphere);
    pivotEarth.add(earthSphere);
    pivotMars.add(marsSphere);
    pivotJupiter.add(jupiterSphere);
    pivotSaturn.add(saturnSphere);
    pivotUranus.add(uranusSphere);
    pivotNeptune.add(neptuneSphere);
    pivotPluto.add(plutoSphere);


    camera.position.z = 50;
    
    var animate = function () {
      requestAnimationFrame( animate );


      pivotMercury.rotation.y += 0.01;
      pivotVenus.rotation.y += 0.005;
      pivotEarth.rotation.y += 0.0025;
      pivotMars.rotation.y += 0.002;
      pivotJupiter.rotation.y += 0.001;
      pivotSaturn.rotation.y += 0.0008;
      pivotSaturn.rotation.z += 0.0001;
      pivotUranus.rotation.y += .0005;
      pivotNeptune.rotation.y += .0003;
      pivotPluto.rotation.y += .0001;


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
