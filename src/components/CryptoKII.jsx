import styles, { layout } from '../config/styles'
import Button from './Button'
import bill from '../assets/bill.svg'
import { motion } from 'framer-motion'

export default function CryptoKII () {

    return (
        <section id="whitepaper" className={layout.section}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
                className={layout.sectionInfo}>
                <h2 className={styles.heading2}>Why KII?</h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    KII is a new cryptocurrency built on our revolutionary new
                    blockchain that allows the user to send payments to family
                    and friends at a cost much cheaper than typical remittance
                    providers.
                </p>
                <Button styles='mt-10' />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 }
                }}
                className={layout.sectionImg}>
                <img src={bill} alt="bill" className="w-full h-full" />
            </motion.div>
        </section>
    )

}
