import React, { useContext } from 'react';
import { GlobalContext } from '../../data/context/GlobalContext';
import BlogCard from './BlogCard'
import { Blog } from '../../domain/Blog';

const BlogCardList: React.FC = () => {
    const { blogs } = useContext(GlobalContext);

    return (
        <>
            <div className='flex flex-wrap w-full'>
                {
                    blogs.map((blog: Blog) => (
                        <div className='mx-auto my-3'>
                            <BlogCard blogItem={blog} />
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default BlogCardList;

