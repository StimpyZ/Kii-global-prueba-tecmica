import styles from '../config/styles'
import arrowUp from '../assets/arrow-up.svg'

export default function GetStarted () {

    return (
        <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px]`}>
            <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
                <div className={`${styles.flexStart} flex-col items-center`}>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://kiiglobal.io/'
                        className="font-gothan font-medium text-[20px] leading-[23.4px]">
                        <span className="text-gradient">Get Started</span>
                    </a>
                    <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
                </div>
            </div>
        </div>
    )

}
