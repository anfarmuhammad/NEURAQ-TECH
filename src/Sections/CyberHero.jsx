// src/sections/CyberHero.jsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../Styles/CyberHero.css'

export const CyberHero = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    // Three.js particle system implementation
    const initParticles = () => {
      if (typeof window !== 'undefined' && particlesRef.current) {
        const THREE = window.THREE;
        if (!THREE) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({
          canvas: particlesRef.current,
          alpha: true,
          antialias: true
        });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);

        // Create particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 1500;

        const posArray = new Float32Array(particlesCount * 3);
        const colorArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
          posArray[i] = (Math.random() - 0.5) * 10;
          colorArray[i] = Math.random();
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

        const particlesMaterial = new THREE.PointsMaterial({
          size: 0.005,
          vertexColors: true,
          transparent: true,
          opacity: 0.8
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        camera.position.z = 2;

        const animate = () => {
          requestAnimationFrame(animate);
          particlesMesh.rotation.x += 0.0005;
          particlesMesh.rotation.y += 0.001;
          renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
          renderer.dispose();
        };
      }
    };

    initParticles();
  }, []);

  return (
    <section className="cyber-hero">
      {/* Holographic Interface */}
      <div className="holographic-interface">
        <div className="holographic-grid"></div>
        <div className="holographic-line line-1"></div>
        <div className="holographic-line line-2"></div>
        <div className="holographic-line line-3"></div>
        <div className="holographic-node node-1"></div>
        <div className="holographic-node node-2"></div>
        <div className="holographic-node node-3"></div>
      </div>

      {/* Quantum Particles */}
      <canvas
        ref={particlesRef}
        className="quantum-particles"
        id="quantum-particles"
      />

      {/* Main Content */}
      <div className="cyber-content">
        <div className="cyber-text">
          <motion.h1
            className="cyber-title glitch"
            data-text="TECH"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="title-line">TECH</span>
            <span className="title-line">NEURAQ</span>
          </motion.h1>

          <motion.p
            className="cyber-subtitle font-orbitron text-[1.2rem] leading-relaxed"
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
                <div className="btn-hover"></div>
                <div className="btn-sparkles"></div>
              </button>
            </Link>

            <Link to="/contact">
              <button className="cyber-btn secondary">
                <span className="btn-text">Let's Collaborate</span>
                <div className="btn-hover"></div>
                <div className="btn-sparkles"></div>
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Data Stream */}
      <div className="data-stream">
        <div className="stream-line"></div>
        <div className="stream-line"></div>
        <div className="stream-line"></div>
      </div>

      {/* Cyber Scroll Indicator */}
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

