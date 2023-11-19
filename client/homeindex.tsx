import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('home');
  if (rootElement) {
    ReactDOM.createRoot(rootElement).render(<Home />);
  } else {
    console.error('Root element with ID "home" not found in the document.');
  }
});
