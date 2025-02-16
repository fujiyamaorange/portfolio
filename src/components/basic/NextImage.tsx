import Image, { type ImageProps } from "next/image";

export const NextImage = ({ className, alt, ...others }: ImageProps) => {
  return (
    <div className={className}>
      <Image {...others} alt={alt} />
    </div>
  );
};
