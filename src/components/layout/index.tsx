import { Nav } from './Nav'
import { ShootingStarts } from '../anime/ShootingStars'

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      {/* ヘッダーと背景のアニメーション */}
      <ShootingStarts />
      <Nav />
      {children}
    </>
  )
}
