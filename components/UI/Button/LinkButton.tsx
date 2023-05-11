import Link from "next/link";
import Button, {ButtonProps} from "@/components/UI/Button/Button";

type Props = {
  href: string
} & ButtonProps

function LinkButton({href, ...props}: Props) {
  return (
    <Link href={href}>
      <Button {...props} />
    </Link>
  )
}

export default LinkButton;