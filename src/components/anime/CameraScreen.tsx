import Image from 'next/image'
import { ComponentPropsWithoutRef } from 'react'
import clsx from 'clsx'

type Props = ComponentPropsWithoutRef<'div'>

export const CameraScreen: React.FC<Props> = ({
  children,
  className,
  ...others
}) => {
  return (
    <>
      <div className="flex flex-col w-full mt-16">
        <div
          className={clsx(
            className,
            'camera-bg min-h-[360px] flex items-center bg-cover bg-no-repeat bg-center'
          )}
          {...others}
        >
          {children}
        </div>

        {/* <div className="relative min-h-[360px] flex items-center">
          <div
            className={clsx(
              className,
              'absolute bg-cover bg-no-repeat bg-center min-h-[360px]'
            )}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              src="/tokyo.mp4"
              poster="/tokyo.gif"
              height="360"
            />
          </div>
          <div className="absolute -translate-x-1/2 left-1/2">{children}</div>
        </div> */}
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
      <style jsx>{`
        .camera-bg {
          background-image: url('/tokyo.gif');
        }
      `}</style>
    </>
  )
}
