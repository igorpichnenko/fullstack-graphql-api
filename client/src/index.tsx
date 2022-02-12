import ReactDOM from 'react-dom';
import { createIOC } from './bindings';
import { Cards } from './components/Cards';
import { iocContext } from './hooks/useInject';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const ioc = createIOC();
const apolloClient = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <iocContext.Provider value={ioc}>
    <ApolloProvider client={apolloClient}>
      <Cards />
    </ApolloProvider>
  </iocContext.Provider>,
  document.getElementById('root'),
);
