import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import * as THREE from "three";

// Throttle function to limit animation speed, still keeping it smooth
const throttle = (func, delay) => {
  let lastCall = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
};

const Scene = ({ cameraRef }) => {
  const modularGroup = useRef();
  const particleGroup = useRef();
  const [animationSpeed, setAnimationSpeed] = useState(0.02);

  // Use `useThree` to directly access mouse coordinates and camera
  const { mouse, camera } = useThree();

  // Particles initialization
  const particles = useMemo(() => {
    const particleArray = [];
    for (let i = 0; i < 150; i++) {
      const pscale = 0.15 + Math.random() * 0.30;
      const particle = new THREE.Mesh(
        new THREE.SphereGeometry(pscale, 12, 6),
        new THREE.MeshBasicMaterial({
          color: 0x6fa8dc,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.1,
        })
      );
      particle.position.set(
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
        Math.random() * 6 - 3
      );
      particle.scale.set(pscale, pscale, pscale);
      particle.speedValue = Math.random() * 0.2 + 0.8;
      particle.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      particleArray.push(particle);
    }
    return particleArray;
  }, []);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    if (particleGroup.current) {
      const particlesChildren = particleGroup.current.children;
      const totalParticles = particlesChildren.length;

      for (let i = 0; i < totalParticles; i++) {
        const particle = particlesChildren[i];

        // Apply particle updates only if necessary
        if (
          Math.abs(particle.position.x) < 5 &&
          Math.abs(particle.position.y) < 5 &&
          Math.abs(particle.position.z) < 5
        ) {
          particle.rotation.x += particle.speedValue * 0.003;
          particle.rotation.y += particle.speedValue * 0.003;
          particle.material.opacity =
            0.15 + 0.06 * Math.sin(time * 2 + particle.speedValue);

          const dx = mouse.x * 0.02 - particle.position.x;
          const dy = mouse.y * 0.02 - particle.position.y;
          particle.position.x += dx * animationSpeed;
          particle.position.y += dy * animationSpeed;
        }
      }
    }

    // Handle the modular group rotation
    if (modularGroup.current) {
      modularGroup.current.rotation.y -=
        (mouse.x * 2 + modularGroup.current.rotation.y) * 0.03;
      modularGroup.current.rotation.x -=
        (-mouse.y * 2 + modularGroup.current.rotation.x) * 0.03;
    }

    // Keep the camera looking at the origin
    if (cameraRef.current) {
      cameraRef.current.lookAt(0, -0.35, 0);
    }
  });

  return (
    <>
      <group ref={particleGroup}>
        {particles.map((particle, index) => (
          <primitive object={particle} key={index} />
        ))}
      </group>

      <group ref={modularGroup}>
        {Array.from({ length: 15 }, (_, i) => {
          const geometry = new THREE.IcosahedronGeometry(1, 1);
          const material = new THREE.MeshStandardMaterial({
            color: 0x111111,
            wireframe: false,
          });
          const cube = new THREE.Mesh(geometry, material);
          cube.position.set(
            Math.random() * 3 - 1,
            Math.random() * 2 - 1,
            Math.random() * 2 - 1
          );
          return <primitive object={cube} key={i} />;
        })}
      </group>

      <ambientLight intensity={0.3} />
      <spotLight position={[5, 5, 2]} intensity={1.5} castShadow />
      <pointLight position={[1, -3, -1]} color={0x00ffff} intensity={0.2} />
    </>
  );
};

export const Hero = () => {
  const cameraRef = useRef();
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowText(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-screen bg-black">
      <Canvas
        className="w-full h-full"
        camera={{ position: [0, 0, 3], fov: 35 }}
        onCreated={({ gl, camera }) => {
          gl.setPixelRatio(window.devicePixelRatio);
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          cameraRef.current = camera;
        }}
      >
        <Scene cameraRef={cameraRef} />
        <OrbitControls enableZoom={false} />
        <Preload all />
      </Canvas>

      <div
        className={`kanit-bold w-full justify-center absolute text-center transition-opacity duration-1000 ${
          showText ? "opacity-100" : "opacity-0"
        }`}
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-black">
          Full Stack
        </h1>
        <h3 className="text-2xl md:text-3xl text-blue-500">Web Developer</h3>

        {/* Updated grid layout for responsive icons */}
        <div className="flex justify-center gap-12 items-center mt-12 flex-wrap">
          {[
            { src: "/javascript.png", text: "JavaScript" },
            { src: "/python.png", text: "Python" },
            { src: "/react.png", text: "React" },
            { src: "/sql.png", text: "SQL" },
            { src: "/graphql.png", text: "GraphQL" },
            { src: "/docker.png", text: "Docker" },
            { src: "/aws.png", text: "AWS" },
          ].map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center group w-1/4 sm:w-1/3 md:w-1/6 lg:w-auto"
            >
              <img
                src={item.src}
                className="transition-transform duration-300 hover:scale-140 w-10 sm:w-14 md:w-24 lg:w-24"
              />
              <span className="absolute bottom-[-2rem] text-black font-bold text-xl opacity-100 sm:opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
