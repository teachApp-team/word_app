import React from 'react';
import App from 'next/app';
import withReduxStore from '../lib/redux-store';
import {Provider} from 'react-redux';
import './styles.css';
import Header from '../components/Layout/Header';
import Top from '../components/Top/Top';



class _App extends App {
  
  render () {
    const {Component, pageProps, reduxStore} = this.props
    console.log("Hello Next");
    console.log(reduxStore.getState().student_id);
    if (reduxStore.getState().student_id == 5) {
      return (
        <Provider store= {reduxStore}>
          {console.log("_app.js")}
          <Header/>
          <Component {...pageProps}/>
        </Provider>
      )
    } {
      return (
        <Provider store= {reduxStore}>
          <Top/>
        </Provider>
      )
    }
  }
}

export default withReduxStore(_App)