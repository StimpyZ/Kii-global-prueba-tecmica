import transactions from '../assets/transactions.svg'
import arrowTrending from '../assets/arrow-trending.svg'
import secure from '../assets/secure.svg'
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import discord from '../assets/discord.svg'
import telegram from '../assets/telegram.svg'
import youtube from '../assets/youtube.svg'
import tiktok from '../assets/tiktok.svg'

export const navLinks = [
    {
        id: 'home',
        title: 'Home'
    },
    {
        id: 'kii-explorer',
        title: 'Kii Explorer'
    },
    {
        id: 'gitbook',
        title: 'Gitbook'
    },
    {
        id: 'whitepaper',
        title: 'Whitepaper'
    },
    {
        id: 'paperwallet',
        title: 'Paper Wallet'
    }
]

export const stats = [
    {
        id: 'holders',
        title: 'Holders',
        value: 9980
    },
    {
        id: 'seconds',
        title: 'Average Transaction Time',
        value: 1,
        text: 'Seg'
    },
    {
        id: 'nodes',
        title: 'Data Validator Nodes',
        value: 7
    }
]

export const features = [
    {
        id: 'feature-1',
        icon: transactions,
        title: 'Instant Transactions',
        content: 'All transactions are automatically sent and received instantly at no additional cost to the users pocket. KII allows you to save more and live better.'
    },
    {
        id: 'feature-2',
        icon: arrowTrending,
        title: 'No minimums, no maximums',
        content: 'Buy and sell KII or other cryptocurrencies instantly, with the lowest commissions on the market and without limits 24 hours a day.'

    },
    {
        id: 'feature-3',
        icon: secure,
        title: 'Secure Transactions',
        content: 'KII is the most secure blockchain-based payment network, thanks to technological innovations like ChainLocks. This mitigates the risk of attacks.'

    }
]

export const footerLinks = [
    {
        id: 1,
        title: 'Some Text',
        links: [
            {
                id: 1,
                name: 'Text'
            },
            {
                id: 2,
                name: 'Text'
            },
            {
                id: 3,
                name: 'Text'
            }
        ]
    },
    {
        id: 2,
        title: 'Some Text',
        links: [
            {
                id: 4,
                name: 'Text'
            },
            {
                id: 5,
                name: 'Text'
            }
        ]
    },
    {
        id: 3,
        title: 'Some text',
        links: [
            {
                id: 6,
                name: 'Text'
            },
            {
                id: 7,
                name: 'Text'
            }
        ]
    }
]

export const socialMedia = [
    {
        id: 'social-media-1',
        icon: instagram,
        link: 'https://www.instagram.com/'
    },
    {
        id: 'social-media-2',
        icon: facebook,
        link: 'https://www.facebook.com/'
    },
    {
        id: 'social-media-3',
        icon: twitter,
        link: 'https://www.twitter.com/'
    },
    {
        id: 'social-media-4',
        icon: discord,
        link: 'https://www.linkedin.com/'
    },
    {
        id: 'social-media-5',
        icon: telegram,
        link: 'https://www.telegram.com/'
    },
    {
        id: 'social-media-6',
        icon: youtube,
        link: 'https://www.youtube.com/'
    },
    {
        id: 'social-media-7',
        icon: tiktok,
        link: 'https://www.tiktok.com/'
    }
]
