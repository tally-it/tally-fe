import React from 'react';
import ReactDOM from 'react-dom';
import './Index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
