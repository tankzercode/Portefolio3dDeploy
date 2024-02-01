export default function TextComponent (props) {


    
    <Text scale={scale} position={[positionX, 0.2, -30]} fontSize={0.5}>

    <meshStandardMaterial onBeforeCompile={(shader) => {
        shader.fragmentShader = shader.fragmentShader.replace(`vec4 diffuseColor = vec4( diffuse, opacity );`,
          `float fadeDist = 50.0;
float dist = length(vViewPosition);
float fadeOpacity = smoothstep(fadeDist, 0.5, dist);
vec4 diffuseColor = vec4(diffuse, fadeOpacity * opacity);`)

        console.log(shader.fragmentShader)

      }} envMapIntensity={2} transparent opacity={1} />
     {{props.title}} {'\n'}
          </Text>


    
}