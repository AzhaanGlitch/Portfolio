import { useEffect, useState } from "react";

export default function AvatarBridge() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      {/* Single Large Avatar Image - Statically positioned across Home and About */}
      <div 
        className="avatar-static-bridge"
        style={{
          position: 'absolute',
          top: '10vh', // Shifted down to avoid navbar
          right: isMobile ? '-10%' : '-5%', // Shift right to zoom in
          width: isMobile ? '95%' : '45%', // Increased size
          height: '220vh', // Increased height to fill both sections better
          pointerEvents: 'none',
          zIndex: 9999, // Highest z-index - above everything
          overflow: 'visible',
        }}
      >
        {/* Large Avatar Image - Head in Home, Body in About */}
        <img 
          src="/assets/avator.png" 
          alt="Azhaan Ali Siddiqui" 
          className="avatar-full-image"
          style={{
            position: 'absolute',
            top: '0',
            right: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'right center',
            opacity: isMobile ? 0.6 : 0.85,
            filter: 'drop-shadow(0 0 80px rgba(255, 140, 0, 0.5))',
            transform: 'scale(1.4)', // Zoom in the image
          }}
          loading="eager"
        />
      </div>
    </>
  );
}