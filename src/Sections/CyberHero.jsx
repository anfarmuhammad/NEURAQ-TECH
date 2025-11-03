// import React, { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import * as THREE from "three";

// export const CyberHero = () => {
//   const particlesRef = useRef(null);

//   useEffect(() => {
//     if (!particlesRef.current) return;

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );

//     const renderer = new THREE.WebGLRenderer({
//       canvas: particlesRef.current,
//       alpha: true,
//       antialias: true,
//     });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setClearColor(0x000000, 0);

//     // Create particles
//     const geometry = new THREE.BufferGeometry();
//     const count = 1500;
//     const positions = new Float32Array(count * 3);
//     const colors = new Float32Array(count * 3);

//     for (let i = 0; i < count * 3; i++) {
//       positions[i] = (Math.random() - 0.5) * 10;
//       colors[i] = Math.random();
//     }

//     geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
//     geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

//     const material = new THREE.PointsMaterial({
//       size: 0.005,
//       vertexColors: true,
//       transparent: true,
//       opacity: 0.8,
//     });

//     const mesh = new THREE.Points(geometry, material);
//     scene.add(mesh);
//     camera.position.z = 2;

//     const animate = () => {
//       requestAnimationFrame(animate);
//       mesh.rotation.x += 0.0005;
//       mesh.rotation.y += 0.001;
//       renderer.render(scene, camera);
//     };
//     animate();

//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       renderer.dispose();
//     };
//   }, []);

//   return (
//     <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black text-white font-mono">
//       {/* Quantum Particles Canvas */}
//       <canvas
//         ref={particlesRef}
//         className="absolute inset-0 w-full h-full pointer-events-none"
//       />

//       {/* Holographic Grid */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(57,255,20,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-[gridMove_20s_linear_infinite]" />

//       {/* Animated Lines */}
//       <div className="absolute top-1/4 w-full h-[1px] bg-gradient-to-r from-transparent via-[#39ff14] to-transparent opacity-30 animate-[scanLine_8s_ease-in-out_infinite]" />
//       <div className="absolute top-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#39ff14] to-transparent opacity-30 animate-[scanLine_6s_ease-in-out_infinite_reverse]" />
//       <div className="absolute top-3/4 w-full h-[1px] bg-gradient-to-r from-transparent via-[#39ff14] to-transparent opacity-30 animate-[scanLine_10s_ease-in-out_infinite_2s]" />

//       {/* Main Text */}
//       <div className="relative text-center z-10 px-6">
//         <motion.h1
//           className="text-[clamp(3rem,12vw,9rem)] font-extrabold tracking-wider text-[#39ff14] leading-tight"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           TECH <br /> NEURAQ
//         </motion.h1>

//         <motion.p
//           className="text-gray-300 max-w-2xl mx-auto mt-6 text-lg md:text-xl font-light"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5, duration: 1 }}
//         >
//           Redefining the boundaries with <span className="text-[#ff00ff]">AI</span> — We make your online identity.
//         </motion.p>

//         <motion.div
//           className="flex flex-wrap justify-center gap-6 mt-10"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8, duration: 0.8 }}
//         >
//           <Link to="/innovation">
//             <button className="relative border-2 border-[#39ff14] text-[#39ff14] uppercase tracking-widest px-8 py-3 font-semibold hover:bg-[#39ff14] hover:text-black transition duration-300 rounded-lg shadow-[0_0_10px_#39ff14]">
//               Discover More
//             </button>
//           </Link>
//           <Link to="/contact">
//             <button className="relative border-2 border-[#ff00ff] text-[#ff00ff] uppercase tracking-widest px-8 py-3 font-semibold hover:bg-[#ff00ff] hover:text-black transition duration-300 rounded-lg shadow-[0_0_10px_#ff00ff]">
//               Let's Collaborate
//             </button>
//           </Link>
//         </motion.div>
//       </div>

