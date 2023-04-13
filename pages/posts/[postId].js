import { useRouter } from "next/router";

const PostDetails = ({ post }) => {
    const { id, title, body } = post;
    const router = useRouter();

    const handleBack = () => {
        router.push("/posts")
    }


    return (
        <div className="card w-96 m-10 bg-base-100  text-primary-content">
            <div className="card-body">
                <p>{ id }</p>
                <h2 className="card-title">Title: { title }</h2>
                <p>Post: { body }</p>
                <button onClick={handleBack} className="btn btn-secondary">Back to post</button>
            </div>
        </div>
    );
};


export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.postId}`);
    const data = await res.json();
    // console.log(data)
    return {
       props: {
        post : data
       }
    }
}


export const getStaticPaths = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();

    const paths = posts.map(post => {
        return {
            params: {
                postId: `${post.id}`
            }
        }
    }) 

    return {
        paths,
        fallback: false
    }
}


export default PostDetails;