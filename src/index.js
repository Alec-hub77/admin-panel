import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/layout/Layout'
import './assets/css/index.css';
import './assets/css/grid.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';

document.title = 'Admin Panel'

ReactDOM.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
  document.getElementById('root')
);

