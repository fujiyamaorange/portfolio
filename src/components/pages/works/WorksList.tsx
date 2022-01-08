import Image from 'next/image'
import clsx from 'clsx'

import { works } from '@/types/cms-types'
import { NextImage } from '@/components/basic/NextImage'

type Props = { data: works[] }
type SKILL = Pick<works, 'skill'>['skill'][number]

export const WorksList: React.VFC<Props> = (props) => {
  console.log(props.data)
  return (
    <main className="absolute w-screen px-8 text-white top-16">
      <section className="flex flex-col justify-center">
        {props.data.map((work: works, i: number) => (
          <div
            key={work.id}
            className={clsx(
              'flex flex-col mb-8 text-white mx-auto sm:flex-row',
              {
                'sm:flex-row-reverse': i % 2 == 1,
              }
            )}
          >
            <NextImage src={work.image.url} width={320} height={180} />
            <div className="md:w-[420px] sm:w-[360px] px-8 py-4">
              <h3 className="mb-4 text-xl font-semibold">{work.title}</h3>
              <div
                dangerouslySetInnerHTML={{ __html: work.explanation }}
                className="mb-8 text-base"
              />
              <div className="flex space-x-4">
                <Image src="/calendar-alt.svg" width="24" height="24" />
                <p className="text-base">{work.period}</p>
              </div>
              <div className="flex space-x-4">
                <Image src="/users-alt.svg" width="24" height="24" />
                <p className="text-base">{work.people}</p>
              </div>
              <div className="flex space-x-4">
                <Image src="/award.svg" width="24" height="24" />
                <p className="text-base">{work.role}</p>
              </div>
              <div className="flex space-x-4">
                <Image src="/wrench.svg" width="24" height="24" />
                {/* TODO */}
                <p>
                  {work.skill.map((skill: SKILL) => (
                    <p key={skill} className="text-base">
                      {skill}
                    </p>
                  ))}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
