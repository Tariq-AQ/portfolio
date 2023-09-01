import React, { useRef, useState } from 'react'
import { Canvas, useFrame,useLoader } from '@react-three/fiber'
import {CameraControls, BakeShadows } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from 'react'
import './3d.css'

function ThreeD() {
   
  return (
    <div className="threeD__container" >
    <Canvas  id='threeD__container'>
    <Suspense fallback={null}>

        <Tree  />
        {/* <Wireframe/> */}

    {/* <CameraControls minDistance={2} maxDistance={4}  /> */}
          <ambientLight intensity={0.1} />
        <directionalLight   color="white" position={[10, 2, 2]} />
        <directionalLight   color="white" position={[-10, -2, -2]} />

    </Suspense>
    </Canvas>
    </div>
  )
}



  
  const Tree = () => {
    
    const ref = useRef()
    useFrame(({clock}) => {ref.current.rotation.y = clock.getElapsedTime()/10})
    const gltf = useLoader(GLTFLoader, "./cube.gltf");
    return (
         <primitive  position={[0, -2, 1]}  object={gltf.scene} scale={1} ref={ref}/>
    );
  };

 

export default ThreeD