/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import moment from 'moment';
import { GlobalContext } from '../../data/context/GlobalContext';

const BlogCardDetail: React.FC = () => {
    const { blog } = useContext(GlobalContext);
    const { author, title, description, urlToImage, publishedAt, content } = blog;

    const published = (moment(publishedAt)).format('LLL');

    return (
        <>
            <div className="mb-16 mx-auto rounded-md overflow-hidden w-[90%] bg-base-100 shadow-sm p-5">
                <div className='header'>
                    <h1 className='text-5xl font-bold mb-5 md:w-[90%]'>{title}</h1>
                    <p className='text-xl mb-3 md:w-[88%] text-slate-600'>{description}</p>
                    <p className='font-bold mb-3 text-slate-700'>By <span>{author}</span> </p>
                    <p className='mb-5 text-md text-slate-500'>{published}</p>
                    <figure><img src={urlToImage} alt={title} className='rounded-md' /></figure>
                    <p className='mt-1 mb-4 text-md text-slate-400'>Photo by<span>{title}</span> </p>
                </div>
                <div className='body'>
                    <p className='text-sm text-justify'>{content}
                    </p>
                </div>
            </div>
        </>
    )
}

export default BlogCardDetail;
