import type { profile } from "@/types/cms-types";

type Props = {
  data: profile;
};

export const CameraContent = ({ data }: Props) => {
  const { name, introduce, hobby } = data;
  return (
    <div className="mx-auto my-4 space-y-4 text-lg text-center w-max">
      <h2>{name}</h2>
      {/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
      <div dangerouslySetInnerHTML={{ __html: introduce }} />
      <h2>{hobby}</h2>
    </div>
  );
};
