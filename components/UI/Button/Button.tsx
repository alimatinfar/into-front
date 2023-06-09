import React, {ReactNode} from 'react';
import useButtonTypes from "@/components/UI/Button/hooks/useButtonTypes";
import useButtonSizes from "@/components/UI/Button/hooks/useButtonSizes";

type ButtonTypes = 'primary' | 'whiteOutline'
type ButtonSizes = 'md' | 'lg' | 'full'

export type ButtonProps = {
  type?: ButtonTypes,
  size?: ButtonSizes,
  onClick?: (event: any) => void,
  children: ReactNode
}

function Button({type='primary', size='md', onClick, children}: ButtonProps) {
  const types = useButtonTypes()
  const sizes = useButtonSizes()

  const customClass = `${types[type]} ${sizes[size]}`

  return (
    <button
      {...onClick ? {onClick: onClick} : {} }
      className={`rounded-md text-center duration-300 ${customClass}`}>
      {children}
    </button>
  );
}

export default Button;