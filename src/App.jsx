import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import store, { persistor } from "redux/store/store.js";

import Router from "router/Router";

import { GlobalStyle } from "styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";

import React, { useEffect } from 'react';
import favicon from "assets/images/favicon.ico"

function App() {
  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']");
    link.href = favicon;
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
