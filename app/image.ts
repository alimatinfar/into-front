function image({ src, width, quality }: any) {
  return `https://intodev.ir/${src}?w=${width}&q=${quality || 100}`
}

export default image;