import styles from '../config/styles'
import { stats } from '../constants'
import CountUp from 'react-countup'

export default function Stats () {

    return (
        <section
            className={`${styles.flexCenter} md:flex-row flex-col sm:mb-20 mb-6 relative z-50`}
        >
            {stats.map((stat) => (
                <div
                    key={stat.id}
                    className="flex-1 flex justify-start items-center flex-col m-3"
                >
                    <div className='flex'>
                        <CountUp
                            start={0}
                            end={stat.value}
                            duration={4}
                            className="font-gothan font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white"
                        />
                        {stat.text && (
                            <h4 className="font-gothan font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white ml-4">
                                {stat.text}
                            </h4>
                        )}
                    </div>
                    <p className="font-gothan font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
                        {stat.title}
                    </p>
                </div>
            ))}
        </section>
    )

}
