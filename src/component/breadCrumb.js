import React from 'react';
import { Link } from "react-router-dom";
function breadCrumb(props) {
    return (
        <div>
            <div class="scrapcar-subheader">
<div class="container">
<div class="row">
<div class="col-md-12">
<div class="scrapcar-subheader-wrap">
<h1>{props.title}</h1>
<ul class="scrapcar-breadcrumb">
<li><a href="/">Home</a></li>
<li class="active">{props.title}</li>
</ul>
</div>
</div>
</div>
</div>
</div>
        </div>
    )
}

export default breadCrumb;
