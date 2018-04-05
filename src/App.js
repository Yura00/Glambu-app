

import React from 'react'

import { Provider } from 'react-redux'
import configureStore from './config/configureStore'
import AppWithNavigationState from './navigators/AppNavigator'
import { ThemeProvider } from 'react-native-material-ui'
import 'regenerator-runtime/runtime';

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <ThemeProvider>
      <AppWithNavigationState />
    </ThemeProvider>
  </Provider>
)
export default App;