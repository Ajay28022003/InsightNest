import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

export default function Background3D() {
  return (
    <div className="absolute inset-0 z-0 bg-black">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        
        {/* Slightly faster rotation for better energy */}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />

        {/* NEW: The Atmosphere (Stardust) */}
        {/* This creates a beautiful, slowly moving particle field around the shape */}
        <Stars radius={50} depth={50} count={100000} factor={4} saturation={0} fade speed={1} />

        <mesh>
          <octahedronGeometry args={[3, 12]} />
          
          {/* UPGRADED MATERIAL: We added 'emissive' properties. 
              This tells the computer that this object emits its own light, 
              which is required for the Bloom effect to catch it. */}
          <meshStandardMaterial 
            color="#d4af37" 
            wireframe 
            emissive="#d4af37" 
            emissiveIntensity={1.5} 
            toneMapped={false}
          />
        </mesh>

        {/* NEW: The Cinematic Camera Lens */}
        {/* EffectComposer acts like a real camera lens applying filters */}
        <EffectComposer>
          <Bloom mipmapBlur intensity={1.2} luminanceThreshold={0.1} />
        </EffectComposer>

      </Canvas>
    </div>
  );
}