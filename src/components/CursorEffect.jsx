import React, { useEffect, useRef } from 'react';

const CursorEffect = ({ containerRef }) => {
  const trailCount = 50;
  const cursorRefs = useRef([]);
  const positions = useRef(new Array(trailCount).fill({ x: 0, y: 0 }));
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef?.current) return;

    cursorRefs.current = cursorRefs.current.slice(0, trailCount);
    positions.current = new Array(trailCount).fill({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
      const rect = containerRef.current.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const containerEl = containerRef.current;
    containerEl.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      positions.current[0] = mouse.current;

      for (let i = 1; i < trailCount; i++) {
        const prev = positions.current[i - 1];
        const current = positions.current[i];
        positions.current[i] = {
          x: current.x + (prev.x - current.x) * 0.25,
          y: current.y + (prev.y - current.y) * 0.25,
        };
      }

      cursorRefs.current.forEach((ref, i) => {
        if (ref?.current) {
          const { x, y } = positions.current[i];
          ref.current.style.transform = `translate(${x}px, ${y}px)`;
        }
      });
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      containerEl.removeEventListener('mousemove', handleMouseMove);
    };
  }, [containerRef]);

  return (
    <>
      {Array.from({ length: trailCount }).map((_, index) => (
       <div
          key={index}
          ref={(el) => (cursorRefs.current[index] = { current: el })}
          className="absolute top-0 left-0 h-[20px] w-[20px] pointer-events-none z-[5]"
          style={{
            backgroundColor: "var(--color-CardBorderColor)",
            opacity: 1 - index / trailCount,
            transition: 'transform 0.1s linear',
            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          }}
        />
      ))}
    </>
  );
};

export default CursorEffect;
