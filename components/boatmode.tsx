"use client"
import React, { useEffect, useRef, useState } from "react";
import AnimatedContent from "./AnimatedContent";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
const Boatmode = () => {
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
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    <div>
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
  );
};

export default Boatmode;
