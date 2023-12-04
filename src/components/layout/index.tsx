import { PropsWithChildren } from "react";
import { Nav } from "./Nav";
import { ShootingStars } from "../anime/ShootingStars";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      {/* ヘッダーと背景のアニメーション */}
      <ShootingStars />
      <Nav />
      <main className="relative z-10">{children}</main>
    </>
  );
};
