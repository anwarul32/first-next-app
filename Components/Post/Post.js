import Link from "next/link";

const Post = ({post}) => {
    const { title, id} = post;
    return (
        <div className="mt-5 flex items-center flex-col">
            <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                
                <div className="card-actions justify-end">
                    <Link href={`/posts/${post?.id}`}>
                        <button className="btn btn-primary">See details</button>
                    </Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Post;