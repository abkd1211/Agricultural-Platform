import Head from 'next/head'
import { ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


type LayoutProps = {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Head>
      <title>FarmTech Pro</title>
      <meta name="description" content="Revolutionizing agriculture, one tap at a time" />
    </Head>
    <Navbar />
    <main className="flex-grow">{children}</main>
    <Footer />
  </>
)

export default Layout
