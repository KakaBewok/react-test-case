import React from 'react'
import Hero from '../components/Hero';
import BlogCard from '../components/BlogCard';

const HomePage: React.FC = () => {
    return (
        <>
            <Hero />
            <div>
                <div className='text-center my-10' id='news'>
                    <h2 className='font-bold text-4xl text-slate-800'>News Update</h2>
                    <p className='text-md'>find the latest news in today</p>
                </div>
                <BlogCard />
            </div>
        </>
    )
}

export default HomePage;