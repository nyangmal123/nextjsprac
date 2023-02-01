import '@/styles/globals.css';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>테스트입니다.</title>
        <meta name='description' content='설명입니다.' />
      </Head>
      <div>
        <h2>Navigation</h2>
        <div
          onClick={() => {
            router.push('/about');
          }}
        >
          About
        </div>
        <div
          onClick={() => {
            router.push('/profile');
          }}
        >
          Profile
        </div>
      </div>
      <Component {...pageProps} />
      <h2>Footer</h2>
    </div>
  );
}
