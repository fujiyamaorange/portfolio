import React, { useEffect, useState } from 'react'
import anime from 'animejs'
import clsx from 'clsx'

import styles from '@/styles/ShootingStartsStyle.module.css'

export const ShootingStars = () => {
  const [vw, setVw] = useState<number>(0)
  const [vh, setVh] = useState<number>(0)
  const [radius, setRadius] = useState<number>(0)

  const num = 120

  useEffect(() => {
    if (window && document) {
      setVw(
        Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
      )
      setVh(
        Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
      )
      starryNight()
      shootingStars()
      setRadius(randomRadius())
    }
  }, [])

  const starryNight = () => {
    anime({
      targets: ['.sky .star'],
      opacity: [
        {
          duration: 700,
          value: '0',
        },
        {
          duration: 700,
          value: '1',
        },
      ],
      easing: 'linear',
      loop: true,
      delay: (_: any, i: number) => 50 * i,
    })
  }
  const shootingStars = () => {
    anime({
      targets: ['.shootingstars .wish'],
      easing: 'linear',
      loop: true,
      delay: (_: any, i: number) => 1000 * i,
      opacity: [
        {
          duration: 700,
          value: '1',
        },
      ],
      width: [
        {
          value: '150px',
        },
        {
          value: '0px',
        },
      ],
      translateX: 350,
    })
  }

  const getRandomX = () => {
    return Math.floor(Math.random() * Math.floor(vw)).toString()
  }
  const getRandomY = () => {
    return Math.floor(Math.random() * Math.floor(vh)).toString()
  }
  const randomRadius = () => {
    return Math.random() * 0.7 + 0.6
  }

  return (
    <div className="bg-black fixed inset-0 overflow-hidden">
      <svg className={clsx(styles['sky'], 'sky')}>
        {[...Array(num)].map((_, y) => (
          <circle
            cx={getRandomX()}
            cy={getRandomY()}
            r={radius}
            stroke="none"
            strokeWidth="0"
            fill="white"
            key={y}
            className="star"
          />
        ))}
      </svg>
      <div className={clsx(styles['shootingstars'], 'shootingstars')}>
        {[...Array(60)].map((_, y) => (
          <div
            key={y}
            className={clsx(styles['wish'], 'wish')}
            style={{
              left: `${getRandomY()}px`,
              top: `${getRandomX()}px`,
            }}
          />
        ))}
      </div>
    </div>
  )
}