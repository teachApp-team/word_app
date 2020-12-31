import React from 'react';
import App, { Container } from 'next/app';
import PropTypes from 'prop-types';
import Head from 'next/head';
import withReduxStore from '../lib/redux-store';
import {Provider} from 'react-redux'
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../constants/theme';
import './styles.css'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from '../store'

// function MyApp(props) {
//   const { Component, pageProps, reduxStore } = props;

//   React.useEffect(() => {
//     // Remove the server-side injected CSS.
//     const jssStyles = document.querySelector('#jss-server-side');
//     if (jssStyles) {
//       jssStyles.parentElement.removeChild(jssStyles);
//     }
//   }, []);

//   return (
//     <React.Fragment>
//       <Head>
//         <title>My page</title>
//         <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
//       </Head>
//       <ThemeProvider theme={theme}>
//         {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
//         <CssBaseline />
//         <Provider store={reduxStore}>
//             <Component {...pageProps} />
//         </Provider>
//       </ThemeProvider>
//     </React.Fragment>
//   );
// }

// MyApp.propTypes = {
//   Component: PropTypes.elementType.isRequired,
//   pageProps: PropTypes.object.isRequired,
// };

// export default withReduxStore(MyApp)


class _App extends App {
  render () {
    const {Component, pageProps, reduxStore} = this.props
    return (
      <Provider store= {reduxStore}>
        <Component {...pageProps}/>
      </Provider>
    )
  }
}
export default withReduxStore(_App)