import styles from '../config/styles'
import robot from '../assets/robot.webp'
import GetStarted from './GetStarted'
import ParticleContainer from './ParticleContainer'

export default function Hero () {

    return (
        <section
            id="home"
            className={`flex md:flex-row flex-col ${styles.paddingY} relative`}
        >
            <ParticleContainer />
            <div
                className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 relative z-50`}
            >
                <div className="absolute z-[1] w-[20%] h-[30%] rounded-full fucsia__gradient top-40 -left-9" />
                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-gothan font-semibold ss:text-[72px] text-[38px] text-white ss:leading-[100.8px] leading-[55px] block">
                        <span className="whitespace-nowrap">
                            First Colombian
                        </span>{' '}
                        <br className="sm:block hidden" />{' '}
                        <span className="whitespace-normal text-gradient">
                            Crypto
                        </span>{' '}
                    </h1>

                    <div className="md:ml-9 ss:flex hidden md:mr-4 mr-0">
                        <GetStarted />
                    </div>
                </div>
                <h1 className="flex-1 font-gothan font-semibold ss:text-[72px] text-[38px] text-white ss:leading-[100.8px] leading-[55px] block">
                    Ecosystem.
                </h1>
                <p className={`${styles.paragraph} max-w-[500px] mt-5`}>
                    KII is a cryptocurrency built on our revolutionary new
                    blockchain that allows the user to send payments to family
                    and friends at a much cheaper cost than typical remittance
                    providers.
                </p>
            </div>
            <div
                className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
            >
                <img
                    src={robot}
                    alt="robot"
                    className="w-[100%] h-[100%] relative z-[5]"
                />
                <div className="absolute z-[2] w-[80%] h-[80%] rounded-full purple__gradient top-20" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 top-5 purple__gradient" />
            </div>

            <div className={`ss:hidden ${styles.flexCenter}`}>
                <GetStarted />
            </div>
        </section>
    )

}
