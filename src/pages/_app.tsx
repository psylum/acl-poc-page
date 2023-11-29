import '@/styles/globals.css'
import '@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
