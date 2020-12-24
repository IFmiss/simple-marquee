import React, { useEffect, useRef } from 'react';

const useAnimationFrame = (cb: any) => {
  const requestRef = React.useRef<any>();
  const prRef = useRef();

  const animate = (time: any) => {
    if (!prRef.current) {
      const deltaTime = time - (prRef.current ?? 0);
      cb(deltaTime);
    }
    prRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);
};

export default useAnimationFrame;
