"use client";

import { animate } from "animejs";
import clsx from "clsx";
import { useEffect, useState } from "react";

import styles from "@/styles/ShootingStartsStyle.module.css";
import { off } from "@/utils/off";
import { on } from "@/utils/on";

export const ShootingStars = () => {
  const isBrowser = typeof window !== "undefined";

  const [vw, setVw] = useState<number>(0);
  const [vh, setVh] = useState<number>(0);
  const [radius, setRadius] = useState<number>(0);

  const randomRadius = () => {
    return Math.random() * 0.7 + 0.6;
  };

  const starryNight = () => {
    animate(".sky .star", {
      opacity: [
        {
          duration: 700,
          to: "0",
        },
        {
          duration: 700,
          to: "1",
        },
      ],
      ease: "linear",
      loop: true,
      delay: (_, i: number) => 50 * i,
    });
  };
  const shootingStars = () => {
    animate(".shootingstars .wish", {
      ease: "linear",
      loop: true,
      delay: (_, i: number) => 1000 * i,
      opacity: [
        {
          duration: 700,
          to: "1",
        },
      ],
      width: [
        {
          to: "150px",
        },
        {
          to: "0px",
        },
      ],
      translateX: 350,
    });
  };

  const NUM = 120;

  useEffect(() => {
    if (!isBrowser) return;

    const handler = () => {
      setVw(
        Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
      );
      setVh(
        Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 0,
        ),
      );
      starryNight();
    };

    handler();
    shootingStars();
    setRadius(randomRadius());

    on(window, "resize", handler);

    return () => {
      off(window, "resize", handler);
    };
    // biome-ignore lint/correctness/useExhaustiveDependencies: This is intentionally not exhaustive
  }, [isBrowser, randomRadius, shootingStars, starryNight]);

  const getRandomX = () => {
    return Math.floor(Math.random() * Math.floor(vw)).toString();
  };
  const getRandomY = () => {
    return Math.floor(Math.random() * Math.floor(vh)).toString();
  };

  return (
    <div className="fixed inset-0 overflow-hidden bg-black">
      {/* biome-ignore lint/a11y/noSvgWithoutTitle: Use svg for animation */}
      <svg className={clsx(styles.sky, "sky")}>
        {[...Array(NUM)].map((_, i) => (
          <circle
            //  biome-ignore lint/suspicious/noArrayIndexKey: skip
            key={`${i} star`}
            cx={getRandomX()}
            cy={getRandomY()}
            r={radius}
            stroke="none"
            strokeWidth="0"
            fill="white"
            className="star"
          />
        ))}
      </svg>
      <div className={clsx(styles.shootingstars, "shootingstars")}>
        {[...Array(NUM)].map((_, i) => (
          <div
            //  biome-ignore lint/suspicious/noArrayIndexKey: skip
            key={`${i} wish`}
            className={clsx(styles.wish, "wish")}
            style={{
              left: `${getRandomY()}px`,
              top: `${getRandomX()}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
};
