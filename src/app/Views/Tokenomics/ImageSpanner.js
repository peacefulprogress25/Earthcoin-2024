import React, { useRef, useState } from 'react';
const treasurybg = "/assets/images/treasurybg.png";

const ImageSpanner = ({ 
  src, 
  alt, 
  className = '', 
  containerWidth = 600, 
  containerHeight = 600, 
  setPosition,
  position
}) => {
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  const [dragging, setDragging] = useState(false);
  const [start, setStart] = useState({ x: 0, y: 0 });
//   const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setDragging(true);
    setStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;

    const newX = e.clientX - start.x;
    const newY = e.clientY - start.y;

    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div
      ref={containerRef}
      className={``}
      style={{
        width: `${containerWidth}px`,
        height: `${containerHeight}px`,
        overflow: 'hidden',
        position: 'relative', // Parent relative to keep context
      }}
    >
      <img
      className={`${className}`}
        ref={imgRef}
        src={src}
        alt={alt}
        draggable="false"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{
          position: 'absolute',
          top: position.y,
          left: position.x,
          zIndex: 10, // Ensure it overlaps parent or other elements
          cursor: dragging ? 'grabbing' : 'grab',
          userSelect: 'none',
        }}
      />
    </div>
  );
};

export default ImageSpanner;
