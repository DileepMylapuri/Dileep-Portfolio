import React, { useState } from "react";

const GradientName = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPosition({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="text-center select-none"
    >
      <h1 className="p-10"
        style={{
          fontFamily: "Monotype Corsiva",
          fontSize: "clamp(2.5rem, 6vw, 6rem)",
          fontWeight: "bold",
          backgroundImage: `radial-gradient(circle at ${position.x}% ${position.y}%, 
            #fbbf24, #ef4444, #ec4899, #9333ea)`,
          backgroundSize: "250% 250%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          transition: "background 0.1s ease-out",
        }}
      >
        Mylapuri Dileep
      </h1>
    </div>
  );
};

export default GradientName;
