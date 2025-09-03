import React, { useEffect, useRef } from 'react';

export interface MagicBentoProps {
  textAutoHide?: boolean;
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  enableTilt?: boolean;
  enableMagnetism?: boolean;
  clickEffect?: boolean;
  spotlightRadius?: number;
  particleCount?: number;
  glowColor?: string; // "r,g,b"
  className?: string;
}

const MagicBento: React.FC<MagicBentoProps> = ({
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  enableTilt = true,
  enableMagnetism = true,
  clickEffect = true,
  spotlightRadius = 300,
  particleCount = 12,
  glowColor = '132, 0, 255',
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Basic spotlight following the mouse inside the container
  useEffect(() => {
    if (!enableSpotlight) return;
    const container = containerRef.current;
    const spot = spotlightRef.current;
    if (!container || !spot) return;

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spot.style.opacity = '1';
      spot.style.background = `radial-gradient(${spotlightRadius}px circle at ${x}px ${y}px, rgba(255,255,255,0.15), rgba(255,255,255,0) 60%)`;
    };
    const onLeave = () => {
      spot.style.opacity = '0';
    };
    container.addEventListener('mousemove', onMove);
    container.addEventListener('mouseleave', onLeave);
    return () => {
      container.removeEventListener('mousemove', onMove);
      container.removeEventListener('mouseleave', onLeave);
    };
  }, [enableSpotlight, spotlightRadius]);

  // Simple star particles
  useEffect(() => {
    if (!enableStars) return;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    const resize = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };
    resize();
    const stars = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.4,
      s: Math.random() * 0.4 + 0.2
    }));

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => {
        star.x += star.s;
        if (star.x > canvas.width) star.x = -2;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.fill();
      });
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('resize', resize);
    loop();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [enableStars, particleCount]);

  const cardBase = `relative rounded-2xl p-6 bg-white/[0.05] border border-white/10 overflow-hidden transition-transform`;

  const onCardMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!enableTilt && !enableMagnetism) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
                    if (enableTilt) {
      const rx = (0.5 - py) * 10;
      const ry = (px - 0.5) * 10;
      card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    }
    const inner = card.querySelector('[data-magnet]') as HTMLDivElement | null;
    if (enableMagnetism && inner) {
      inner.style.transform = `translate(${(px - 0.5) * 10}px, ${(py - 0.5) * 10}px)`;
    }
  };
  const onCardLeave: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    const inner = card.querySelector('[data-magnet]') as HTMLDivElement | null;
    if (inner) inner.style.transform = 'translate(0,0)';
  };
  const onCardClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!clickEffect) return;
    const card = e.currentTarget;
    const ripple = document.createElement('span');
    ripple.style.position = 'absolute';
    ripple.style.left = `${e.nativeEvent.offsetX}px`;
    ripple.style.top = `${e.nativeEvent.offsetY}px`;
    ripple.style.width = ripple.style.height = '6px';
    ripple.style.borderRadius = '9999px';
    ripple.style.background = `rgba(${glowColor}, 0.45)`;
    ripple.style.transform = 'translate(-50%, -50%)';
    ripple.style.pointerEvents = 'none';
    ripple.style.transition = 'opacity 600ms ease, transform 600ms ease';
    card.appendChild(ripple);
    requestAnimationFrame(() => {
      ripple.style.opacity = '0';
      ripple.style.transform = 'translate(-50%, -50%) scale(40)';
    });
    setTimeout(() => ripple.remove(), 650);
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 md:p-8 overflow-hidden ${className}`}
      style={enableBorderGlow ? { boxShadow: `0 0 0 1px rgba(255,255,255,0.08) inset, 0 0 60px rgba(${glowColor},0.25)` } : undefined}
    >
      {enableStars && <canvas ref={canvasRef} className="absolute inset-0 -z-10 pointer-events-none" />}
      {enableSpotlight && <div ref={spotlightRef} className="absolute inset-0 -z-10 transition-opacity duration-200 pointer-events-none" />}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {['Problem Solving', 'System Design', 'UI/UX', 'Data & APIs', 'DevOps', 'AI/ML'].map((label, idx) => (
          <div
            key={idx}
            className={cardBase}
            onMouseMove={onCardMove}
            onMouseLeave={onCardLeave}
            onClick={onCardClick}
            style={{ boxShadow: enableBorderGlow ? `0 0 40px rgba(${glowColor},0.15)` : undefined }}
          >
            <div data-magnet className="flex items-center justify-between">
              <div className="text-white/90 text-lg font-semibold">{label}</div>
              <div className="text-white/40 text-sm">{idx + 1}</div>
                </div>
            <p className={`mt-3 ${textAutoHide ? 'text-white/60 line-clamp-2' : 'text-white/70'}`}>
              Crafting delightful experiences and robust engineering with modern tools and practices.
                  </p>
                </div>
        ))}
              </div>
        </div>
  );
};

export default MagicBento;
