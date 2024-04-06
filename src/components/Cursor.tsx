import React, { useEffect, useRef } from "react";
import gsap from "gsap";

// Define an interface for the mouse position
interface MousePosition {
  x: number;
  y: number;
}

export default function BlurryCursor({ isActive }: { isActive: boolean }) {
  const mouse = useRef<MousePosition>({ x: 0, y: 0 });
  const delayedMouse = useRef<MousePosition>({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);
  const circle = useRef<HTMLDivElement>(null);
  const size = isActive ? 200 : 30;

  // Define a type for the lerp function
  const lerp = (x: number, y: number, a: number): number => x * (1 - a) + y * a;

  // Define a type for the event handler
  const manageMouseMove = (e: MouseEvent): void => {
    const { clientX, clientY } = e;

    mouse.current = {
      x: clientX,
      y: clientY,
    };
  };

  const animate = (): void => {
    const { x, y } = delayedMouse.current;

    delayedMouse.current = {
      x: lerp(x, mouse.current.x, 0.075),
      y: lerp(y, mouse.current.y, 0.075),
    };

    moveCircle(delayedMouse.current.x, delayedMouse.current.y);

    rafId.current = window.requestAnimationFrame(animate);
  };

  // Define a type for the moveCircle function
  const moveCircle = (x: number, y: number): void => {
    if (circle.current) {
      gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
    }
  };

  useEffect(() => {
    animate();
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      if (rafId.current) {
        window.cancelAnimationFrame(rafId.current);
      }
    };
  }, [isActive]);

  return (
    <div className="relative h-screen hidden md:block">
      <div
        style={{
          backgroundColor: "white",
          width: size,
          height: size,
          transition: `height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out`,
        }}
        className="top-0 left-0 fixed rounded-full mix-blend-difference pointer-events-none"
        ref={circle}
      />
    </div>
  );
}
