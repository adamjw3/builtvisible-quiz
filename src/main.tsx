import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './app.scss';

createRoot(document.getElementById('quiz')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
