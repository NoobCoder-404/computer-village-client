import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import 'react-day-picker/dist/style.css';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import App from './App';
import AuthProvider from './Context/AuthProvider';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <Toaster position="top-center"></Toaster>
      <App />
    </AuthProvider>
  </QueryClientProvider>
);
