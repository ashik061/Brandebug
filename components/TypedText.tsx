import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedText = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const options = {
      strings: [
        'Web Design and Development',
        'Digital Brand Development',
        'E-commerce Development',
        'Full Stack Development',
        'Custom Mobile/Web App',
        'Complete Software Solutions'
      ],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 1000,
      loop: true,
    };

    const typed = new Typed(typedRef.current!, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={typedRef} className='text-text-1 text-xl md:text-2xl' />;
};

export default TypedText;
