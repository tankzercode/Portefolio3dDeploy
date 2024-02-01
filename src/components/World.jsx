
import { Sphere } from '@react-three/drei'
import { Gradient, LayerMaterial } from 'lamina'
import * as THREE from 'three'
function World() {
    
    return (
        <>
            <ambientLight intensity={0.2} />
            <directionalLight />

            <Sphere scale={[500,500,500]}  rotation-y={Math.PI/2}>
                <LayerMaterial lightting='physical' side={THREE.BackSide} >
                    <Gradient colorA={'#c4891a'} colorB={"white"} axes={'y'} start={0} end={-0.5} />
                </LayerMaterial>
            </Sphere>




        </>
    )
}

export default World