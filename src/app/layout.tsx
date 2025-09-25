import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Add A title',
  description: 'Add a description',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className={` antialiased`}>
        {/* Sticky Footer */}
        <div className="min-h-dvh grid grid-rows-[1fr_auto]">
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
