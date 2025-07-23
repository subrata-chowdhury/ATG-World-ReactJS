import { posts } from '@/data/posts'
import Image from 'next/image'
import React from 'react'

const Posts = () => {
    return (
        <div className='flex flex-col gap-1.5'>
            {posts.map((post, i) => <Post {...post} key={i} />)}
        </div>
    )
}

function Post({ postImg, type, title, description, author, views, location, date, company, btns }: PostType) {
    return (
        <div className='rounded-[4px] md:border border-[#E0E0E0] bg-[#FFF] [box-shadow:0px_1px_2px_0px_rgba(0,_0,_0,_0.12)] md:[box-shadow:none] max-w-[692px]'>
            {postImg && <Image src={'/images/' + postImg} alt='' width={692} height={220} />}
            <div className='p-5'>
                <div className='mb-2.5 text-[#000] text-[14px] sm:text-[18px] font-medium'>{type}</div>
                <div className='mb-3 text-[#000] text-[16px] sm:text-[22px] font-semibold leading-[134.545%]'>{title}</div>
                <div className='text-[#5C5C5C] text-[14px] sm:text-[19px] font-normal leading-[134.167%]'>{description}</div>
                <div className='flex gap-[40px] text-[#000] text-[12px] sm:text-[15px] font-medium mb-[16px]'>
                    {date && <div className='flex gap-1'><Image src={"/Icons/calendar.svg"} width={18} height={18} alt="" />{date}</div>}
                    {company && <div className='flex gap-1'><Image src={"/Icons/bag.svg"} width={18} height={18} alt="" />{company}</div>}
                    {location && <div className='flex gap-1'><Image src={"/Icons/location.svg"} width={18} height={18} alt="" />{location}</div>}
                </div>

                {btns && <div className='flex flex-col gap-1'>{btns.map((btn, i) => <button key={i} className={`h-[38px] text-center text-[13px] font-semibold leading-[140.4%] rounded-[8px] border-[0.7px] border-[#A9AEB8] bg-[#FFF]`} style={{ color: btn.color }}>{btn.name}</button>)}</div>}

                <div className='mt-[32px] flex justify-between'>
                    <div className=' flex items-center justify-start gap-[10px]'>
                        <Image
                            src={'/images/' + author.imgSrc}
                            alt=''
                            width={48}
                            height={48}
                            className='rounded-full gap-2.5 w-[37px] h-[37px] md:w-[48px] md:h-[48px]'
                        />
                        <div className='flex flex-col gap-0'>
                            <div className='text-[#000] text-[13px] md:text-[18px] font-semibold'>{author.name}</div>
                            <div className='text-[#495057] text-[13px] md:text-[18px] font-semibold block md:hidden'>{views}</div>
                        </div>
                    </div>
                    <div className='flex gap-[40px] items-center'>
                        <div className='text-[#525252] text-right text-[14px] gap-[8px] font-medium hidden md:flex'><Image src={"/Icons/eye.svg"} width={18} height={18} alt="" />{views} views</div>
                        <div className='md:w-[42px] h-[36px] py-[9px] px-[12px] bg-[#EDEEF0] rounded-[2px] flex gap-1'>
                            <Image src={'/Icons/share.svg'} width={18} height={18} alt='' />
                            <div className='text-[#212529] text-[12px] font-normal block md:hidden'>Share</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export type PostType = {
    postImg?: string;
    type: string;
    title: string;
    description?: string;
    location?: string;
    date?: string;
    company?: string;
    author: {
        name: string;
        imgSrc: string;
    }
    views: string;
    btns?: {
        name: string;
        color: string;
    }[];
}

export default Posts;