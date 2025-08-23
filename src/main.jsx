// Entry point for the React application
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Get the root DOM node
const rootElement = document.getElementById('root');

if (rootElement) {
  // Render the App inside React StrictMode
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  // Handle missing root element
  console.error('Root element not found. Unable to render React app.');
}