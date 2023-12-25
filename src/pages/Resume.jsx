import Header from '../components/Header'

import { Canvas } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'

const Resume = () => {
    return (
        <div className="h-[60rem] flex flex-col items-center mb-[5rem]">
            <Header />

            <iframe 
            src="https://drive.google.com/file/d/1ZlS5Er-EcmR2UNQ9s98L5nkafaD7I1-F/preview"
            className="z-50 h-[85%] w-[90%] md:w-[60%]" 
            allow="autoplay">
            </iframe>

            <div className="absolute bottom-[-20%] md:right-[-40%] h-[80%] w-full">
                <Canvas>
                    <ambientLight intensity={1} color="rgb(140, 110, 255)" />
                    <directionalLight position={[-4, 5, 2]} intensity={1} />
                    <Sphere visible args={[1, 100, 300]} scale={2}>
                        <MeshDistortMaterial
                        color="rgb(0, 255, 255)"
                        attach="material"
                        distort={0.75}
                        roughness={0.4}
                        />
                    </Sphere>
                </Canvas>
            </div>

            <div className="absolute top-[10%] md:left-[-40%] h-[65%] w-full">
                <Canvas>
                    <ambientLight intensity={1} color="rgb(140, 110, 255)" />
                    <directionalLight position={[4, -2, 2]} intensity={1} />
                    <Sphere visible args={[1, 100, 300]} scale={2}>
                        <MeshDistortMaterial
                        color="rgb(0, 255, 255)"
                        attach="material"
                        distort={0.64}
                        roughness={0.4}
                        />
                    </Sphere>
                </Canvas>
            </div>

        </div>

    )
}

export default Resume;