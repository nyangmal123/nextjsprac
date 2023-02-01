import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <h2>Header</h2>
      <Component {...pageProps} />
      <h2>Footer</h2>
    </div>
  );
}
