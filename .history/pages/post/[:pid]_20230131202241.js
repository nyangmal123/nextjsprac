import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  console.log('query :>> ', query);
  const { pid } = router.query;
  return <div>Post: </div>;
};

export default Post;
