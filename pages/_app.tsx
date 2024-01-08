import type { AppProps } from 'next/app'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core";
// config.autoAddCss = false;
import { Kanit } from 'next/font/google'
const inter = Kanit({ subsets: ['latin'], weight: ['200'] })

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>)
}