import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyAG_EjjXsIxH6SsGR9wuOu_Yfhl4XHjn6c';

// create new component. this component should produce some html
// ES6 syntax for function
const App = () => {
    return <div>Hi!</div>;
}

// take this component's generated html and put it on the page (in the DOM)
// <App /> == <App></App>

ReactDOM.render(<App />, document.querySelector('.container'));