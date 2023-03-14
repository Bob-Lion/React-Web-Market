import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/app/App';
import { RecoilRoot } from 'recoil';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </>
);
