import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

type AvatarSize = "xs" | "sm";

type AvatarImageProps = Omit<ImageProps, "width" | "height"> & {
  size?: AvatarSize;
};

const avatarSize = {
  xs: "h-5 w-5",
  sm: "h-9 w-9",
};

export const AvatarImage = ({
  src,
  alt,
  size = "xs",
  ...rest
}: AvatarImageProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-full border-[1px] border-blue-200",
        avatarSize[size],
      )}
    >
      <Image src={src} alt={alt} fill {...rest} className="object-cover" />
    </div>
  );
};
