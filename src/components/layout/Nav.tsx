import Link from "next/link";
import { type MENU, menus } from "@/constant/menu";
import { NextImage } from "../basic/NextImage";

export const Nav = () => {
  return (
    <header className="fixed z-50 flex items-center justify-between w-full h-16 px-4 font-semibold text-white bg-black bg-opacity-80 sm:px-8">
      <div className="flex items-center space-x-4">
        {/* https://github.com/vercel/next.js/issues/18585 */}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/fujiyamaorange"
          title="Github"
          aria-label="Github Link"
          className="rounded-md focus:outline-none focus:ring-2 focus:ring-white selection:bg-transparent"
        >
          <NextImage
            src="/GitHub64pxWhite.png"
            width={32}
            height={32}
            alt="github"
            className="w-8 h-8 hover:animate-spin"
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://zenn.dev/fujiyama"
          title="Zenn"
          aria-label="Zenn Link"
          className="rounded-md focus:outline-none focus:ring-2 focus:ring-white selection:bg-transparent"
        >
          <NextImage
            src="/zennwhite.svg"
            width={32}
            height={32}
            alt="zenn"
            className="w-8 h-8"
          />
        </a>
      </div>
      <ul className="flex">
        {menus.map((menu: MENU) => (
          <li key={menu.name}>
            <Link
              prefetch
              href={menu.url}
              aria-label={`Go to ${menu.name}`}
              className="px-2 py-2 transition duration-300 rounded-md hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-500 focus:outline-none focus:ring-2 focus:ring-white selection:bg-white selection:text-black"
            >
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};
