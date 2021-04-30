import { FC } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../layout/layout';
import '../styles/main.scss';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../styles/theme';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  <Head>
    <title>Next and Typescript</title>
    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
  </Head>;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
