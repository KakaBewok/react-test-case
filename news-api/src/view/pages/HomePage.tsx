/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../data/context/GlobalContext';
import { blogAPI } from '../../data/api/BlogAPI';

import Hero from '../components/Hero';
import BlogCardList from '../components/BlogCardList';

const HomePage: React.FC = () => {
    const { setBlogs, currentPage, setCurrentPage, isLoading, setIsLoading, error, setError } = useContext(GlobalContext);

    useEffect(() => {
        const loadBlogs = async () => {
            setIsLoading(true);
            try {
                const data = await blogAPI.get(currentPage);
                if (currentPage === 1) {
                    setBlogs(data);
                } else {
                    setBlogs((blog: any) => [...blog, ...data]);
                }
            }
            catch (e) {
                if (e instanceof Error) {
                    setError(e.message);
                }
            } finally {
                setIsLoading(false);
            }
        }
        loadBlogs();
    }, [currentPage]);

    const handleMoreClick = () => {
        setCurrentPage((currentPage: any) => currentPage + 1);
    };

    return (
        <>
            <Hero />
            <div>
                <div className='text-center my-10' id='news'>
                    <h2 className='font-bold text-4xl text-slate-800'>News Update</h2>
                    <p className='text-md'>find the latest news in today</p>
                </div>

                {/* Error notif */}
                {error && (
                    <div className="alert alert-error shadow-lg w-[50%] mx-auto mb-5">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>{error}</span>
                        </div>
                    </div>
                )}

                <BlogCardList />

                {/* Load more button */}
                {!isLoading && !error && (
                    <div className="row my-7">
                        <div className="col-sm-12">
                            <div className="button-group fluid">
                                <button className="button default" onClick={handleMoreClick}>
                                    More...
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* isLoading ... */}
                {isLoading && (
                    <div className="center-page my-9">
                        <span className="spinner primary"></span>
                        <p>Loading...</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default HomePage;