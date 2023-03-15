import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/app/App';
import { RecoilRoot, RecoilEnv } from 'recoil';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <RecoilRoot>
    <App />
  </RecoilRoot>
  // </React.StrictMode>
);
