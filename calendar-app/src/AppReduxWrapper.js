import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from './store/reducer'

import App from './App';

const AppReduxWrapper = () => {
  const store = createStore(reducer,devToolsEnhancer());
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default AppReduxWrapper;