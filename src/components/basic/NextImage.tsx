import Image, { ImageProps } from 'next/image'

export const NextImage: React.VFC<ImageProps> = (props) => {
  return (
    <div>
      <Image {...props} />
    </div>
  )
}
