import React from 'react';
import ReactDOM from 'react-dom/client';
import { VisibilityProvider } from './providers/VisibilityProvider';
import App from './components/App';
import './index.css';
import { GlobalStateProvider } from './providers/GlobalStateContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <VisibilityProvider>
      <GlobalStateProvider>
        <App />
      </GlobalStateProvider>
    </VisibilityProvider>
  </React.StrictMode>,
);


