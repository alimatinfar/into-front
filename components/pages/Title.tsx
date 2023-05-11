import { Types } from "@/types/types";

type Props = {
  type?: 'h1' | 'h2';
  children: Types["children"];
  size?: string;
}

function Title({type = 'h1', children, size}: Props) {

  const allSizes: Record<Exclude<Props["type"], undefined> | 'default', string> = {
    'h1': 'text-3xl font-black',
    'h2': 'text-2xl font-bold',
    'default': 'text-lg font-medium',
  }

  const classSize = size || allSizes[type]

  switch (type) {
    case 'h1':
      return (
        <h1 className={classSize}>{children}</h1>
      )
      break;
    case 'h2':
      return (
        <h2 className={classSize}>{children}</h2>
      )
      break;
    default:
      return (
        <h3 className={size || allSizes.default}>{children}</h3>
      )
  }
}

export default Title;