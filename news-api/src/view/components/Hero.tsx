/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const Hero: React.FC = () => {

    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("./assets/hero_image.jpg")` }}>
                <div className="hero-overlay bg-opacity-60" />
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold min-w-full">TodayNews</h1>
                        <p className="mb-5">
                            News today Indonesia and the World, the latest news. Trusted news site from politics, events, business, football, techno to gossip.</p>
                        <button className="btn btn-primary"><a style={{ color: 'white', textDecoration: 'none' }} href='#news
                        '>News Update</a></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero