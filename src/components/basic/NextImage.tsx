import Image, { ImageProps } from "next/image";

export const NextImage: React.VFC<ImageProps> = ({
  className,
  alt,
  ...others
}) => {
  return (
    <div className={className}>
      <Image {...others} alt={alt} />
    </div>
  );
};
