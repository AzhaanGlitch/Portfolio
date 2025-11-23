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

  // Don't render avatar on mobile devices
  if (isMobile) return null;

  return (
    <>
      {/* Single Large Avatar Image - Statically positioned across Home and About - Desktop Only */}
      <div 
        className="avatar-static-bridge"
        style={{
          position: 'absolute',
          top: '10vh',
          right: '-5%',
          width: '45%',
          height: '220vh',
          pointerEvents: 'none',
          zIndex: 9999,
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
            opacity: 0.85,
            filter: 'drop-shadow(0 0 80px rgba(255, 140, 0, 0.5))',
            transform: 'scale(1.4)',
          }}
          loading="eager"
        />
      </div>
    </>
  );
}