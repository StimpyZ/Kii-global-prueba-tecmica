import styles from '../config/styles'
import { footerLinks, socialMedia } from '../constants'

export default function Footer () {

    return (
        <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
            <div
                className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}
            >
                <div className="flex-[1] flex flex-col justify-start mr-10">
                    <img
                        src="/kilogo.gif"
                        alt="logo"
                        className="w-[55px] h-[37px]"
                    />
                    <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
                        First Colombian Crypto Ecosystem.
                    </p>
                </div>
                <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                    {footerLinks.map((footer) => (
                        <div
                            key={footer.id}
                            className={
                                'flex flex-col ss:my-0 my-4 min-w-[150px]'
                            }
                        >
                            <h1 className="font-gothan text-[18px] leading-[27px] text-white">
                                {footer.title}
                            </h1>
                            <ul className="list-none mt-4">
                                {footer.links.map(link => (
                                    <li
                                        key={link.id}
                                        className={'font-gotham-book text-[16px] leading-[24px] text-white hover:text-secondary cursor-pointer mb-4 last-of-type:mb-0'}
                                    >
                                        {link.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
                <p className="font-gothan font-bold text-center text-[18px] leading-[27px] text-white">
                    Copyright Ⓒ 2022 KIIGlobal. All Rights Reserved.
                </p>

                <div className="flex flex-row md:mt-0 mt-6">
                    {socialMedia.map(social => (
                        <img
                            key={social.id}
                            src={social.icon}
                            alt={social.id}
                            className={'w-[21px] h-[21px] object-contain cursor-pointer mr-6 last-of-type:mr-0'}
                            onClick={() => window.open(social.link)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )

}
