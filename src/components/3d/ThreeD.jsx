import React, { useRef, useState } from 'react'
import { Canvas, useFrame,useLoader } from '@react-three/fiber'
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from 'react'
import './3d.css'

function ThreeD() {
  return (
    <div className="threeD__container">
    <Canvas id='threeD__container'>
    <Suspense fallback={null}>
          <Model id='model'/>
          <OrbitControls />
          <ambientLight intensity={0.1} />
        <directionalLight color="white" position={[0, 5, 5]} />
    </Suspense>
    </Canvas>
    </div>
  )
}

// const MyMesh = () => {
//     const ref = useRef()
//     useFrame((state, delta) => (ref.current.rotation.x += delta))
//     const [hovered, hover] = useState(false)
//     const [clicked, click] = useState(false)
//     return (  
        
//         <mesh
//         ref={ref}
//         scale={clicked ? 1.5 : 1}
//         onClick={(event) => click(!clicked)}
//         onPointerOver={(event) => hover(true)}
//         onPointerOut={(event) => hover(false)}>
//         <boxGeometry args={[1, 1, 1]} />
//         <meshStandardMaterial color={hovered ? 'white': 'white'} />
//       </mesh>);
//   }


  const Model = () => {
    const ref = useRef()
    useFrame((state, delta) => (ref.current.rotation.x += delta))
    const gltf = useLoader(GLTFLoader, "./sphere.gltf");
    return (
      <>
        <primitive object={gltf.scene} scale={2} ref={ref} />
      </>
    );
  };


export default ThreeD