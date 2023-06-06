import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const ProgressiveImage = ({ src, placeholder, alt, className }) => {
  const [currentSrc, setCurrentSrc] = useState(placeholder);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const image = new Image();
      image.src = src;
      image.onload = () => {
        setCurrentSrc(src);
      };
    }
  }, [src, inView]);

  return <img src={currentSrc} alt={alt} className={className} ref={ref} />;
};

export default ProgressiveImage;
