import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import { models } from "../../constants"

import CanvasLoader from '../Loader'

const Earth = () => {

    const earth = useGLTF(models.planet.url)

    return (
        <primitive
            object={earth.scene}
            scale={2.5}
            position-y={0}
            rotation-y={0}
        />
    )
}

const EarthCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop="demand"
            gl={{ preserverDrawingBuffer: true}}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6]
            }}
            className="cursor-grab"
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls 
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI /2}
                    minPolarAngle={Math.PI /2}
                />
                    <Earth />
            </Suspense>
        </Canvas>
    )
}

export default EarthCanvas