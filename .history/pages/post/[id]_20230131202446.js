import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  console.log(router.query);
  const { id } = router.query;
  return <div>Post: {id} </div>;
};

export default Post;
