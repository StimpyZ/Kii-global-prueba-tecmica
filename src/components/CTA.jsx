import styles from '../config/styles'
import Button from './Button'

export default function CTA () {

    return (
        <section id='paperwallet' className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
            <div className='flex-1 flex flex-col'>
                <h2 className={`${styles.heading2} text-white`}>Let's try with KII</h2>
                <p className={`${styles.paragraph} max-w-[500px] mt-5`}>
                KII is a new cryptocurrency built on our revolutionary new blockchain, reshaping the future of finance. 💎🚀
                </p>
            </div>

            <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 relative z-50 overflow-x-hidden`}>
                <div className="absolute z-[1] w-[80%] h-[80%] -right-[50%] rounded-full purple__gradient bottom-40" />
                <Button />
            </div>
        </section>
    )

}
