import '@fortawesome/fontawesome-svg-core/styles.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Poppins } from '@next/font/google'
import EmailCapture from '@/utils/emailCapture'
import './globals.css'


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log(poppins.className)
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={poppins.className}>
        <Navbar />
          {children}
    <Footer />
        {/* <EmailCapture /> */}
      </body>
    </html>
  )
}
