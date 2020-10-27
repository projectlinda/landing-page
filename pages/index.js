
import Head from 'next/head'
import styled, { ThemeProvider } from 'styled-components'
import Navbar from '../components/navbar'
import { theme } from '../constants'
import AboutPage from './about'
import HomePage from './home'

const AppStyled = styled.div`
  max-width: 1400px;
  margin: auto;
`;

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <AppStyled>
        <Head>          
          <title>Carinderya</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Navbar />
          <HomePage />
          <AboutPage />
        </main>

      </AppStyled>
    </ThemeProvider>
  )
}
