import React from 'react';
import ReactDOM from 'react-dom';
import './styles/materialize.min.css';
import './styles/style.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
