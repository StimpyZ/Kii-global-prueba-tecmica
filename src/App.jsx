import Business from './components/Business'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Stats from './components/Stats'
import styles from './config/styles'
import Blockchain from './components/Blockchain'
import CryptoKII from './components/CryptoKII'
import CTA from './components/CTA'
import Footer from './components/Footer'
function App () {

    return (
        <>
            <div className="bg-primary w-full overflow-hidden">
                <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Navbar />
                    </div>
                </div>

                <div className={`bg-primary ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Hero />
                    </div>
                </div>

                <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Stats />
                        <Business />
                        <Blockchain />
                        <CryptoKII />
                        <CTA />
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )

}

export default App
