import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata: Metadata={
    title:"spatialdevs",
    description:"In this site developers can see the creative ideas of other developers",
}

const Layout = ({children}: {
  children: React.ReactNode
}) => {
  return (
    <html>
        <body>
          <Navbar/>
            <main>
                {children}
            </main>
           <Footer/> 
        </body>
    </html>
  )
}

export default Layout