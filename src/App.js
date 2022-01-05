import logo from './logo.svg';
import './App.css';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import LoadData from './components/LoadData';
// import './components/SceneInit';

function App() {

  const mountRef = useRef(null);

  useEffect(() => {
    
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    
    renderer.setSize( window.innerWidth, window.innerHeight );
    
    document.body.appendChild( renderer.domElement );
    
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    
    scene.add( cube );
    camera.position.z = 5;
    
    var animate = function () {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    };
    
    animate();
  }, []);
  return (
    <div>
      <div>

      
    <ol>
      <ol>Hi</ol>
    <ol><div ref={mountRef}></div></ol>



    </ol>
    </div>
    </div>
  );
}

export default App;
