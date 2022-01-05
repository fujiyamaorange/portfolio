import { Nav } from './Nav'

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      {/* ヘッダーと背景のアニメーション */}
      <Nav />
      {children}
    </>
  )
}