//       {/* Floating Green Lines */}
//       {[...Array(3)].map((_, i) => (
//         <div
//           key={i}
//           className={`absolute top-0 left-[${20 + i * 30}%] w-px h-full bg-gradient-to-b from-transparent via-[#39ff14] to-transparent opacity-60 animate-[dataStream_${6 + i * 2}s_linear_infinite_${i * 2}s]`}
//         ></div>
//       ))}

//       {/* Scroll Indicator */}
//       <motion.div
//         className="absolute bottom-12 flex flex-col items-center text-[#39ff14]"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5 }}
//       >
//         <div className="w-[2px] h-10 bg-gradient-to-b from-[#39ff14] to-transparent relative">
//           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 border-r-2 border-b-2 border-[#39ff14] rotate-45"></div>
//         </div>
//         <div className="w-px h-8 bg-[#39ff14] opacity-60 mt-3 animate-pulse"></div>
//       </motion.div>
//     </section>
//   );
// };


// // src/sections/CyberHero.jsx
// import React, { useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import '../Styles/CyberHero.css'

// export const CyberHero = () => {
//   const canvasRef = useRef(null);
//   const particlesRef = useRef(null);

//   useEffect(() => {
//     // Three.js particle system implementation
//     const initParticles = () => {
//       if (typeof window !== 'undefined' && particlesRef.current) {
//         const THREE = window.THREE;
//         if (!THREE) return;

//         const scene = new THREE.Scene();
//         const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//         const renderer = new THREE.WebGLRenderer({ 
//           canvas: particlesRef.current,
//           alpha: true,
//           antialias: true 
//         });

//         renderer.setSize(window.innerWidth, window.innerHeight);
//         renderer.setClearColor(0x000000, 0);

//         // Create particles
//         const particlesGeometry = new THREE.BufferGeometry();
//         const particlesCount = 1500;
        
//         const posArray = new Float32Array(particlesCount * 3);
//         const colorArray = new Float32Array(particlesCount * 3);

//         for(let i = 0; i < particlesCount * 3; i++) {
//           posArray[i] = (Math.random() - 0.5) * 10;
//           colorArray[i] = Math.random();
//         }

//         particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
//         particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

//         const particlesMaterial = new THREE.PointsMaterial({
//           size: 0.005,
//           vertexColors: true,
//           transparent: true,
//           opacity: 0.8
//         });

//         const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
//         scene.add(particlesMesh);

//         camera.position.z = 2;

//         const animate = () => {
//           requestAnimationFrame(animate);
//           particlesMesh.rotation.x += 0.0005;
//           particlesMesh.rotation.y += 0.001;
//           renderer.render(scene, camera);
//         };

//         animate();

//         const handleResize = () => {
//           camera.aspect = window.innerWidth / window.innerHeight;
//           camera.updateProjectionMatrix();
//           renderer.setSize(window.innerWidth, window.innerHeight);
//         };

//         window.addEventListener('resize', handleResize);

//         return () => {
//           window.removeEventListener('resize', handleResize);
//           renderer.dispose();
//         };
//       }
//     };

//     initParticles();
//   }, []);

//   return (
//     <section className="cyber-hero">
//       {/* Holographic Interface */}
//       <div className="holographic-interface">
//         <div className="holographic-grid"></div>
//         <div className="holographic-line line-1"></div>
//         <div className="holographic-line line-2"></div>
//         <div className="holographic-line line-3"></div>
//         <div className="holographic-node node-1"></div>
//         <div className="holographic-node node-2"></div>
//         <div className="holographic-node node-3"></div>
//       </div>

//       {/* Quantum Particles */}
//       <canvas 
//         ref={particlesRef} 
//         className="quantum-particles" 
//         id="quantum-particles"
//       />

//       {/* Main Content */}
//       <div className="cyber-content">
//         <div className="cyber-text">
//           <motion.h1 
//             className="cyber-title glitch" 
//             data-text="TECH"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <span className="title-line">TECH</span>
//             <span className="title-line">NEURAQ</span>
//           </motion.h1>
          
//           <motion.p 
//             className="cyber-subtitle"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5, duration: 1 }}
//           >
//             Redefining the boundaries with AI || We make your online identity
//           </motion.p>
          
