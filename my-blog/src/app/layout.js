import './globals.css'
import Link from 'next/link'
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>

      </head>
      <header>
        <h1>헤더</h1>

        <Link href="/">홈</Link>
        <Link href="/posts">블로그</Link>

      </header>
      <body>{children}</body>
    </html>
  )
}
