import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  console.log('query :>> ', query);
  const { id } = router.query;
  return <div>Post: {id} </div>;
};

export default Post;
