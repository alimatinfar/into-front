import { Types } from "@/types/types";

type Props = {
  type?: 'h1' | 'h2';
  children: Types["children"];
  size?: string;
  primaryColor?: boolean;
  withLine?: boolean;
}

function Title({type = 'h1', children, size, primaryColor, withLine}: Props) {

  const allSizes: Record<Exclude<Props["type"], undefined> | 'default', string> = {
    'h1': 'text-3xl font-black',
    'h2': 'text-2xl font-bold',
    'default': 'text-lg font-medium',
  }

  const classSize = size || (allSizes[type] ? allSizes[type] : allSizes.default)
  const typoClass = `${primaryColor ? 'text-primary' : ''} ${withLine ? 'bg-dark-1 px-10 z-10' : ''} ${classSize}`
  let typoElement;

  switch (type) {
    case 'h1':
      typoElement = (
        <h1 className={typoClass}>{children}</h1>
      )
      break;
    case 'h2':
      typoElement = (
        <h2 className={typoClass}>{children}</h2>
      )
      break;
    default:
      typoElement = (
        <h3 className={typoClass}>{children}</h3>
      )
  }

  return (
    <div className={`relative w-full flex justify-center ${primaryColor && 'text-primary'}`}>
      {typoElement}
      {withLine && <span className='absolute bg-dark-3 h-[1px] w-full top-4 m-auto'></span>}
    </div>
  )
}

export default Title;