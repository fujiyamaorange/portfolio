const menus = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Works',
    url: '/works',
  },
  {
    name: 'Contact',
    url: '/contact',
  },
]

export const Nav: React.VFC = () => {
  return (
    <header className="flex fixed z-50 bg-opacity-80 w-full justify-between items-center h-16 bg-black text-white font-semibold px-4 sm:px-8">
      <h1>Portfolio</h1>
      <ul className="flex">
        {menus.map((menu) => (
          <li key={menu.name}>
            <button className="hover:text-gray-300 transition duration-150 px-2 py-2">
              {menu.name}
            </button>
          </li>
        ))}
      </ul>
    </header>
  )
}
