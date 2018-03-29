import React from 'react';
import ReactDOM from 'react-dom';

let router;

// if (location.pathname == '/welcome') {
//     router = <Welcome />
// } else {
//     router = <App />
// }


ReactDOM.render(
    <HelloWorld />,
    document.querySelector('main')
);

function HelloWorld() {
    return (
        <div>Hello, World!</div>
    );
}
