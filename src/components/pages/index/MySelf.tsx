import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Typed from 'typed.js'

import { profile } from '@/types/cms-types'
import { Div100vh } from '@/components/basic/Div100vh'
import { Terminal } from '@/components/anime/Terminal'

type Props = { data: profile }

export const MySelf: React.VFC<Props> = (props) => {
  const { name, image } = props.data

  const el = useRef(null!)
  const typed = useRef<Typed>(null!)

  useEffect(() => {
    const options = {
      strings: [
        '<span>Hello&sbquo;&ensp;</span>I&rsquo;m Fujimura Kaito.',
        'I live in Fukuoka&sbquo; Japan.',
        'I&rsquo;m a university student.',
      ],
      typeSpeed: 100,
      backSpeed: 30,
    }

    typed.current = new Typed(el.current, options)

    return () => {
      typed.current.destroy()
    }
  }, [])

  return (
    <main className="text-white">
      <Div100vh className="relative flex items-center justify-center select-none">
        <span className="text-2xl font-semibold" ref={el} />
      </Div100vh>
      <section className="flex flex-col items-center justify-center">
        <Image
          src={image.url}
          width={image.width}
          height={image.height}
          className="rounded-full"
          aria-hidden="true"
        />
        <span className="mt-4 font-semibold">{name}</span>
      </section>
      <section>
        <Terminal data={props.data} />
      </section>
    </main>
  )
}
