import Image, { type ImageProps } from "next/image";

type AvatarImageProps = ImageProps;

export const AvatarImage = ({
  src,
  alt,
  width,
  height,
  ...rest
}: AvatarImageProps) => {
  return (
    <div className="relative h-10 w-10 overflow-hidden rounded-full">
      <Image src={src} alt={alt} width={width} height={height} {...rest} />
    </div>
  );
};
