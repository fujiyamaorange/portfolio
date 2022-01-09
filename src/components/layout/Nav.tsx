import { useRouter } from 'next/router'

import { menus, MENU } from '@/constant/menu'
import { NextImage } from '../basic/NextImage'

export const Nav: React.VFC = () => {
  const router = useRouter()

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    path: string
  ) => {
    e.preventDefault()

    router.push(path)
  }

  return (
    <header className="fixed z-50 flex items-center justify-between w-full h-16 px-4 font-semibold text-white bg-black bg-opacity-80 sm:px-8">
      <div className="flex items-center space-x-4">
        {/* https://github.com/vercel/next.js/issues/18585 */}
        <a target="_blank" href="https://github.com/FujimuraKaito">
          <NextImage
            src="/GitHub64pxWhite.png"
            width={32}
            height={32}
            alt="github"
          />
        </a>
        <a target="_blank" href="https://zenn.dev/fujiyama">
          <NextImage src="/zennwhite.svg" width={32} height={32} alt="zenn" />
        </a>
      </div>
      <ul className="flex">
        {menus.map((menu: MENU) => (
          <li key={menu.name}>
            <button
              onClick={(e) => handleClick(e, menu.url)}
              className="px-2 py-2 transition duration-150 hover:text-gray-300"
            >
              {menu.name}
            </button>
          </li>
        ))}
      </ul>
    </header>
  )
}
