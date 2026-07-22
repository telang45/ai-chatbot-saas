import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";
import { useRef, Suspense } from "react";
import type { Mesh } from "three";

function AnimatedSphere() {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.15;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.2}>
      <Sphere ref={ref} args={[1.5, 128, 128]} scale={1.6}>
        <MeshDistortMaterial color="#8b5cf6" attach="material" distort={0.45} speed={1.8} roughness={0.1} metalness={0.6} />
      </Sphere>
    </Float>
  );
}

export function HeroScene() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 3, 5]} intensity={1.2} color="#a78bfa" />
        <directionalLight position={[-3, -2, -3]} intensity={0.8} color="#ec4899" />
        <Suspense fallback={null}>
          <AnimatedSphere />
        </Suspense>
      </Canvas>
    </div>
  );
}
