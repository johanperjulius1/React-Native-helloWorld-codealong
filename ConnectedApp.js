import React from 'react'
import Provider from 'react-redux'
import configureStore from './src/state/store/configureStore'
import App from "./App";

store = configureStore()
const ConnectedApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
export default ConnectedApp
