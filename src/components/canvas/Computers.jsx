import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Canvas,useFrame } from '@react-three/fiber'
import React, { Suspense,useRef, useEffect, useState } from 'react'

import CanvasLoader from '../Loader'

const Computers = ({isMobile}) => {
 
  const computer = useGLTF('./dog.glb')

 

  // ./desktop_pc/scene.gltf
  return (
    <mesh>
      <hemisphereLight intensity={0.15}
      groundColor="black">
        <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
        <spotLight
        position={[-40, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />

<spotLight
        position={[20, -50, -10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />

        <pointLight intensity={1}/>
        <primitive   object={computer.scene}
        scale={isMobile ? 0.65:0.75}

        position={isMobile? [1,-2.5,0]:[-1,-3.25,0]}
        rotation={[0,1.25,0]} />
     
      </hemisphereLight>
    </mesh>
  )
}


const ComputersCanvas = () =>{

  const [isMobile , setIsMobile] = useState(false)

  useEffect(()=>{

    const mediaQuery = window.matchMedia('(max-width:500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) =>{
      setIsMobile(event.matches);
    }
    mediaQuery.addEventListener('change',handleMediaQueryChange)

    return ()=>{
      mediaQuery.removeEventListener('change',handleMediaQueryChange)
    }
  },[])

  return (
    <Canvas
   
    frameloop='demand'
    shadows
    camera={{position:[20,3,5] , fov:25  }}
    gl={{preserveDrawingBuffer:true}}>

      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
         autoRotate
         enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}

        />

        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}


export default ComputersCanvas;