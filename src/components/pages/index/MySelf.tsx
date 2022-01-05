import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Typed from 'typed.js'

import { profile } from '@/types/cms-types'
import { Div100vh } from '@/components/basic/Div100vh'

type Props = { data: profile }

export const MySelf: React.VFC<Props> = (props) => {
  const { name, introduce, image, hobby } = props.data

  // Create reference to store the DOM element containing the animation
  const el = useRef(null!)
  // Create reference to store the Typed instance itself
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

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options)

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy()
    }
  }, [])

  return (
    <main className="bg-black text-white">
      <Div100vh className="flex relative items-center justify-center select-none">
        <span className="font-semibold text-2xl" ref={el} />
      </Div100vh>
      <section>
        {props && (
          <>
            <h3>名前</h3>
            <p>{name}</p>
            <h3>自己紹介</h3>
            <div dangerouslySetInnerHTML={{ __html: introduce }}></div>
            <h3>画像</h3>
            <Image src={image.url} width={image.width} height={image.height} />
            <h3>趣味</h3>
            <p>{hobby}</p>
          </>
        )}
        <h1>残りの要素</h1>
      </section>
    </main>
  )
}
