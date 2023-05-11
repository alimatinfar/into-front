import { Types } from "@/types/types";

type Props = {
  type?: 'h1' | 'h2';
  children: Types["children"];
}

function Title({type, children}: Props) {
  switch (type) {
    case 'h1':
      return (
        <h1 className='text-3xl font-black'>{children}</h1>
      )
      break;
    case 'h2':
      return (
        <h2 className='text-2xl font-bold'>{children}</h2>
      )
      break;
    default:
      return (
        <h3 className='text-lg font-medium'>{children}</h3>
      )
  }
}

export default Title;