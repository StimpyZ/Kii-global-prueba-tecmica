import React from 'react'

export default function Button ({ styles }) {

    return (
        <button
            type="button"
            className={`py-4 px-6 font-gothan font-bold text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles} transform hover:scale-105 transition-transform`}
        >
            Create Account
        </button>
    )

}

export function ButtonLogIn ({ styles }) {

    return (
        <button
            type="button"
            className={`py-4 px-6 font-gothan font-bold text-[18px] text-white bg-secondary-gradient rounded-[10px] outline-none ${styles} transform hover:scale-105 transition-transform`}
        >
            Log In
        </button>
    )

}
