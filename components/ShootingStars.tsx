'use client';

import { useEffect, useState } from 'react';

interface Star {
  id: number;
  top: number;
  right: number;
}

export default function ShootingStars() {
  const [isDark, setIsDark] = useState(false);
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isDark) {
      setStars([]);
      return;
    }

    let starId = 0;

    const createStars = () => {
      // 2개의 별똥별 생성
      const newStars: Star[] = [
        {
          id: starId++,
          top: Math.random() * 60, // 0-60%
          right: Math.random() * 80 + 10, // 10-90%
        },
        {
          id: starId++,
          top: Math.random() * 60,
          right: Math.random() * 80 + 10,
        },
      ];

      setStars(newStars);

      // 3초 후 별똥별 제거
      setTimeout(() => {
        setStars([]);
      }, 3000);
    };

    // 처음 시작
    createStars();

    // 10초마다 반복
    const interval = setInterval(createStars, 10000);

    return () => {
      clearInterval(interval);
      setStars([]);
    };
  }, [isDark]);

  if (!isDark) return null;

  return (
    <div className="shooting-stars">
      {stars.map((star) => (
        <div
          key={star.id}
          className="shooting-star-animated"
          style={{
            top: `${star.top}%`,
            right: `${star.right}%`,
          }}
        />
      ))}
    </div>
  );
}
