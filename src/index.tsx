import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Импортируем Provider
import store from './redux/store'; // Импортируем созданный store
import App from './App'; // Корневой компонент приложения

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Оборачиваем приложение в Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);
