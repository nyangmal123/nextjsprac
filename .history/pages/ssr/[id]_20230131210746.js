import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>Posst: {id}</div>;
};

export default Post;

export async function getServerSideProps(context) {
  return {
    prps: {},
  };
}
