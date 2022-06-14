import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


import { UserProvider } from "./contexts/user.context";
import { CategoriesProvider } from "./contexts/categories.context";
import { CartProvider } from "./contexts/cart.context";
import { store, persistor  } from "./store/store";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

import * as ServiceWorker from './serviceWorkerRegistration';

import "./index.scss";

import App from './App';

const client = new ApolloClient({
  uri: 'https://crwn-clothing.com/',
  cache: new InMemoryCache()
});

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        {/* <UserProvider> */}
        {/* <CategoriesProvider> */}
        {/* <CartProvider> */}
          <App />
        {/* </CartProvider> */}
        {/* </CategoriesProvider> */}
        {/* </UserProvider> */}
      </BrowserRouter>
      </PersistGate>
    </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  rootElement
);


ServiceWorker.register()