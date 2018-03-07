import React from "react"
import { render } from "react-dom"
import store, { history } from './store';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from "react-redux"
import App1Container from "./containers/App1Container"

class App1 extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
          <App1Container/>
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}

render(<App1/>, document.getElementById('App1'))