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

// dynamic route - 1,2,3 외에는 404 error
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
    ],
    fallback: false, // true, "blocking"
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post = await response.json();

  return {
    props: {
      post,
    },
  };
}
