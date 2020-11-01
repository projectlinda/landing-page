
import Head from 'next/head'
import styled, { ThemeProvider } from 'styled-components'
import Navbar from '../components/navbar'
import { spacing, theme } from '../constants'
import AboutPage from './about'
import ContactPage from './contact'
import HomePage from './home'

const AppStyled = styled.div`  
  margin: auto;
  max-width: 1400px; 
  
  padding: 0 ${spacing(3)}; 
`;

const FooterStyled = styled.footer`  
  font-size: 1.2rem;
  margin: auto;
  max-width: 1400px; 
  text-align: center;
  
  margin-top: ${spacing(5)}; 
  padding: ${spacing(3)}; 

  @media only screen and (min-device-width: 1024px) {
    text-align: left;
  }
`;

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Carinderya</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <AppStyled>
            <Navbar />
          </AppStyled>
          <HomePage />
          <AboutPage />
          <ContactPage />
        </main>

        <FooterStyled>
          Copyright © 2020 | Project Linda Inc. All Rights Reserved
        </FooterStyled>
      </div>
    </ThemeProvider>
  )
}
