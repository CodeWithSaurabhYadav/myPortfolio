import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei"

import CanvasLoader from '../Loader'

const Ball = (props) => {

    const [decal] = useTexture([props.imgUrl])

    return (
        <Float
            speed={1.75}
            rotationIntensity={1}
            floatIntensity={2}
        >
            <ambientLight intensity={0.25} />
            <directionalLight position={[0,0,0.05]} />

            <mesh castShadow receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1,1]} />
                <meshStandardMaterial 
                    color="#fff8eb"
                    polygonOffset
                    polygonOffsetFactor={-5}
                    floatShading
                />
                <Decal
                    position={[0,0,1]}
                    rotation={[ 2 * Math.PI, 0, 6.25 ]}
                    scale={1}
                    map={decal}
                    flatShading
                />
            </mesh>
        </Float>
    )
}

const BallCanvas = ({ icon, name }) => {
    return (
        <>
            <Canvas
                className="cursor-grab"
                frameloop="demand"
                dpr={[1,2]}
                gl={{ preserveDrawingBuffer: true }}
                >
                <Suspense fallback={<CanvasLoader />}>
                    <OrbitControls
                        enableZoom={false}
                        />
                    <Ball imgUrl={icon} />
                </Suspense>
                <Preload all />
            </Canvas>
            <p className="text-center py-2 hover:text-sky-600">{name}</p>
        </>
    )
}

export default BallCanvas