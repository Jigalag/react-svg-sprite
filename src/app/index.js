import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import svgSprite from '../../public/images/sprite/symbol/svg/sprite.symbol.svg';
import InlineSVG from 'svg-inline-react';

render(
    <div>
        <InlineSVG element={'svg'} src={svgSprite} style={{display: 'none'}}/>
        <App />
    </div>, document.getElementById('root')
);


module.hot.accept();