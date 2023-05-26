import Image from "next/image";
import Link from "next/link";


type Props = {
  height?: number;
  width?: number;
  onClick?: () => void;
}

function Logo({width, height, onClick}: Props) {
  return (
    <Link href='/'>
      <Image
        {...onClick ? {onClick} : {}}
        src='/images/logo.svg' alt='logo.svg' width={width || 100} height={height || 100}
      />
    </Link>
  )
}

export default Logo;