import React, { useState, useEffect, useRef } from 'react';

/**
 * Hook para animar un contador numérico de 0 a `end`.
 */
export const useCountUp = (end, duration = 2000, startCounting) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    if (!startCounting) return;
    let start = 0;
    const increment = end / (duration / 16);
    const animate = () => {
      start += increment;
      if (start >= end) {
        setCount(end);
        return;
      }
      setCount(Math.floor(start));
      countRef.current = requestAnimationFrame(animate);
    };
    countRef.current = requestAnimationFrame(animate);
    return () => {
      if (countRef.current) cancelAnimationFrame(countRef.current);
    };
  }, [end, duration, startCounting]);

  return count;
};

/**
 * Componente que muestra un número animado con su etiqueta.
 */
const StatItem = ({ number, suffix = '', label }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  const count = useCountUp(number, 2000, inView);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-number">{count.toLocaleString()}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

export default StatItem;
