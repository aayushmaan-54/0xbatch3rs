"use client";
import React, { useEffect, useRef } from 'react';


export const BinaryBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dropsRef = useRef<number[]>([]);
  

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const fontSize = 14;
      const columns = Math.ceil(canvas.width / fontSize);
      dropsRef.current = Array(columns).fill(1);
    };

    updateCanvasSize();

    const chars = '01';
    const fontSize = 14;

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 20, 10, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00E870';
      ctx.font = `${fontSize}px JetBrains Mono`;

      for (let i = 0; i < dropsRef.current.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, dropsRef.current[i] * fontSize);

        if (dropsRef.current[i] * fontSize > canvas.height && Math.random() > 0.975) {
          dropsRef.current[i] = 0;
        }

        dropsRef.current[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    window.addEventListener('resize', updateCanvasSize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 opacity-20"
      style={{ filter: 'blur(1px)' }}
    />
  );
};