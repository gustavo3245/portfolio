
import Navbar from './navbar'
import Footer from './footer'

// @ts-ignore
export default function Layout({ children }) {
    return (
        <div className="body">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}