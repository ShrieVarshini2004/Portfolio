import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import './NeuralNetwork.css';

// Generate random neuron positions
function generateNeuralNetworkData(count = 300) {
  const positions = [];
  for (let i = 0; i < count; i++) {
    const x = THREE.MathUtils.randFloatSpread(20);
    const y = THREE.MathUtils.randFloatSpread(20);
    const z = THREE.MathUtils.randFloatSpread(5);
    positions.push(x, y, z);
  }
  return new Float32Array(positions);
}

function Neurons() {
  const ref = useRef();
  const positions = useMemo(() => generateNeuralNetworkData(300), []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.025) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#66fcf1"
        size={0.08}
        sizeAttenuation
        depthWrite={false}
        alphaTest={0.01}
      />
    </Points>
  );
}

const NeuralNetworkBackground = () => {
  return (
    <div className="neural-network-background">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <Neurons />
      </Canvas>
    </div>
  );
};

export default NeuralNetworkBackground;