import Image from 'next/image'
import React from 'react'

const Menubar = () => {
    return (
        <>
            <div className='hidden md:flex md:px-[50px] xl:px-[72px] h-[72px] items-center justify-between bg-[#FFFFFF] [box-shadow:0px_1px_2px_0px_rgba(0,_0,_0,_0.12)]'>
                <Image
                    src="/Icons/logo.svg"
                    alt="Logo"
                    width={162.57}
                    height={24}
                />
                <div className='flex w-[360px] h-[42px] rounded-[21px] bg-[#F2F2F2] mx-5'>
                    <Image
                        width={22}
                        height={22}
                        src="/Icons/search.svg"
                        className='mx-3.5 my-2.5'
                        alt="Logo" />
                    <input
                        type="text"
                        placeholder='Search for your favorite groups in ATG'
                        className='flex-grow outline-0 text-[#5C5C5C] text-[14px] pr-3.5 font-medium'
                    />
                </div>
                <div className='text-[#2E2E2E] text-right text-[16px] font-medium'>
                    Create account. <span className='text-[#2F6CE5] text-[16px] font-bold'>It&#39;s free!</span>
                </div>
            </div>
            <div className='md:hidden h-[24px] px-[12px] flex justify-end items-center'>
                <Image src="/Icons/threeShapes.svg" width={51} height={10} alt='' />
            </div>
        </>
    )
}

export default Menubar