/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import AnimatedContent from "@/components/AnimatedContent";
import DecryptedText from "@/components/DecryptedText";
import TrueFocus from "@/components/TrueFocus";
import ShinyText from "@/components/ShinyText";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Scroller from "@/components/Scroller";

export default function Home() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingError, setLoadingError] = useState<string | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    let animationFrameId: number;
    let controls: OrbitControls;
    let renderer: THREE.WebGLRenderer;

    const initScene = () => {
      // Renderer with transparent background
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true, // Enable transparency
      });
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.setSize(
        mountRef.current!.clientWidth,
        mountRef.current!.clientHeight
      );
      renderer.setClearColor(0x000000, 0); // Fully transparent (alpha = 0)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = false;
      mountRef.current!.appendChild(renderer.domElement);

      // Scene - ensure no background is set
      const scene = new THREE.Scene();
      scene.background = null; // Explicitly set to null for transparency
      sceneRef.current = scene;

      // Camera
      const camera = new THREE.PerspectiveCamera(
        30,
        mountRef.current!.clientWidth / mountRef.current!.clientHeight,
        0.1,
        500
      );
      camera.position.set(0, 1.5, 4);

      // Controls
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.enablePan = false;
      controls.minDistance = 1.5;
      controls.maxDistance = 6;
      controls.minPolarAngle = 0.3;
      controls.maxPolarAngle = 1.4;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 1.2;
      controls.target = new THREE.Vector3(0, 1.5, 0);
      controls.update();

      // Enhanced Lighting
      const mainLight = new THREE.DirectionalLight(0x67e8f9, 4);
      mainLight.position.set(2, 10, 4);
      mainLight.castShadow = false;
      scene.add(mainLight);

      const ambientLight = new THREE.AmbientLight(0x404040, 2.5);
      scene.add(ambientLight);

      const fillLight = new THREE.HemisphereLight(0x67e8f9, 0x1a1a2e, 1);
      scene.add(fillLight);

      const rimLight = new THREE.DirectionalLight(0xffffff, 2);
      rimLight.position.set(-4, 3, -4);
      scene.add(rimLight);

      // Fallback robot model
      const createFallbackModel = () => {
        const group = new THREE.Group();

        // Body
        const bodyGeometry = new THREE.BoxGeometry(2, 1.5, 1);
        const bodyMaterial = new THREE.MeshStandardMaterial({
          color: 0x67e8f9,
          metalness: 0.4,
          roughness: 0.3,
          transparent: false,
        });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        body.castShadow = false;
        body.position.y = 1.5;
        group.add(body);

        // Head
        const headGeometry = new THREE.SphereGeometry(0.8, 16, 16);
        const headMaterial = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          metalness: 0.3,
          roughness: 0.2,
          transparent: false,
        });
        const head = new THREE.Mesh(headGeometry, headMaterial);
        head.castShadow = false;
        head.position.y = 3.2;
        group.add(head);

        // Eyes with glow
        const eyeGeometry = new THREE.SphereGeometry(0.15, 8, 8);
        const eyeMaterial = new THREE.MeshStandardMaterial({
          color: 0x000000,
          emissive: 0x67e8f9,
          emissiveIntensity: 0.6,
        });

        const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
        leftEye.position.set(-0.3, 3.3, 0.7);
        group.add(leftEye);

        const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
        rightEye.position.set(0.3, 3.3, 0.7);
        group.add(rightEye);

        // Arms
        const armGeometry = new THREE.CylinderGeometry(0.2, 0.2, 2, 8);
        const armMaterial = new THREE.MeshStandardMaterial({
          color: 0x67e8f9,
          metalness: 0.4,
          roughness: 0.3,
          transparent: false,
        });

        const leftArm = new THREE.Mesh(armGeometry, armMaterial);
        leftArm.castShadow = false;
        leftArm.position.set(-1.5, 1.5, 0);
        leftArm.rotation.z = Math.PI / 4;
        group.add(leftArm);

        const rightArm = new THREE.Mesh(armGeometry, armMaterial);
        rightArm.castShadow = false;
        rightArm.position.set(1.5, 1.5, 0);
        rightArm.rotation.z = -Math.PI / 4;
        group.add(rightArm);

        // Wheels
        const wheelGeometry = new THREE.CylinderGeometry(0.6, 0.6, 0.3, 16);
        const wheelMaterial = new THREE.MeshStandardMaterial({
          color: 0x333333,
          metalness: 0.6,
          roughness: 0.2,
          transparent: false,
        });

        const leftWheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
        leftWheel.rotation.z = Math.PI / 2;
        leftWheel.position.set(-1.2, 0.5, 0);
        group.add(leftWheel);

        const rightWheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
        rightWheel.rotation.z = Math.PI / 2;
        rightWheel.position.set(1.2, 0.5, 0);
        group.add(rightWheel);

        // Antenna
        const antennaGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.8, 8);
        const antennaMaterial = new THREE.MeshStandardMaterial({
          color: 0x67e8f9,
          metalness: 0.6,
          roughness: 0.2,
        });
        const antenna = new THREE.Mesh(antennaGeometry, antennaMaterial);
        antenna.position.set(0, 4.2, 0);
        group.add(antenna);

        const antennaBall = new THREE.Mesh(
          new THREE.SphereGeometry(0.15, 8, 8),
          new THREE.MeshStandardMaterial({
            color: 0x67e8f9,
            emissive: 0x67e8f9,
            emissiveIntensity: 0.6,
          })
        );
        antennaBall.position.set(0, 4.6, 0);
        group.add(antennaBall);

        group.position.set(0, 1.05, 0);
        group.scale.set(2.2, 2.2, 2.2);
        scene.add(group);
        return group;
      };

      // GLTF Loader
      const loader = new GLTFLoader();

      loader.load(
        "/scene.gltf",
        (gltf) => {
          const mesh = gltf.scene;
          mesh.traverse((child: any) => {
            if (child.isMesh) {
              child.castShadow = false;
              child.receiveShadow = false;

              // Ensure materials are not transparent
              if (child.material) {
                child.material.metalness = 0.3;
                child.material.roughness = 0.4;
                child.material.transparent = false;
                child.material.needsUpdate = true;
              }
            }
          });
          mesh.position.set(0, 2.0, 0.5);
          mesh.scale.set(7.5, 7.5, 7.5);
          scene.add(mesh);
          setLoadingProgress(100);
        },
        (xhr) => {
          const percent = Math.round((xhr.loaded / xhr.total) * 100);
          setLoadingProgress(percent);
        },
        (error) => {
          console.error("Failed to load 3D model, using fallback:", error);
          setLoadingError("Using fallback model");
          createFallbackModel();
          setLoadingProgress(100);
        }
      );

      // Resize handler
      const handleResize = () => {
        if (!mountRef.current) return;
        camera.aspect =
          mountRef.current.clientWidth / mountRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(
          mountRef.current.clientWidth,
          mountRef.current.clientHeight
        );
      };
      window.addEventListener("resize", handleResize);

      // Animation loop
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      };
      animate();

      return { handleResize, controls, renderer };
    };

    const { handleResize } = initScene();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      controls?.dispose();
      renderer?.dispose();
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (mountRef.current && renderer?.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  const isLoading = loadingProgress < 100;

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <AnimatedContent
            distance={40}
            direction="vertical"
            reverse={false}
            duration={0.5}
            ease="easeOutCubic"
            initialOpacity={0}
            animateOpacity
            scale={1.03}
            threshold={0.1}
            delay={0.1}
          >
            <div className="space-y-4 sm:space-y-6">
              <TrueFocus
                sentence="3-IN-1 BOT"
                manualMode={false}
                glowColor="#67e8f9"
                borderColor="#67e8f9"
                animationDuration={0.6}
                pauseBetweenAnimations={1.2}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
              />
              <div className="max-w-3xl mx-auto px-4">
                <ShinyText
                  text="Build Your Own 3-in-1 Toy. Personalized Learning with STEM Starts Here."
                  disabled={false}
                  speed={4}
                  className="text-cyan-200/90 drop-shadow-[0_0_15px_#67e8f9] text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed"
                />
              </div>
            </div>
          </AnimatedContent>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1">
            <AnimatedContent
              distance={40}
              direction="horizontal"
              reverse={true}
              duration={0.5}
              ease="easeOutCubic"
              initialOpacity={0}
              animateOpacity
              scale={1.03}
              threshold={0.1}
              delay={0.2}
            >
              <div className="space-y-6 sm:space-y-8">
                <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <DecryptedText
                    text="Innovation in Motion — The Ultimate 3-in-1 Smart Toy"
                    speed={80}
                    maxIterations={25}
                    characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!?"
                    className="revealed bg-gradient-to-r from-white via-cyan-100 to-cyan-200 bg-clip-text text-transparent"
                    revealDirection="start"
                    parentClassName="all-letters"
                    animateOn="view"
                    encryptedClassName="encrypted text-cyan-400/40"
                  />
                </h2>

                <div className="space-y-6">
                  <DecryptedText
                    text="Transform playtime into learning time with our revolutionary 3-in-1 BOT that adapts to air, water, and land environments. Designed for curious minds and future innovators."
                    speed={80}
                    maxIterations={25}
                    characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!?"
                    className="revealed text-slate-300 text-lg sm:text-xl leading-relaxed font-light"
                    revealDirection="start"
                    parentClassName="all-letters"
                    animateOn="view"
                    encryptedClassName="encrypted text-cyan-400/40"
                  />

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-3 pt-4">
                    <span className="px-4 py-2.5 bg-cyan-500/20 border border-cyan-500/40 rounded-full text-cyan-300 text-sm font-medium backdrop-blur-sm hover:bg-cyan-500/30 hover:scale-105 transition-all duration-300 cursor-pointer">
                      🚀 STEM Learning
                    </span>
                    <span className="px-4 py-2.5 bg-blue-500/20 border border-blue-500/40 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm hover:bg-blue-500/30 hover:scale-105 transition-all duration-300 cursor-pointer">
                      🌊 3 Environments
                    </span>
                    <span className="px-4 py-2.5 bg-purple-500/20 border border-purple-500/40 rounded-full text-purple-300 text-sm font-medium backdrop-blur-sm hover:bg-purple-500/30 hover:scale-105 transition-all duration-300 cursor-pointer">
                      🎯 Educational
                    </span>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 rounded-full text-white font-semibold text-lg shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300 hover:scale-105">
                          Explore Features
                        </button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-black border-2 border-cyan-500/30 text-white">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            3-IN-1 TRANSFORMABLE DRONE
                          </DialogTitle>
                          <DialogDescription className="text-gray-300 text-center">
                            Seamlessly transitions between three exciting modes
                            for unique play and learning experiences
                          </DialogDescription>
                        </DialogHeader>

                        <div className="space-y-6 py-4">
                          {/* Modes Section */}
                          <div className="bg-gray-800/50 rounded-xl p-6 border border-cyan-500/20">
                            <h3 className="text-xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
                              <span className="text-2xl">🚀</span> Modes &
                              Functionality
                            </h3>

                            <div className="grid md:grid-cols-3 gap-4">
                              {/* Drone Mode */}
                              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-4 rounded-lg border border-blue-500/30">
                                <div className="flex items-center gap-2 mb-3">
                                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                  <h4 className="font-bold text-blue-400">
                                    Drone Mode
                                  </h4>
                                </div>
                                <p className="text-sm text-gray-300">
                                  Fully functional mini drone with four
                                  high-speed coreless motors for stable flight.
                                  Perform stunts like 360° flips and aerobatic
                                  rolls.
                                </p>
                              </div>

                              {/* Boat Mode */}
                              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-4 rounded-lg border border-green-500/30">
                                <div className="flex items-center gap-2 mb-3">
                                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                  <h4 className="font-bold text-green-400">
                                    Boat Mode
                                  </h4>
                                </div>
                                <p className="text-sm text-gray-300">
                                  Rotate motor shafts to transform into a boat,
                                  using propellers to glide over water
                                  effortlessly.
                                </p>
                              </div>

                              {/* Car Mode */}
                              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 p-4 rounded-lg border border-orange-500/30">
                                <div className="flex items-center gap-2 mb-3">
                                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                                  <h4 className="font-bold text-orange-400">
                                    Car Mode
                                  </h4>
                                </div>
                                <p className="text-sm text-gray-300">
                                  Motors drive airflow to propel forward on
                                  land, creating a fast and fun ground vehicle.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Features Section */}
                          <div className="bg-gray-800/50 rounded-xl p-6 border border-purple-500/20">
                            <h3 className="text-xl font-bold mb-4 text-purple-400 flex items-center gap-2">
                              <span className="text-2xl">⭐</span> Advanced
                              Features
                            </h3>

                            <div className="grid md:grid-cols-2 gap-4">
                              {/* Column 1 */}
                              <div className="space-y-3">
                                <div className="flex items-start gap-3 p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-xs">🛡️</span>
                                  </div>
                                  <div>
                                    <h4 className="font-bold text-purple-300">
                                      Obstacle Avoidance
                                    </h4>
                                    <p className="text-sm text-gray-300">
                                      Built-in VL5310X sensor prevents head-on
                                      collisions
                                    </p>
                                  </div>
                                </div>

                                <div className="flex items-start gap-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-xs">🎁</span>
                                  </div>
                                  <div>
                                    <h4 className="font-bold text-green-300">
                                      Extra Accessories
                                    </h4>
                                    <p className="text-sm text-gray-300">
                                      Additional propellers and guards included
                                    </p>
                                  </div>
                                </div>

                                <div className="flex items-start gap-3 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-xs">👶</span>
                                  </div>
                                  <div>
                                    <h4 className="font-bold text-blue-300">
                                      Child Safe Design
                                    </h4>
                                    <p className="text-sm text-gray-300">
                                      Propeller guards and lightweight PLA
                                      material
                                    </p>
                                  </div>
                                </div>
                              </div>

                              {/* Column 2 */}
                              <div className="space-y-3">
                                <div className="flex items-start gap-3 p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-xs">🎯</span>
                                  </div>
                                  <div>
                                    <h4 className="font-bold text-red-300">
                                      Stunt Capabilities
                                    </h4>
                                    <p className="text-sm text-gray-300">
                                      360° flips, barrel rolls, and quick turns
                                    </p>
                                  </div>
                                </div>

                                <div className="flex items-start gap-3 p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-xs">🔒</span>
                                  </div>
                                  <div>
                                    <h4 className="font-bold text-yellow-300">
                                      Manual Locking
                                    </h4>
                                    <p className="text-sm text-gray-300">
                                      Stable motor shafts during mode switching
                                    </p>
                                  </div>
                                </div>

                                <div className="flex items-start gap-3 p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-xs">🌱</span>
                                  </div>
                                  <div>
                                    <h4 className="font-bold text-emerald-300">
                                      Eco-Friendly & Educational
                                    </h4>
                                    <p className="text-sm text-gray-300">
                                      Biodegradable PLA teaches sustainable
                                      engineering
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Highlights Section */}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </AnimatedContent>
          </div>

          {/* Right Column - 3D Model */}
          <div className="order-1 lg:order-2">
            <AnimatedContent
              distance={40}
              direction="horizontal"
              reverse={false}
              duration={0.5}
              ease="easeOutCubic"
              initialOpacity={0}
              animateOpacity
              scale={1.03}
              threshold={0.1}
              delay={0.3}
            >
              <div className="relative">
                {/* 3D Canvas Container - Now with transparent inner background */}
                <div className="relative w-full aspect-square max-w-2xl mx-auto">
                  {/* Animated Gradient Border */}
                  <div className="absolute inset-0 rounded-3xl">
                    {/* Changed background from bg-transparent to explicitly transparent */}
                    <div
                      className="relative w-full h-full rounded-2xl overflow-hidden"
                      style={{ backgroundColor: "transparent" }}
                    >
                      <div
                        ref={mountRef}
                        className="absolute inset-0 w-full h-full"
                        style={{ backgroundColor: "transparent" }}
                      />

                      {/* Progress Loader */}
                      {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center z-20 rounded-2xl">
                          <div className="text-center space-y-4">
                            <div className="relative">
                              <div className="w-16 h-16 border-4 border-cyan-500/30 rounded-full mx-auto"></div>
                              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 border-4 border-transparent border-t-cyan-500 rounded-full animate-spin"></div>
                            </div>
                            <div className="text-lg text-cyan-400 font-medium space-y-2">
                              <div>Loading 3-in-1 BOT...</div>
                              <div className="text-sm">{loadingProgress}%</div>
                              {loadingError && (
                                <div className="text-yellow-400 text-sm">
                                  {loadingError}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Interaction Hint */}
                      {!isLoading && (
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cyan-300/80 text-sm font-medium backdrop-blur-sm bg-slate-900/70 px-6 py-3 rounded-full border border-cyan-500/40 shadow-lg">
                          🖱️ Drag to Rotate • Scroll to Zoom
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedContent>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-6 sm:mt-12 lg:mt-16">
          <Dialog>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: "✈️",
                  title: "Drone Mode",
                  desc: "Fly high with smooth flips, rolls, and stable aerial control.",
                },
                {
                  icon: "🌊",
                  title: "Boat Mode",
                  desc: "Glide effortlessly over water with propeller-powered motion.",
                },
                {
                  icon: "🚗",
                  title: "Car Mode",
                  desc: "Race on land with fast, precise motor-driven speed.",
                },
              ].map((feature, idx) => (
                <DialogTrigger asChild key={idx}>
                  <button
                    className="w-full p-6 text-left bg-gradient-to-br from-slate-800/80 to-slate-900/80 
                       rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 
                       transition-all duration-300 hover:scale-105 backdrop-blur-sm 
                       focus:outline-none focus:ring-2 focus:ring-cyan-400/40 shadow-md
                       hover:shadow-cyan-500/10"
                  >
                    <div className="flex flex-col items-start space-y-3">
                      <div className="text-4xl">{feature.icon}</div>

                      <h3
                        className="text-xl font-bold text-cyan-300"
                        style={{ fontFamily: "'Courier New', monospace" }}
                      >
                        {feature.title}
                      </h3>

                      <p
                        className="text-slate-400 leading-relaxed"
                        style={{ fontFamily: "'Courier New', monospace" }}
                      >
                        {feature.desc}
                      </p>
                    </div>
                  </button>
                </DialogTrigger>
              ))}
            </div>

            <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-black border-2 border-cyan-500/30 text-white">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {}
                </DialogTitle>
                <DialogDescription className="text-gray-300 text-center">
                  Seamlessly transitions between three exciting modes for unique
                  play and learning experiences
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 py-4">
                {/* Modes Section */}
                <div className="bg-gray-800/50 rounded-xl p-6 border border-cyan-500/20">
                  <h3 className="text-xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
                    <span className="text-2xl">🚀</span> Modes & Functionality
                  </h3>

                  <div className="grid md:grid-cols-3 gap-4">
                    {/* Drone Mode */}
                    <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-4 rounded-lg border border-blue-500/30">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <h4 className="font-bold text-blue-400">Drone Mode</h4>
                      </div>
                      <p className="text-sm text-gray-300">
                        Fully functional mini drone with four high-speed
                        coreless motors for stable flight. Perform stunts like
                        360° flips and aerobatic rolls.
                      </p>
                    </div>

                    {/* Boat Mode */}
                    <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-4 rounded-lg border border-green-500/30">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <h4 className="font-bold text-green-400">Boat Mode</h4>
                      </div>
                      <p className="text-sm text-gray-300">
                        Rotate motor shafts to transform into a boat, using
                        propellers to glide over water effortlessly.
                      </p>
                    </div>

                    {/* Car Mode */}
                    <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 p-4 rounded-lg border border-orange-500/30">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <h4 className="font-bold text-orange-400">Car Mode</h4>
                      </div>
                      <p className="text-sm text-gray-300">
                        Motors drive airflow to propel forward on land, creating
                        a fast and fun ground vehicle.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Features Section */}
                <div className="bg-gray-800/50 rounded-xl p-6 border border-purple-500/20">
                  <h3 className="text-xl font-bold mb-4 text-purple-400 flex items-center gap-2">
                    <span className="text-2xl">⭐</span> Advanced Features
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Column 1 */}
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs">🛡️</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-purple-300">
                            Obstacle Avoidance
                          </h4>
                          <p className="text-sm text-gray-300">
                            Built-in VL5310X sensor prevents head-on collisions
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs">🎁</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-green-300">
                            Extra Accessories
                          </h4>
                          <p className="text-sm text-gray-300">
                            Additional propellers and guards included
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs">👶</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-blue-300">
                            Child Safe Design
                          </h4>
                          <p className="text-sm text-gray-300">
                            Propeller guards and lightweight PLA material
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs">🎯</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-red-300">
                            Stunt Capabilities
                          </h4>
                          <p className="text-sm text-gray-300">
                            360° flips, barrel rolls, and quick turns
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                        <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs">🔒</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-yellow-300">
                            Manual Locking
                          </h4>
                          <p className="text-sm text-gray-300">
                            Stable motor shafts during mode switching
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                        <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs">🌱</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-emerald-300">
                            Eco-Friendly & Educational
                          </h4>
                          <p className="text-sm text-gray-300">
                            Biodegradable PLA teaches sustainable engineering
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Highlights Section */}
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="mt-6 sm:mt-12 lg:mt-16">
          <Scroller />
        </div>
      </div>
    </div>
  );
}
