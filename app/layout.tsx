import './styles/globals.css'
import localFont from 'next/font/local'


export const metadata = {
  title: 'تیم نرم افزاری اینتو | into',
  description: 'تیم نرم افزاری اینتو | into با استفاده از سال ها تجربه و مهارت آماده خدمت رسانی به شما در زمینه طراحی وبسایت ها و تبدیل فرایند ها به نرم افزار های قابل اجرا تحت وب می باشد',
}

const peydaFont = localFont({
  src: [
    {
      path: '../public/fonts/peyda/PeydaWeb-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/peyda/PeydaWeb-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/peyda/PeydaWeb-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/peyda/PeydaWeb-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/peyda/PeydaWeb-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/peyda/PeydaWeb-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/peyda/PeydaWeb-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/peyda/PeydaWeb-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/peyda/PeydaWeb-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={peydaFont.className}>{children}</body>
    </html>
  )
}
