import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
// BrowserRouter главный компонент react router который должен обернуть всё наше приложение
// так мы говорим реакту, что мы используем здесь url маршруты
// react router помогает нам работать со страницами. При заходе на ссылку он обрабатывает только нужные компоненты
// благодоря этому у нас не происходит загрузка целой страницы а только необходимых компонентов 
root.render(
  <BrowserRouter>
    <App />
    </BrowserRouter>
);