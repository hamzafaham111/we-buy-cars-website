import React from 'react';
import './style.css';
import './font/flaticon.css';
import Background from './component/background';
import Bottoms from './component/bottom';
function index() {
    return (
        <div>

        {/* background car flip */}
           <Background/>
{/* next links in carbuyers */}
<Bottoms/>

        </div>
    )
}

export default index;
