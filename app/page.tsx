import Header from '@/app/components/Header';
import Menubar from './components/Menubar';
import Tabs from './components/Tabs';
import Recommendation from './components/Recommendation';
import Posts from './components/Posts';
import Image from 'next/image';

export default function Home() {
    return (
        <div className='w-full flex flex-col justify-center'>
            <Menubar />
            <Header />
            <Tabs />
            <div className='flex justify-between mx-0 md:mx-[10%] xl:mx-[13.888%] gap-[18px] md:gap-[50px] xl:gap-[105px]'>
                <Posts />
                <Recommendation />
            </div>
            <div
                className='flex md:hidden w-[54px] h-[54px] rounded-full justify-center items-center fixed bottom-6 right-[18px]'
                style={{
                    backgroundImage: "linear-gradient(180deg, #FF5C5C 0%, #F0568A 100%)",
                    filter: "drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.08)) drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.18))"
                }}>
                <Image src={'/Icons/pen.svg'} width={24} height={24} alt='' />
            </div>
        </div>
    );
}
