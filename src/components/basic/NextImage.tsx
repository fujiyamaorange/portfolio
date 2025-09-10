import Image, { type ImageProps } from "next/image";

export const NextImage: React.FC<ImageProps> = ({
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
