import 'bootstrap/dist/css/bootstrap.min.css'
import type { AppProps } from "next/app";
import '../styles/slyder.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
