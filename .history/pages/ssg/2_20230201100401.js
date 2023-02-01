import { useRouter } from 'next/router';

const Post = ({ post }) => {
  const router = useRouter();

  return (
    <div>
      Post: {router.asPath}
      <h2>{post.title}</h2>
      <h2>{post.body}</h2>
    </div>
  );
};

export default Post;

export async function getStaticProps(context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/2`);
  const post = await response.json();

  return {
    props: {
      post,
    },
  };
}
