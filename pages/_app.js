import App from 'next/app'
import NextNprogress from 'nextjs-progressbar'
import '../assets/fonts/fonts.css'
import '../components/global.css'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <NextNprogress 
        color="#74c044"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp