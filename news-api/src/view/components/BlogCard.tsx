import moment from 'moment';
import { Link } from 'react-router-dom';

const BlogCard = ({ blogItem }: any) => {
    const { publishedAt, description, urlToImage, source, title } = blogItem;

    const published = (moment(publishedAt)).format('LLL');

    const formatDescription = (description: string): string => {
        return description.substring(0, 130) + '....';
    }

    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer hover:opacity-90">
                <Link to={`/blog/${source.id}${publishedAt}`} style={{ textDecoration: 'none', color: 'black' }}>

                    <figure><img src={urlToImage} alt={source.name} /></figure>
                    <div className="card-body">
                        <h1 className="card-title text-xl font-bold">
                            {title}
                        </h1>
                        <p className='text-xs'>{formatDescription(description)}</p>
                        <p className='text-[0.65rem] text-gray-400'>Published at {published}</p>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default BlogCard