// Import global styles and fonts
import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
 
const inter = Inter({ subsets: ['latin'] })
 
export const metadata: Metadata = {
  title: '404 - 그 어느것도 찾을 수 없었습니다.',
  description: '일치 되는 것이 하나도 없었습니다.',
}
 
export default function GlobalNotFound() {
  return (
    <html lang="ko" className={inter.className}>
      <body>
        <h4>404 - 그 어느것도 찾을 수 없었습니다.</h4>
        <p>이 페이지에서 아무것도 찾을 수 없었으며, 그 어느 일치 되는 것이 하나도 없었습니다</p>
      </body>
    </html>
  )
}