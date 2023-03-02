/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../data/context/GlobalContext';
import { blogAPI } from '../../data/api/BlogAPI';
import { useParams } from 'react-router-dom';
import BlogCardDetail from '../components/BlogCardDetail';

const HomePageDetail: React.FC = () => {
    const { id } = useParams<string>();

    const { setBlog, isLoading, setIsLoading, error, setError } = useContext(GlobalContext);

    useEffect(() => {
        setIsLoading(true);
        blogAPI
            .getByTitle(id)
            .then((data) => {
                setBlog(data);
                setIsLoading(false);
            })
            .catch((e) => {
                setError(e);
                setIsLoading(false);
            });
    }, [id]);

    return (
        <>
            <div className='text-left w-[90%] mx-auto mt-8 mb-5' id='news'>
                <h2 className='font-semibold text-2xl text-slate-600'>News Detail</h2>
            </div>

            {/* isLoading ... */}
            {isLoading && (
                <div className="center-page my-9">
                    <span className="spinner primary"></span>
                    <p>Loading...</p>
                </div>
            )}

            {/* Error notif */}
            {error && (
                <div className="alert alert-error shadow-lg w-[50%] mx-auto mb-5">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{error}</span>
                    </div>
                </div>
            )}

            <BlogCardDetail />
        </>
    )
}

export default HomePageDetail;