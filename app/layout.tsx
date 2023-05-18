import './styles/globals.css'
import { Inter } from 'next/font/google'


export const metadata = {
  title: 'تیم نرم افزاری اینتو | into',
  description: 'تیم نرم افزاری اینتو | into با استفاده از سال ها تجربه و مهارت آماده خدمت رسانی به شما در زمینه طراحی وبسایت ها و تبدیل فرایند ها به نرم افزار های قابل اجرا تحت وب می باشد',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>{children}</body>
    </html>
  )
}
