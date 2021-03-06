import React from 'react';
import ReactDOM from 'react-dom';

import Btn1 from './Btn1'
import TextEffect from './TextEffect'

ReactDOM.render(
    <div className="center">
        <div>
            <Btn1 text="View The Website"/>
        </div>

        <div>
            <Btn1 text="Hover"/>
        </div>

        <div>
            <TextEffect text="WHITE BOARD" act={false}/>
        </div>

    </div>,
    document.getElementById('root')
);