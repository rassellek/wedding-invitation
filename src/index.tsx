import ReactDOM from 'react-dom/client';

import { MainPages } from 'modules/account';

import 'assets/styles/global.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <MainPages.Main />,
);
