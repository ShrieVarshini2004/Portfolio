// DigitalRain.jsx
import { useEffect, useRef } from 'react';
import './Starfield.css';

export default function DigitalRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const katakana = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ';
    const columns = Math.floor(window.innerWidth / 20);
    const drops = Array(columns).fill(1);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = () => {
      ctx.fillStyle = 'rgba(10, 25, 47, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#64ffda';
      ctx.font = '15opx monospace';

      drops.forEach((drop, i) => {
        const text = katakana.charAt(Math.floor(Math.random() * katakana.length));
        ctx.fillText(text, i * 20, drop * 20);
        
        if (drop * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });
    };

    resize();
    const interval = setInterval(draw, 33);
    window.addEventListener('resize', resize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="digital-rain-canvas" />;
}