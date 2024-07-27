import React from 'react'
import { SocialMedia } from '../information/SocialMedia'

export const Footer = () => {
    return (
        <footer className="w-11/12 items-center mb-2 mt-10  m-auto">
            <div
                className="py-2 top-0 md:px-20 w-12/12lg:w-[38rem]"
            >
                <SocialMedia />
                <div className="flex flex-col items-center">
                    <h2 className="my-2 text-lg font-semibold">XanSaul</h2>
                    <h2 className="text-lg font-semibold">
                        Alejandro Saul Huerta Murillo
                    </h2>
                </div>
            </div>
        </footer>
    )
}
