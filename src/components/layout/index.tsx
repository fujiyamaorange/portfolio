import { PropsWithChildren } from "react";
import { ShootingStars } from "../anime/ShootingStars";
import { Nav } from "./Nav";

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
