

type Props = {
  imageName: 'background1' | 'background2' | 'background3' | 'background4',
  className: string
}

function Background({imageName, className}: Props) {
  const backgroundClassName = 'absolute w-full inset-x-0 -z-10'

  return (
    <img
      className={`${backgroundClassName} ${className}`}
      src={`/images/${imageName}.svg`}
      alt={imageName}
    />
  )
}

export default Background;