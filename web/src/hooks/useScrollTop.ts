import { useState, useEffect } from 'react';

const useScrollTop = () => {
  const [top, set] = useState(0);

  function handleUpdate() {
    set(window.scrollY);
  }

  useEffect(() => {
    document.addEventListener('scroll', handleUpdate);
    return () => document.removeEventListener('scroll', handleUpdate);
  }, []);

  return top;
};
export default useScrollTop;
