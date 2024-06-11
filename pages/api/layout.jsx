// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Judson } from 'next/font/google'
import { Libre_Franklin } from 'next/font/google'

const judson = Judson({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-judson',
  weight: ['400', '700']
})
const libre_franklin = Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre_franklin',
})

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={judson.variable + ' ' + libre_franklin.variable}>
        {children}
      </body>
    </html>
  )
}