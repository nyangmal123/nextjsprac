import { useRouter } from 'next/router';

const Post = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    retrun(<div>Loading...</div>);
  }

  return (
    <div>
      Post: {router.asPath}
      <h2>{post.title}</h2>
      <h2>{post.body}</h2>
    </div>
  );
};

export default Post;

// dynamic route - 1,2,3 μΈμλ 404 error
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
    ],
    fallback: false, // false, true, "blocking"
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const response = await fetch(`https://localhost:3001/posts/${id}`);
  const post = await response.json();

  return {
    props: {
      post,
    },
    revalidate: 1,
  };
}
