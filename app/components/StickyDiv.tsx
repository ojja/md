import React, { useState, useEffect, useRef } from 'react';
import i18next from 'i18next';

const StickyDiv = ({ children }) => {
  const [isSticky, setIsSticky] = useState(false);
  const stickyRef = useRef(null);
  const [initialRight, setInitialRight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition >= 100);
    };

    const calculateInitialRight = () => {
      if (stickyRef.current) {
        const rect = stickyRef.current.getBoundingClientRect();
        const right = window.innerWidth - rect.right;
        setInitialRight(right);
      }
    };

    calculateInitialRight();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', calculateInitialRight);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateInitialRight);
    };
  }, []);

  return (
    <div
      ref={stickyRef}
      className={`${isSticky ? 'fixed top-5' : ''}`}
      // style={{i18next.language === 'en' ? right: initialRight : left: initialRight }}
      style={{
        [i18next.language === 'en' ? 'right' : 'left']: initialRight,
      }}

    >
      {children}
    </div>
  );
};

export default StickyDiv;
