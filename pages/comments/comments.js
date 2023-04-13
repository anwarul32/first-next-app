const comments = ({ comments }) => {
  console.log(comments);
  return (
    <div>
      {comments.map(comment => (
        <h1 key={comment.id} className="m-5">
          Comment Body: {comment.body}
        </h1>
      ))}
    </div>
  );
};

export default comments;

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/comments?_limit=20"
  );
  const data = await res.json();

  return {
    props: {
      comments: data,
    },
  };
};
