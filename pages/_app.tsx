import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE
}

function MyApp({ Component, pageProps }: AppProps) {

  return (
  <AlertProvider template={AlertTemplate} {...options}>
    <Component {...pageProps} />
  </AlertProvider>
  )
}

export default MyApp
