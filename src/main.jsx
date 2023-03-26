import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/app/App';
import { RecoilRoot, RecoilEnv } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <BrowserRouter>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </BrowserRouter>
  // </React.StrictMode>
);
