import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>테스트입니다.</title>
      </Head>
      <h2>Header</h2>
      <Component {...pageProps} />
      <h2>Footer</h2>
    </div>
  );
}
