import 'bootstrap/dist/css/bootstrap.min.css'
import type { AppProps } from "next/app";
import '../styles/slyder.css'
import '../styles/Header.css'
import '../styles/recomendation.css'
import '../styles/global.css'
import '../styles/Watchnow.css'
import '../styles/Youmightliketoo.css'
import '../styles/QueueList.css'
import'../styles/Action.css'
import '../styles/Pagination.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
