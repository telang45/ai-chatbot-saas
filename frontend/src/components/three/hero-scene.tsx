import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Float, PointMaterial } from "@react-three/drei";
import { useRef, Suspense, useMemo } from "react";
import * as THREE from "three";

function NeuralOrb() {
  const groupRef = useRef<THREE.Group>(null);
  const orbRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Generate random particles distributed on a sphere
  const [particlePositions] = useMemo(() => {
    const count = 100;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Golden spiral distribution on sphere for uniform spread
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const radius = 1.9 + Math.random() * 0.4; // slightly outside the glass sphere
      
      positions[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
      positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return [positions];
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const { x, y } = state.pointer; // mouse coordinates (-1 to 1)

    if (groupRef.current) {
      // Rotate group based on mouse movement
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x * 0.6 + time * 0.05, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y * 0.4 + Math.sin(time * 0.2) * 0.1, 0.05);
    }

    if (orbRef.current) {
      // Pulse scale slightly
      const pulse = 1.5 + Math.sin(time * 1.5) * 0.04;
      orbRef.current.scale.set(pulse, pulse, pulse);
    }

    if (innerRef.current) {
      // Rotate nested inner wireframe core
      innerRef.current.rotation.y = -time * 0.2;
      innerRef.current.rotation.x = time * 0.15;
    }

    if (particlesRef.current) {
      // Slow rotation of outer points
      particlesRef.current.rotation.y = time * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer Glow Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <PointMaterial
          transparent
          color="#c084fc"
          size={0.06}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Inner Wireframe Core */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[0.9, 1]} />
        <meshBasicMaterial color="#ec4899" wireframe transparent opacity={0.35} />
      </mesh>

      {/* Main Glass Orb */}
      <Sphere ref={orbRef} args={[1.2, 64, 64]} scale={1.5}>
        <meshPhysicalMaterial
          color="#d8b4fe"
          roughness={0.12}
          metalness={0.08}
          transmission={0.88}
          thickness={1.4}
          ior={1.45}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
          transparent
          opacity={0.85}
        />
      </Sphere>
    </group>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.6} />
        {/* Lights mapping coordinates for glossy glass reflection */}
        <pointLight position={[10, 10, 10]} intensity={1.6} color="#c084fc" />
        <directionalLight position={[3, 3, 5]} intensity={1.6} color="#c084fc" />
        <directionalLight position={[-3, -2, -3]} intensity={1.2} color="#ec4899" />
        <Suspense fallback={null}>
          <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.8}>
            <NeuralOrb />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
}
