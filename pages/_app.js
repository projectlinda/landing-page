import { Fragment } from 'react'
import GlobalStyle from '../global-styles'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <GlobalStyle />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
