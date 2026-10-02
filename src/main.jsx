import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Global styles: tokens first, then base styles. They're imported BEFORE App
// so that each component's own stylesheet (imported inside the component)
// comes later in the cascade and can refine the shared styles.
import './styles/theme.css';
import './styles/base.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
