import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './templates/App';
import { StyledThemeProvider } from './styles/StyledThemeProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyledThemeProvider>
      <App>Hello</App>
    </StyledThemeProvider>
  </React.StrictMode>,
);
