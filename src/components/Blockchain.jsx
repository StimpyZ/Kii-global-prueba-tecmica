import styles, { layout } from '../config/styles'
import billing from '../assets/bill2.svg'
import google from '../assets/google.svg'
import apple from '../assets/apple.svg'
import { motion } from 'framer-motion'

export default function Blockchain () {

    return (
        <section id="gitbook" className={`${layout.sectionReverse} gap-10`}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 }
                }}
                className={layout.sectionImgReverse}>
                <img
                    src={billing}
                    alt="billing"
                    className="w-[90%] h-[90%] relative z-[5]"
                />
                <div className="absolute z-[3] -left-1/2 w-[80%] h-[80%] rounded-full fucsia__gradient" />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 }
                }}
                className={layout.sectionInfo}>
                <h2 className={`${styles.heading2} block`}>
                Blockchain & Currency <br className="sm:block hidden" />{' '}
                Exchange Excellence
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                We have our own blockchain network and we have the best exchange platform between currencies and cryptocurrencies. KII's currency and blockchain can provide its users with secure and instant transactions at a cost of less than 1%, regardless of the amount transferred.
                </p>

                <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
                    <img
                        src={apple}
                        alt="google_play"
                        className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
                    />
                    <img
                        src={google}
                        alt="google_play"
                        className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
                    />
                </div>
            </motion.div>
        </section>
    )

}
