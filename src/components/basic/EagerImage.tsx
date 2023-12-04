import { DetailedHTMLProps, ImgHTMLAttributes, useEffect, useRef } from "react";

export const EagerImage = ({
  className,
  src,
  alt,
  ...others
}: DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>) => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && imgRef.current) {
            imgRef.current.src = src ?? "";
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.5,
      },
    );

    observer.observe(imgRef.current);

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img {...others} ref={imgRef} data-src={src} alt={alt} />
    </div>
  );
};
