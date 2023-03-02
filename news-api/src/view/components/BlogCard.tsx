import React from 'react'

const BlogCard: React.FC = () => {
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer hover:opacity-90">
                <figure><img src="https://images.wsj.net/im-731228/social" alt="Shoes" /></figure>
                <div className="card-body">
                    <h1 className="card-title">
                        The Wall Street Journal
                    </h1>
                    <p className='text-sm'>Thomas H. Lee, Leveraged-Buyout Pioneer, Dies of Apparent Suicide</p>
                    <p className='text-[0.65rem] text-gray-400'>Published at Rabu, 1 Maret 2023</p>
                </div>
            </div>
        </>
    )
}

export default BlogCard