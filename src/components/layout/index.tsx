import { Nav } from './Nav'
import { ShootingStars } from '../anime/ShootingStars'
import { useState, useEffect } from 'react'

export const Layout: React.FC = ({ children }) => {
  const [cursor, setCursor] = useState<HTMLElement | null>(null)
  useEffect(() => {
    if (document) {
      setCursor(document.getElementById('cursor'))
      document.onmousemove = function (e) {
        if (cursor) {
          // half of circle size
          cursor.style.left = e.pageX - 25 + 'px'
          cursor.style.top = e.pageY - 25 + 'px'
          cursor.style.display = 'block'
        }
      }
    }
  }, [cursor])

  return (
    <>
      {/* ヘッダーと背景のアニメーション */}
      <ShootingStars />
      <Nav />
      <div id="cursor"></div>
      {children}
    </>
  )
}
