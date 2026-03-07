import { useEffect, useRef } from "react";

export const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    let animationId: number;

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.08;
      pos.current.y += (target.current.y - pos.current.y) * 0.08;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${pos.current.x - 200}px, ${pos.current.y - 200}px)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-0 w-[400px] h-[400px] opacity-25 mix-blend-screen will-change-transform"
      style={{
        background:
          "radial-gradient(circle, rgba(226,54,54,0.5) 0%, rgba(226,54,54,0.2) 25%, rgba(26,58,143,0.15) 50%, transparent 75%)",
        filter: "blur(60px)",
      }}
    />
  );
};
