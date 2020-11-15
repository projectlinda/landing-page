
import Head from 'next/head'
import Link from 'next/link'
import styled, { ThemeProvider } from 'styled-components'
import Navbar from '../components/navbar'
import { spacing, theme } from '../constants'
import AboutPage from './about'
import ContactPage from './contact'
import HomePage from './home'

const AppStyled = styled.div`  
  margin: auto;
  max-width: 1400px; 
  
  padding: 0 ${spacing(2)}; 
`

const FooterStyled = styled.footer`  
  display: flex;
  font-size: 1vh;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  max-width: 1400px;   
  text-align: center;
  
  margin-top: ${spacing(5)}; 
  padding: ${spacing(3)}; 

  & > * {
    margin-top: ${spacing(1)}; 
  }

  @media only screen and (min-device-width: 1024px) {
    justify-content: space-between;
    text-align: left;    
  }
`

const FooterLinkContainerStyled = styled.div`
  display: flex;

  & > * {
    margin-left: ${spacing(1)};
  }
`

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Head>
          <title>Carinderya</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
          <span>Copyright © 2020 | Project Linda Inc. All Rights Reserved</span>
          <FooterLinkContainerStyled>
            <Link href="/faq">
              FAQs
          </Link>
            <Link href="/agreement">
              Terms and Conditions
          </Link>
          </FooterLinkContainerStyled>
        </FooterStyled>
      </div>
    </ThemeProvider>
  )
}
