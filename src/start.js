import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './welcome';

let router;

if (location.pathname == '/welcome') {
    router = <Welcome />
}
// else {
//     router = <App />
// }


ReactDOM.render(
    <Welcome />,
    document.querySelector('main')
);

// function HelloWorld() {
//     return (
//         <div>Hello, World!</div>
//     );
// }
