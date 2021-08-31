import React from 'react';
import './style.css';
import Faqs from './Faq/Faq';
import Breadcrumb from '../breadCrumb';

function index() {
    return (
        <div>
             <div className="bread-curamb">
        <Breadcrumb title="Sell Any Make"/>
        </div>
      
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
        <Faqs />
        </div>
    )
}

export default index;
