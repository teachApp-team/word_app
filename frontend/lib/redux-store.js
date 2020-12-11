import {Component} from 'react';
import {initStore} from '../store';

const isServer = typeof window === 'undefined'
const _NRS_ = '__NEXT_REDUX_STORE__'

function getOrCreateStore (initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initStore(initialState)
  }
  // Create store if unavailable on the client and set it on the window object
  if (!window[_NRS_]) {
    window[_NRS_] = initStore(initialState)
  }
  return window[_NRS_]
}

export default (App) => {
  return class AppWithRedux extends Component {
    static async getInitialProps (appContext) {
      const reduxStore = getOrCreateStore()

      // Provide the store to getInitialProps of pages
      appContext.ctx.reduxStore = reduxStore
      let appProps = {}
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext)
      }
      return {
        ...appProps,
        initialReduxState: reduxStore.getState()
      }
    }

    constructor (props)  {
      super(props)
      this.reduxStore=getOrCreateStore(props.initialReduxState)
    }

    render(){
      return <App {...this.props} reduxStore={this.reduxStore}/>
    }
  }
}