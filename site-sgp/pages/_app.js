import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import theme from '../src/theme';

class OMHApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>My OMH page</title>
        </Head>
        <div>
          <Component {...pageProps} />
        </div>
      </Container>
    );
  }
}

export default OMHApp;
