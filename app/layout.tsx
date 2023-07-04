import './globals.css'
import Retroica from '@next/font/local'

// Font files can be colocated inside of `pages`
const retroica = Retroica({ 
  src: '/../public/retroica/Retroica.ttf' 
  }
)

export const metadata = {
  title: 'Fer',
  description: 'Developed by vumg-z',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={retroica.className}>{children}</body>
    </html>
  )
}
