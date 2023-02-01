import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <h2>Header</h2>
      <Component {...pageProps} />
      <h2>Footer</h2>
    </div>
  );
}
