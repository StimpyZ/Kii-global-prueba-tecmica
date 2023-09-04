import styles, { layout } from '../config/styles'
import { features } from '../constants'
import Button, { ButtonLogIn } from './Button'
import { motion } from 'framer-motion'

const FeaturedCard = ({ icon, title, content }) => {

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 }
            }}
            className={'flex flex-row p-6 rounded-[20px] mb-1 last-of-type:mb-0 feature-card'}
        >
            <div
                className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-shadowBlue`}
            >
                <img
                    src={icon}
                    alt="star"
                    className="w-[50%] h-[50%] object-contain"
                />
            </div>
            <div className="flex-1 flex flex-col ml-3">
                <h1 className="font-gothan font-bold text-white text-[23px] leading-[23.4px] mb-2">
                    {title}
                </h1>
                <p className="font-gotham-book text-white text-[16px] leading-[24px]">
                    {content}
                </p>
            </div>
        </motion.div>
    )

}

export default function Business () {

    return (
        <section id="kii-explorer" className={layout.section}>
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
                <h2 className={styles.heading2}>
                    Leading the Way in Currency{' '}
                    <br className="sm:block hidden" /> and Crypto Exchange
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    We have our own blockchain network and we have the best
                    platform for exchange between currencies and
                    cryptocurrencies.
                </p>
                <div className="flex gap-4">
                    <Button styles="mt-10" />
                    <ButtonLogIn styles="mt-10" />
                </div>
            </motion.div>
            <div className={`${layout.sectionImg} flex-col`}>
                {features.map(feature => (
                    <FeaturedCard {...feature} key={feature.id} />
                ))}
            </div>
        </section>
    )

}
