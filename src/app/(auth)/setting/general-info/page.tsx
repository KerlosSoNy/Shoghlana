import CustomSelectMenu from '@/components/customeSelectMenu/customSelectMenu'
import InputAndLabel from '@/components/input/inputAndLabel'
import Layout from '@/components/setting/layout'
import React from 'react'

export default function Page() {
    return (
        <Layout>
            <div className=" bg-white  shadow-2xl mb-20 mx-auto rounded-[25px] overflow-hidden w-full">
                <div className="bg-main p-8 text-center">
                    <div className='bg-main w-fit mx-auto'>
                        <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto overflow-hidden border-4 border-white">
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile" className="w-full h-full object-cover" />
                        </div>
                        <h2 className="text-white text-xl font-semibold mt-4">Profile Photo</h2>
                        <p className="text-white text-sm">You can upload a .jpg, .png, or .gif photo with max size of 5MB.</p>
                        <div className="mt-2 text-white">
                            <label htmlFor="inputFile" className="underline hover:cursor-pointer mr-4">Change Photo</label>
                            <input id='inputFile' type="file" className="hidden" />
                            <button className="underline">Delete</button>
                        </div>
                    </div>
                </div>

                <form className="p-8">
                    <section>
                        <h3 className="text-lg font-semibold">Your information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <InputAndLabel label="First Name" />
                            <InputAndLabel label="Last Name" />
                        </div>
                        <div className="grid grid-cols-3 gap-4 mt-4">
                            <InputAndLabel label="Birthdate" type='date' />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                            <CustomSelectMenu label="Genedar" />
                        </div>
                    </section>

                    <section className="mt-8">
                        <h3 className="text-lg font-semibold">Your Location</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            <CustomSelectMenu label="Country" />
                            <CustomSelectMenu label="City" />
                            <CustomSelectMenu label="Area" />
                        </div>
                    </section>

                    <section className="mt-8">
                        <h3 className="text-lg font-semibold mb-4">Contact info</h3>
                        <InputAndLabel placeholder='e.g. 01012345678' label='Phone' />
                    </section>
                </form>
            </div>
        </Layout>
    )
}
