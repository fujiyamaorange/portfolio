import Image, { ImageProps } from 'next/image'

export const NextImage: React.VFC<ImageProps> = ({ className, ...others }) => {
  return (
    <div className={className}>
      <Image {...others} />
    </div>
  )
}
