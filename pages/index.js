
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Navbar from '../components/navbar';
import HomePage from './home';

const theme = {
  primaryColor: '#ED5755',
  primaryTextColor: '#4C4C51',
  secondaryTextColor: "white",
  spacingUnit: (val) => `${val * 10}px`,
};

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
