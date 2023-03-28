import Image from 'next/image'
import clsx from 'clsx'

import { works } from '@/types/cms-types'
import { NextImage } from '@/components/basic/NextImage'
import { EagerImage } from '@/components/basic/EagerImage'

type Props = { data: works[] }
type SKILL = Pick<works, 'skill'>['skill'][number]

export const WorksList: React.VFC<Props> = (props) => {
  return (
    <main className="absolute w-screen px-8 pt-8 text-white top-16">
      <section className="flex flex-col justify-center">
        {props.data.map((work: works, i: number) => (
          <div
            key={work.id}
            className={clsx('flex flex-col mb-8 text-white mx-auto', {
              'sm:flex-row-reverse animate-slidein-from-right': i % 2 == 1,
              'sm:flex-row animate-slidein-from-left': i % 2 == 0,
            })}
          >
            {/* <NextImage
              src={work.image.url}
              width={work.image.width}
              height={work.image.height}
              className="max-w-[420px] selection:bg-transparent"
              // width={320}
              // height={180}
              alt="work image"
            /> */}
            <EagerImage
              src={work.image.url}
              width={work.image.width}
              height={work.image.height}
              className="max-w-[420px] selection:bg-transparent"
              // width={320}
              // height={180}
              alt="work image"
            />
            <div className="md:w-[420px] sm:w-[360px] px-8 pb-4">
              <h3 className="mb-4 text-xl font-semibold selection:text-black selection:bg-white">
                {work.title}
              </h3>
              <div
                dangerouslySetInnerHTML={{ __html: work.explanation }}
                className="mb-8 text-base selection:text-black selection:bg-white"
              />
              <div className="flex space-x-4 selection:bg-transparent">
                <Image
                  src="/calendar-alt.svg"
                  width="24"
                  height="24"
                  aria-hidden="true"
                  alt="calendar"
                />
                <p className="text-base selection:text-black selection:bg-white">
                  {work.period}
                </p>
              </div>
              <div className="flex space-x-4 selection:bg-transparent">
                <Image
                  src="/users-alt.svg"
                  width="24"
                  height="24"
                  aria-hidden="true"
                  alt="people"
                />
                <p className="text-base selection:text-black selection:bg-white">
                  {work.people}
                </p>
              </div>
              <div className="flex space-x-4 selection:bg-transparent">
                <div>
                  <Image
                    src="/award.svg"
                    width="24"
                    height="24"
                    aria-hidden="true"
                    alt="role"
                  />
                </div>
                <p className="text-base selection:text-black selection:bg-white">
                  {work.role}
                </p>
              </div>
              <div className="flex space-x-4 selection:bg-transparent">
                <div>
                  <Image
                    src="/wrench.svg"
                    width="24"
                    height="24"
                    aria-hidden="true"
                    alt="skill"
                  />
                </div>
                <div>
                  {work.skill.map((skill: SKILL) => (
                    <p
                      key={skill}
                      className="text-base selection:text-black selection:bg-white"
                    >
                      {skill}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
