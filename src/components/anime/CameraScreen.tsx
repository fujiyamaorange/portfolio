import Image from 'next/image'
import { ComponentPropsWithoutRef } from 'react'

type Props = ComponentPropsWithoutRef<'div'>

export const CameraScreen: React.FC<Props> = ({
  children,
  className,
  ...others
}) => {
  return (
    <div className="flex flex-col w-full mt-16">
      <div className={className} {...others}>
        {children}
      </div>
      <div className="flex flex-col bg-black">
        <ul className="flex justify-between mt-4">
          <li className="w-32 ml-4 text-center">ビデオ</li>
          <li className="text-center text-orange-300 w-max">写真</li>
          <li className="w-32 mr-4 text-center">ポートレート</li>
        </ul>
        <div className="flex items-center justify-between mx-4 my-4">
          <Image
            src="/image.svg"
            height="48"
            width="48"
            aria-hidden="true"
            alt="image store"
          />
          <Image
            src="/record-audio-thin.svg"
            height="64"
            width="64"
            aria-hidden="true"
            alt="record button"
          />
          <Image
            src="/camera.svg"
            height="48"
            width="48"
            aria-hidden="true"
            alt="camera"
          />
        </div>
      </div>
    </div>
  )
}
