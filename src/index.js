import React from 'react';
import {render} from 'react-dom';
import App from './components/App';

const svgFile = window.location.href + 'images/icons.svg';
fetch(svgFile).then((result) => {
    return result.text()
}).then(data => {
    document.getElementById('customSvgIcons').innerHTML = data;


    render(
        <App />, document.getElementById('root')
    );
});


module.hot.accept();