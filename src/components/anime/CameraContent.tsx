import { profile } from '@/types/cms-types'

type Props = {
  data: profile
}

export const CameraContent: React.VFC<Props> = ({ data }) => {
  const { name, introduce, hobby } = data
  return (
    <div className="mx-auto mb-4 space-y-4 text-xl text-center w-max">
      <h2>{name}</h2>
      <div dangerouslySetInnerHTML={{ __html: introduce }} />
      <h2>{hobby}</h2>
    </div>
  )
}
