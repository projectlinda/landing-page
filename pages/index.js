
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Navbar from '../components/navbar';
import { theme } from '../constants';
import HomePage from './home';


export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Head>          
          <title>Carinderya</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Navbar></Navbar>
          <HomePage></HomePage>
        </main>

      </div>
    </ThemeProvider>
  )
}
