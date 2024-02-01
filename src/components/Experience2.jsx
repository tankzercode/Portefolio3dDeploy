
import { Float, Line, OrbitControls, PerspectiveCamera, useScroll, Text, Cloud, Image } from "@react-three/drei";
import World from "./World";
import { Cloud1 } from "./Cloud1";
import Cloud2 from "./Cloud2";
import { Plane } from "./Plane";
import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import * as THREE from "three";
import { Cloud5 } from "./Cloud5";
import { Cloud8 } from "./Cloud8";
import { Balon1 } from "./Ballon1";

const NUMBERPOINTS = 1200
export default function Experience2() {
  const largeur = window.innerWidth;
  var scale = 0.5

  var positionX = -3
  if (window.innerWidth < "550") {
    scale = 0.2
    positionX = 0
  } else {
    scale = 0.5


  }

  useEffect(() => {
    console.log(largeur)


    console.log(scale)
  }, [])

  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(2, 0, -10),
      new THREE.Vector3(0, 0, -20),
      new THREE.Vector3(-2, 0, -30),
      new THREE.Vector3(0, 0, -40),
      new THREE.Vector3(2, 0, -50),
      new THREE.Vector3(0, 0, -60),
      new THREE.Vector3(-2, 0, -70),
      new THREE.Vector3(0, 0, -80),
      new THREE.Vector3(2, 0, -90),
      new THREE.Vector3(0, 0, -100),
      new THREE.Vector3(-2, 0, -120),
      new THREE.Vector3(0, 0, -130),
      new THREE.Vector3(-3, 0, -140),
      new THREE.Vector3(0, 0, -150),
    ], false, "catmullrom", 0.5)
  })

  const linePoint = useMemo(() => {
    return curve.getPoints(NUMBERPOINTS)
  }, [curve])






  const Scroll = useScroll();
  const vec = new Vector3()
  const cameraGroup = useRef()
  const airplane = useRef()

  useFrame((_state, delta) => {
    const curpointIndex = Math.min(Math.round(Scroll.offset * linePoint.length), linePoint.length - 1)

    const curpoint = linePoint[curpointIndex]
    cameraGroup.current.position.lerp(curpoint, delta * 10)
    const pointAhead = linePoint[Math.min(curpointIndex + 1), linePoint.length - 1]


    const xDisplacement = (pointAhead.x - curpoint.x) * 500
    const angleRotation = (xDisplacement < 0 ? 1 : -1) * Math.min(Math.abs(xDisplacement), Math.PI / 3);

    const targetAirplane = new THREE.Quaternion().setFromEuler(new THREE.Euler(

      airplane.current.rotation.x,
      airplane.current.rotation.y,
      angleRotation,

    ))

    airplane.current.quaternion.slerp(targetAirplane, delta / 2)




    // _state.camera.position.lerp(vec.set(0,0, curpoint), 0.5)

  })


  return (
    <>

      {/* <OrbitControls enableZoom={false} /> */}

      <group ref={cameraGroup}>
        <PerspectiveCamera position={[0, 0.3, 7]} fov={30} makeDefault />



        <group ref={airplane} >
          <Float floatIntensity={0.000} speed={3}>
            <Plane rotation-y={Math.PI / 2} scale={[5, 5, 5]} position={[0, 0, 0]} />
          </Float>
        </group>
      </group>
      <World />

      <group position={[0, -1, 0]}>
        <Line points={linePoint} color={'white'} lineWidth={10} transparent opacity={0.5} />
      </group>


      <group position={[positionX, 0.2, -30]}>
        <Text scale={scale} fontSize={0.17} color="white" anchorX={"left"} anchorY={"middle"} >
          <meshStandardMaterial onBeforeCompile={(shader) => {
            shader.fragmentShader = shader.fragmentShader.replace(`vec4 diffuseColor = vec4( diffuse, opacity );`,
              `float fadeDist = 50.0;
              float dist = length(vViewPosition);
              float fadeOpacity = smoothstep(fadeDist, 0.5, dist);
              vec4 diffuseColor = vec4(diffuse, fadeOpacity * opacity);`)

            console.log(shader.fragmentShader)

          }} envMapIntensity={2} transparent opacity={1} />
          Hello {'\n'}
          {'\n'}
          {'\n'}
        </Text>
        <Text scale={scale} fontSize={0.20} color="white" anchorX={"left"} anchorY={"middle"} >

          <meshStandardMaterial onBeforeCompile={(shader) => {
            shader.fragmentShader = shader.fragmentShader.replace(`vec4 diffuseColor = vec4( diffuse, opacity );`,
              `float fadeDist = 50.0;
  float dist = length(vViewPosition);
  float fadeOpacity = smoothstep(fadeDist, 0.5, dist);
  vec4 diffuseColor = vec4(diffuse, fadeOpacity * opacity);`)

            console.log(shader.fragmentShader)

          }} envMapIntensity={2}  opacity={1} />


          I am tanguy {'\n'}
          full stack developpeur


        </Text>


        {/* <Image url="src/assets/photoProfil.png"  /> */}


      </group>
      <Cloud5 position={[3, 1, -65]} />
      <Cloud5 position={[-4, -0.6, -65]} />


      <Cloud5 position={[4, -0.6, -45]} />
      <Cloud5 position={[-3, 1, -45]} />




      <Cloud5 position={[4, 0.5, -35]} />
      <Cloud5 position={[4, -3, -35]} />




      <Cloud5 position={[4, 0.5, -17]} />



      <Float floatIntensity={0.000} speed={0.2}>
        <Balon1 scale={[0.1, 0.1, 0.1]} position={[7, 2, -50]} />
      </Float>
      <Cloud5 position={[-3, 0.5, -9]} />
      <Cloud5 position={[4, -1, -7]} />




    </>
  )
}