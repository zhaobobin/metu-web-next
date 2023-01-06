import type { AppProps } from 'next/app';
import BaseLayout from 'layouts/BaseLayout';
import './globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  );
}
