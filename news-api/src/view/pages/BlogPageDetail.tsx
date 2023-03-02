import React from 'react'
// import Hero from '../components/Hero';
// import BlogCard from '../components/BlogCard';
import BlogCardDetail from '../components/BlogCardDetail';

const HomePageDetail: React.FC = () => {
    return (
        <>
            {/* <Hero /> */}
            <div className='text-center mt-8 mb-5' id='news'>
                <h2 className='font-bold text-4xl text-slate-800'>News Update</h2>
                <p className='text-md'>find the latest news in today</p>
            </div>
            <BlogCardDetail />
        </>
    )
}

export default HomePageDetail;