import Post from "@/Components/Post/Post";

const Posts = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      <h1 className="text-4xl text-center mt-5">
        The number of posts{" "}
        <span className="text-5xl text-green-400">{posts.length}</span>
      </h1>
      {posts.map(post => (
        <Post key={post.id} post={post}></Post>
      ))}
    </div>
  );
};

export default Posts;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const data = await res.json();
  // console.log(data)
  return {
    props: {
      posts: data,
    },
  };
};
