// src/components/ThreeLanding.jsx
import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, useGLTF, OrbitControls, Stars } from '@react-three/drei';
import { a, useSpring } from '@react-spring/three';

// Simple placeholder GLTF model – using a box geometry for demo
const Card = () => {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);

  // rotate slowly
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.001;
    }
  });

  // mouse parallax tilt
  const { rotation } = useSpring({
    rotation: hovered ? [0.2, 0, 0] : [0, 0, 0],
    config: { mass: 1, tension: 170, friction: 26 },
  });

  return (
    <a.mesh
      ref={mesh}
      scale={1.5}
      rotation={rotation}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 0.6, 0.02]} />
      <meshStandardMaterial color="#f0e68c" metalness={0.5} roughness={0.2} />
    </a.mesh>
  );
};

const ThreeLanding = () => {
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    if (!gl) setWebglSupported(false);
  }, []);

  if (!webglSupported) {
    return (
      <div className="flex items-center justify-center h-64 bg-neutral-200 dark:bg-neutral-800 rounded-lg">
        <div className="text-center p-4">
          <h2 className="text-2xl font-heading mb-2">Your browser does not support WebGL.</h2>
          <p className="text-base font-body">Here is a static preview of the credential card.</p>
          <div className="mt-4 w-48 h-30 bg-gradient-to-br from-teal-400 to-amber-400 rounded-lg shadow-lg" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-96">
      <Canvas camera={{ position: [0, 0, 3] }} style={{ background: 'transparent' }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <Card />
        {/* floating seal */}
        <mesh position={[0, 0.4, 0.1]}>
          <circleGeometry args={[0.12, 32]} />
          <meshStandardMaterial color="#ffd700" metalness={0.8} roughness={0.1} />
          <Html center>
            <div className="text-xs font-bold text-white">Verified</div>
          </Html>
        </mesh>
        {/* rotating ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.8, 0.02, 16, 100]} />
          <meshBasicMaterial color="rgba(255,255,255,0.2)" transparent />
        </mesh>
        {/* particles */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default ThreeLanding;
