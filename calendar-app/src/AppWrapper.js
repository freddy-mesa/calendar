import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from './store/reducer'
import { ApolloProvider,ApolloClient, InMemoryCache } from '@apollo/client';

import App from './App';

const AppWrapper = () => {
  const store = createStore(reducer,devToolsEnhancer());
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
  });
  
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  )
}

export default AppWrapper;