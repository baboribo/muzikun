import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import "./globals.css";
 
export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
  icons: { // 파비콘
    icon: "/icons/favicon/favicon-bg-none.png" // public 경로에 icons 폴더가 존재합니다. favicon 폴더 안에 있는 이미지를 교체하세요.
  }
}
const navbar = (
  <Navbar
    logo={
      <>
        <b>무지쿤</b>
      </>
    }
    projectLink="https://github.com/baboribo/muzikun"
    // ... Your additional navbar options
  />
)
const footer = <Footer>{new Date().getFullYear()} © baboribo.</Footer> // 푸터임
 
export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="ko"
      // Required to be set
      dir="auto" // 사이트에서 글과 UI의 시작 방향(좌/우)를 의미함. auto는 브라우저가 자동으로 사용자가 사용하는 언어를 인식해 시작 방향을 설정해줌.
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/baboribo/muzikun/tree/main"
          footer={footer}
          // ... Your additional layout options
          editLink="이 페이지 편집"
          navigation={{
            prev: true,
            next: true
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}