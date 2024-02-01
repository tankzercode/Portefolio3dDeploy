// import { OrbitControls } from "@react-three/drei";
// import { Avatar } from "./Avatar";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, useScroll } from "@react-three/drei";
import { useRef } from "react";
import { Planet } from "./Planet";

export const Experience = (props) => {

  console.log("experience props")
  console.log(props.scroll)
  const scroll = useScroll();
  const test = useRef()
  useFrame((state, delta) => {

  })

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight></directionalLight>
      <OrbitControls
        enableZoom={false}
       position={[0,0,100]}
      />
      <Planet scroll={props.scroll}/>

    </>
  );
};
