import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" title="Home">
      <Image src="/Brand-Logo.svg" alt="Logo" width={116} height={32} />
    </Link>
  );
};
