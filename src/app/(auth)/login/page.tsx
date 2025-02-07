import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsEyeFill } from 'react-icons/bs'

export default function index() {
    return (
        <div
            className="w-full min-h-screen flex px-30 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/front-view-office-desk-with-laptop-chair 1.png')" }}
        >
            <div className="w-full flex items-center justify-between gap-10">
                <div className="w-[657px] bg-white px-16 rounded-2xl shadow-xl border">
                    <h1 className="text-lg text-[#202020] w-[340px] text-[40.36px] p-8 font-bold">Log in, buddy!</h1>

                    <form className="space-y-4 px-10">
                        <div>
                            <label className="block text-[#84818A] text-[13.45px]">Email address</label>
                            <input
                                title="email"
                                type="email"
                                className=" p-2 border-b border-[#84818A] w-[431.64px] font-medium text-[15.7px] text-black focus:outline-none focus:text-black"
                                placeholder="Shoghlana@email.com"
                            />
                        </div>

                        <div className="relative mb-8">
                            <label className="block text-[15.7px] text-[#84818A]">Password</label>
                            <input
                                title="password"
                                type="password"
                                className=" border-b border-[#84818A] w-[431.64px] focus:outline-none focus:border-black"
                            />
                            <span className="absolute right-3 top-2 text-[#84818A] "><BsEyeFill /></span>
                        </div>

                        <button className="w-[440.61px] bg-primary text-white py-3 rounded-lg text-[15.7px] font-medium mb-6">
                            Sign In
                        </button>
                    </form>

                    <div className="text-center mb-4">
                        <a href="#" className="text-[#0055D9] text-[15.7px]">Forgot Password?</a>
                    </div>

                    <div className="border border-[#DCDBDD] w-[385px] mx-14"></div>

                    <div className="text-center mt-3 text-[#202020] text-[15.7px] mb-8">
                        New user to Shoghlana? <Link href="/signup" className="text-[#0055D9] text-[15.7px]">Create an account</Link>
                    </div>

                    <p className="text-xs text-[#84818A] text-13.45px mt-6 text-center mb-10">
                        Protected by reCAPTCHA and subject to the <a href="#" className="text-[#0055D9]">Privacy <br /> Policy</a> and <a href="#" className="text-[#0055D9]">Terms of Service</a>.
                    </p>
                </div>

                <div className="w-1/2 text-white p-8">
                    <Image width={200} height={200} src="/assets/logo.png" alt="Logo" className="w-[156.47px] mb-4" />
                    <h2 className="text-[48px] w-[667.11px] font-semibold">Check out the coolest job opportunities in Egypt and<br /> the MENA area!</h2>
                    <p className="mt-4 text-[14px] w-[430.4px] text-sm text-white">Looking for job openings and career options? Shoghlana’s <br /> got your back in your job hunt in Egypt!</p>
                    <div className="mt-4 flex items-center">
                        <div className="flex -space-x-2">
                            <Image width={32} height={32} src="/assets/Oval.png" alt='Oval' className="w-[32px]  rounded-full border border-white " />
                            <Image width={32} height={32} src="/assets/Oval (1).png" alt='Oval' className="w-[32px] rounded-full border border-white" />
                            <Image width={32} height={32} src="/assets/Oval (2).png" alt='Oval' className="w-[32px] rounded-full border border-white" />
                        </div>
                        <p className="ml-3 text-[14px] font-medium">3k+ people joined us, now it`s your turn</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
