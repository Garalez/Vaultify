import { useEffect, useRef } from 'react';

export const useOutsideClick = (handler) => {
  const domNode = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (domNode.current && !domNode.current.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return domNode;
};
