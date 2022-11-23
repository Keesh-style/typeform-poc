import '../styles/globals.css'
import type { AppProps } from 'next/app'

import '@typeform/embed/build/css/popup.css'
import '@typeform/embed/build/css/widget.css'

export default function App({ Component, pageProps }: AppProps) {
  const id = 'ed1e1LGH'
  return <Component {...pageProps} />
}
