"use client"
import '@fortawesome/fontawesome-svg-core/styles.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Poppins } from '@next/font/google'
import { ModalProvider } from '@/app/components/modal'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800']
})

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
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
        <div id="modal-root"></div>
      </body>
    </html>
  )
}
