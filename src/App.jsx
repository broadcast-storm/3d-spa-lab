import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, softShadows } from '@react-three/drei'
import * as THREE from 'three'
import Header from './components/Header/Header'
import Johnny from './models/Johnny'
import Roboto from './fonts/roboto.json'

softShadows()

function App() {
   const font = new THREE.FontLoader().parse(Roboto)

   // configure font geometry
   const textOptions = {
      font,
      size: 1,
      height: 0.5,
   }

   return (
      <>
         <Header />
         <Canvas shadows camera={{ position: [0, 0.02, 3], fov: 35 }}>
            <color attach="background" args={['#b7b7b7']} />
            <fog attach="fog" args={['#b7b7b7', 50, 100]} />

            <OrbitControls
               enablePan={false}
               enableZoom={false}
               minPolarAngle={Math.PI / 6}
               maxPolarAngle={Math.PI / 2.1}
               target={[0, 1, 0]}
            />

            <group>
               <pointLight position={[0, 2, 0]} color="red" intensity={0.8} distance={10} />
               <hemisphereLight skyColor="blue" intensity={0.4} />
               <directionalLight
                  position={[5, 5, 5]}
                  intensity={2}
                  color="orange"
                  shadow-mapSize-width={2048}
                  shadow-mapSize-height={2048}
                  shadow-camera-far={40}
                  shadow-camera-near={0.1}
                  shadow-camera-left={-2}
                  shadow-camera-right={2}
                  shadow-camera-top={2}
                  shadow-camera-bottom={-2}
                  castShadow
               />
            </group>

            <group>
               <Suspense
                  fallback={
                     <mesh scale={0.15} position={[-0.5, 1, 0]}>
                        <textGeometry
                           attach="geometry"
                           args={['Загрузка \n модели', textOptions]}
                        />
                        <meshStandardMaterial attach="material" />
                     </mesh>
                  }
               >
                  <Johnny />
               </Suspense>
               <mesh scale={200} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                  <planeGeometry />
                  <meshPhongMaterial color="gray" />
               </mesh>
            </group>
         </Canvas>
      </>
   )
}

export default App
