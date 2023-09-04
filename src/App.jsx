import Business from './components/Business'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Stats from './components/Stats'
import styles from './config/styles'
import Blockchain from './components/Blockchain'
import CryptoKII from './components/CryptoKII'
import CTA from './components/CTA'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
function App () {

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {

        const handleScroll = () => {

            if (window.scrollY > 0) {

                setIsScrolled(true)

            } else {

                setIsScrolled(false)

            }

        }

        window.addEventListener('scroll', handleScroll)

        return () => {

            window.removeEventListener('scroll', handleScroll)

        }

    }, [])

    return (
        <>
            <header
                className={`${styles.paddingX} ${
                    styles.flexCenter
                } sticky top-0 z-[99] ${isScrolled ? 'backdrop-blur' : ''}`}
            >
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </header>

            <main>
                <div className={`bg-primary ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Hero />
                    </div>
                </div>

                <div
                    className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}
                >
                    <div className={`${styles.boxWidth}`}>
                        <Stats />
                        <Business />
                        <Blockchain />
                        <CryptoKII />
                        <CTA />
                    </div>
                </div>
            </main>

            <footer
                className={`bg-dark ${styles.paddingX} ${styles.flexStart}`}
            >
                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>
            </footer>
        </>
    )

}

export default App
