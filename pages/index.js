
import Head from 'next/head'
import styled, { ThemeProvider } from 'styled-components'
import Navbar from '../components/navbar'
import { theme } from '../constants'
import AboutPage from './about'
import HomePage from './home'

const AppStyled = styled.div`  
  margin: auto;
  max-width: 1400px;    
`;

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Head>
          <title>Carinderya</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <AppStyled>
            <Navbar />
          </AppStyled>
          <HomePage />
          <AboutPage />
        </main>

      </div>
    </ThemeProvider>
  )
}
