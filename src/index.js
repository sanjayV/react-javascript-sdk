import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

// const documentCapture = {};

const defaultOptions = {
    'token': '',
    'id': 'root'
};

// ReactDOM.render(<App />, document.getElementById('root'));
export const init  = (opts) => {
    console.log('I am in', options);
    const options = { ...defaultOptions, ...opts };
    ReactDOM.render(<App />, document.getElementById(options.id));
}

// export default documentCapture;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
