import '@/styles/globals.css';
import Head from 'next/head';
import Link from 'next/link';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>테스트입니다.</title>
      </Head>
      <div>
        <h2>Navigation</h2>
        <Link href={`/about`}>About</Link>
        <Link href={`/profile`}>Profile</Link>
      </div>
      <Component {...pageProps} />
      <h2>Footer</h2>
    </div>
  );
}
