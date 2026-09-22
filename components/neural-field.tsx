"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function NeuralField() {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
    } catch {
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    el.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(0, 0, 12);

    const nodes: THREE.Vector3[] = [];
    const count = 370;
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(1 - 2 * (i + 0.5) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const wave = 1 + 0.055 * Math.sin(theta * 3) * Math.cos(phi * 8);
      const x = Math.cos(theta) * Math.sin(phi) * 2.9 * wave;
      const y = Math.cos(phi) * 2.45 * wave;
      const z = Math.sin(theta) * Math.sin(phi) * 1.95 * wave;
      // A slim central fissure makes the silhouette read as two connected hemispheres.
      nodes.push(new THREE.Vector3(x + (x > 0 ? 0.08 : -0.08), y, z));
    }
    const positions = new Float32Array(nodes.flatMap((p) => [p.x, p.y, p.z]));
    const pointsGeometry = new THREE.BufferGeometry();
    pointsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const points = new THREE.Points(pointsGeometry, new THREE.PointsMaterial({ color: 0x8be6f5, size: 0.035, transparent: true, opacity: 0.9 }));
    const links: number[] = [];
    for (let i = 0; i < nodes.length; i++) {
      const nearest = nodes.map((p, j) => ({ j, d: nodes[i].distanceToSquared(p) })).filter((p) => p.j !== i).sort((a, b) => a.d - b.d).slice(0, 3);
      for (const { j } of nearest) if (j > i) links.push(...nodes[i].toArray(), ...nodes[j].toArray());
    }
    const linesGeometry = new THREE.BufferGeometry();
    linesGeometry.setAttribute("position", new THREE.Float32BufferAttribute(links, 3));
    const lines = new THREE.LineSegments(linesGeometry, new THREE.LineBasicMaterial({ color: 0x247f9a, transparent: true, opacity: 0.39 }));
    const group = new THREE.Group();
    group.add(points, lines);
    scene.add(group);
    const resize = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(el);
    let frame = 0;
    let active = true;
    const animate = () => {
      if (!active) return;
      group.rotation.y += 0.0014;
      group.rotation.x = -0.12 + Math.sin(performance.now() * 0.00023) * 0.06;
      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      active = false;
      cancelAnimationFrame(frame);
      observer.disconnect();
      renderer.dispose();
      pointsGeometry.dispose();
      linesGeometry.dispose();
      el.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="neural-field" ref={host} aria-hidden="true" />;
}

