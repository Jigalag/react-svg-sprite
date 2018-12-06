import React, {Component} from 'react';
import IconSvg from "../IconSvg";

class App extends Component {
    render() {
        return (
            <div>
                <IconSvg name={'javascript'} uniqueId={'my_js_ico'} color={'#f8e200'} hoverColor={'black'}/>
                <IconSvg name={'react'} uniqueId={'_react_01'} color={'rgb(97, 218, 251)'}/>
                <IconSvg name={'github'} uniqueId={'git_1'} color={'black'}/>
            </div>
        )
    }
}
export default App;