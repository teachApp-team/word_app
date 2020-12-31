import React from 'react';
import App from 'next/app';
import withReduxStore from '../lib/redux-store';
import {Provider} from 'react-redux';
import './styles.css';



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