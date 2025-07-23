import { PostType } from "@/app/components/Posts";

export const posts: PostType[] = [{
    postImg: 'course-bg-1.png',
    type: "✍️ Article",
    title: 'What if famous brands had regular fonts? Meet RegulaBrands!',
    description: 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
    author: {
        name: "Sarthak Kamra",
        imgSrc: "creator.png",
    },
    views: '1.4k'
}, {
    postImg: 'course-bg-2.png',
    type: "🔬️ Education",
    title: 'Tax Benefits for Investment under National Pension Scheme launched by Government',
    description: 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
    author: {
        name: "Sarah West",
        imgSrc: "creator2.png",
    },
    views: '1.4k'
}, {
    postImg: 'course-bg.png',
    type: "🗓️ Meetup",
    title: 'Finance & Investment Elite Social Mixer @Lujiazui',
    author: {
        name: "Sarthak Kamra",
        imgSrc: "creator3.png",
    },
    date: 'Fri, 12 Oct, 2018',
    location: 'Ahmedabad, India',
    views: '1.4k',
    btns: [{ name: 'Visit Website', color: '#E56135' }]
}, {
    type: "💼️ Job",
    title: 'Software Developer',
    author: {
        name: "Sarthak Kamra",
        imgSrc: "creator4.png",
    },
    company: 'Innovaccer Analytics Private Ltd.',
    location: 'Ahmedabad, India',
    views: '1.4k',
    btns: [{ name: 'Apply on Timesjobs', color: '#02B875' }]
}]