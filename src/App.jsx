import { Canvas, useFrame } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import background from './assets/background/banner.jpg'
import './index.css'
import NavBar from "./components/NavBar";
import { useEffect, useRef, useState } from "react";
import Experience2 from "./components/Experience2";
import { ScrollControls } from "@react-three/drei";


function App() {


  return (

    <div>


      {/* <section id="banner">

        <div style={{ backgroundImage: `url(${background})`, backgroundPosition: "0, 0", backgroundSize: "cover" }}>

          <NavBar />

          <div style={{ display: "flex", alignContent: "center", height: "100vh", justifyContent: "space-around", alignItems: "center", maxWidth: "2000px", margin: "auto", }}>
            <div>
              <div className="title-font" style={{ fontSize: "100px", marginRight: "5px", fontFamily: 'lilita One, cursive;', color: "white" }}>Hi, I am <strong style={{ color: "#ffeb3b" }}>Tanguy</strong></div>
              <div className="title-font" style={{ fontSize: "48px", marginRight: "5px", fontFamily: 'lilita One, cursive;', color: "white" }}>

                <div>I am full stack Web developper</div>
                <div style={{ fontSize: "16px", fontFamily: 'none', color: "white", maxWidth: "400px", marginRight: 'auto' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Animi neque ad eum dolorem error qui ea quis tempora. Corrupti
                  quo enim odio laboriosam molestias odit perferendis voluptatem at eum suscipit?</div>

                <a className="btn btn-primary px-5 py-2" href="#project" >Hire me</a>
              </div>
            </div>

            <div style={{ right: "0", top: "0", }}>
              <Canvas
                style={{ height: `100vh`, width: "500px", marginLeft: "-250px" }} shadows camera={{ position: [25, 5, 15], fov: 10 }}>
                <Experience scroll={scroll} />
              </Canvas>
            </div>
          </div>

        </div>
      </section> */}


      <section id="project" style={{ backgroundPosition: "0, 0", backgroundSize: "cover" }}>

        {/* <div className="title-font container" style={{ fontSize: "100px", marginRight: "36px", fontFamily: 'lilita One, cursive;', color: "white" }}>My <strong style={{ color: "#ffeb3b" }}>projects</strong></div> */}
        <div className="title-font" style={{ fontSize: "48px", marginRight: "5px", fontFamily: 'lilita One, cursive;', color: "white" }}>
          <Canvas
            style={{ height: `100vh`, width: "100vw" }} shadows >
            <ScrollControls pages={20} damping={2}>
              <Experience2 />
            </ScrollControls>
          </Canvas>
        </div>

      </section>




    </div>

  );
}

export default App;