//           <motion.div 
//             className="cyber-cta"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8, duration: 0.8 }}
//           >
//             <Link to="/innovation">
//               <button className="cyber-btn primary">
//                 <span className="btn-text">Discover More</span>
//                 <div className="btn-hover"></div>
//                 <div className="btn-sparkles"></div>
//               </button>
//             </Link>
            
//             <Link to="/contact">
//               <button className="cyber-btn secondary">
//                 <span className="btn-text">Let's Collaborate</span>
//                 <div className="btn-hover"></div>
//                 <div className="btn-sparkles"></div>
//               </button>
//             </Link>
//           </motion.div>
//         </div>
//       </div>

//       {/* Data Stream */}
//       <div className="data-stream">
//         <div className="stream-line"></div>
//         <div className="stream-line"></div>
//         <div className="stream-line"></div>
//       </div>

//       {/* Cyber Scroll Indicator */}
//       <motion.div 
//         className="cyber-scroll"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5 }}
//       >
//         <div className="scroll-arrow"></div>
//         <div className="scroll-pulse"></div>
//       </motion.div>
//     </section>
//   );
// };

// src/sections/CyberHero.jsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../Styles/CyberHero.css';

export const CyberHero = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // === Quantum Particles Background ===
    const initQuantumParticles = () => {
      const canvas = particlesRef.current;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
      });

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);

      // Particles
      const particlesGeometry = new THREE.BufferGeometry();
      const particleCount = 1000;
      const posArray = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 10;
      }
      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.05,
        color: 0x88d3ce,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
      });

      const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particlesMesh);
      camera.position.z = 5;

      // Mouse Interaction
      let mouseX = 0, mouseY = 0;
      const handleMouseMove = (e) => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      };
      document.addEventListener('mousemove', handleMouseMove);

      // Animation
      const animate = () => {
        requestAnimationFrame(animate);
        particlesMesh.rotation.x += 0.001;
        particlesMesh.rotation.y += 0.001;
        camera.position.x += (mouseX * 2 - camera.position.x) * 0.05;
        camera.position.y += (mouseY * 2 - camera.position.y) * 0.05;
        camera.lookAt(scene.position);
        renderer.render(scene, camera);
      };
      animate();

      // Resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        document.removeEventListener('mousemove', handleMouseMove);
        renderer.dispose();
      };
    };

    // === Cyber Text Animation ===
    const animateCyberText = () => {
      gsap.from('.cyber-title', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      });

      gsap.from('.cyber-subtitle', {
        x: -50,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: 'power2.out',
      });

      gsap.from('.cyber-btn', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.9,
        ease: 'back.out(1.7)',
      });

      const streamLines = document.querySelectorAll('.stream-line');
      streamLines.forEach((line, i) => {
        gsap.to(line, {
          duration: 8 + i * 2,
          backgroundPosition: `0 ${window.innerHeight * 2}px`,
          repeat: -1,
          ease: 'none',
        });
      });
    };

    initQuantumParticles();
    animateCyberText();
  }, []);

  return (
    <section className="cyber-hero">
      {/* Particles Background */}
      <canvas ref={particlesRef} className="quantum-particles" />

      {/* Main Content */}
      <div className="cyber-content">
        <div className="cyber-text">
          <motion.h1
            className="cyber-title glitch"
            data-text="TECH NEURAQ"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="title-line">TECH</span>
            <span className="title-line">NEURAQ</span>
          </motion.h1>

          <motion.p
            className="cyber-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Redefining the boundaries with AI || We make your online identity
          </motion.p>

          <motion.div
            className="cyber-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link to="/innovation">
              <button className="cyber-btn primary">
                <span className="btn-text">Discover More</span>
              </button>
            </Link>
            <Link to="/contact">
              <button className="cyber-btn secondary">
                <span className="btn-text">Let's Collaborate</span>
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Data Stream Lines */}
      <div className="data-stream">
        <div className="stream-line"></div>
        <div className="stream-line"></div>
        <div className="stream-line"></div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="cyber-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="scroll-arrow"></div>
        <div className="scroll-pulse"></div>
      </motion.div>
    </section>
  );
};
