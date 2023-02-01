import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>Post: {id}</div>;
};

export default Post;

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const json = await response.json();

  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => console.log(json));
  return {
    props: {},
  };
}
