import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

import { CameraContent } from "@/components/anime/CameraContent";
import { Terminal } from "@/components/anime/Terminal";
import { Div100vh } from "@/components/basic/Div100vh";
import useMedia from "@/hooks/useMedia";
import { profile } from "@/types/cms-types";

type Props = { data: profile };

export const MySelf = (props: Props) => {
  const { name, image } = props.data;

  const isUnder540 = useMedia("(max-width: 540px)");

  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "<span>Hello&sbquo;&ensp;</span>I&rsquo;m Fujimura Kaito.",
        "I live in Fukuoka&sbquo; Japan.",
        "I&rsquo;m a Web Developer.",
      ],
      typeSpeed: 100,
      backSpeed: 30,
      loop: true,
    };

    const typed = new Typed(el.current ?? "", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main className="text-white">
      <Div100vh className="relative flex items-center justify-center select-none">
        <span
          className="text-2xl font-semibold text-transparent sm:text-4xl bg-clip-text bg-gradient-to-r from-pink-600 to-blue-500"
          ref={el}
        />
      </Div100vh>
      <section className="flex flex-col items-center justify-center selection:bg-transparent">
        <Image
          src={image.url}
          width={image.width}
          height={image.height}
          className="rounded-full"
          aria-hidden="true"
          alt="user icon"
        />
        <span className="mt-4 text-2xl font-semibold selection:bg-white selection:text-black">
          {name}
        </span>
      </section>
      <section>
        {isUnder540 ? (
          <div className="mt-16 mb-32">
            <CameraContent data={props.data} />
          </div>
        ) : (
          <Terminal data={props.data} />
        )}
      </section>
    </main>
  );
};
