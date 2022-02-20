import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './theme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './modules';
import './locales/i18n';

const store = createStore(rootReducer);

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
