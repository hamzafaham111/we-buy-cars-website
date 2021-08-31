import React from 'react';
import { Link} from "react-router-dom";
import './main.css';
// import img1 from './assets/images/new/'
function Main() {
    return (
        <div className="bg">
                <div class="homeshowcase hidden-xs hidden-sm hidden-md">
    <div class="sell-btn">
    <Link exact to="/sellmycar">
    <div class="sell-d"></div>
    </Link>
    </div>
    <div class="buy-btn">
    <a  href="https://web.whatsapp.com/send?phone=9710504474100&amp;text=I'm%20interested%20to%20sell%20my%20car" class="hidden-xs" target="_blank">
    <div class="whatsapp-d"></div>
    </a>
    </div>
    <div class="about-btn">
    <Link exact to="/aboutus">
    <div class="about-d"></div>
    </Link>
    </div>
    <div class="contact-btn">
    <Link exact to="/contactus">
    <div class="contact-d"></div>
    </Link>
    </div>
    <div class="faq-btn">
    <Link exact to="/faqs">
    <div class="faq-d"></div>
    </Link>
    </div>
    <div class="eva-btn">
    <Link exact to="/valution">
    <div class="eva-d"></div>
    </Link>
    </div>
    </div>

{/* small screen */}



<div class="container hidden-lg">

<div class="row space">
<div class="col-xs-6 spsp">
<Link to="/sellmycar"><img src={require("./assets/images/new/sell-mob.jpg")} alt="" class="img-fluidss"/></Link>
</div>
<div class="col-xs-6 spsp">
<Link to="/valution"><img src={require("./assets/images/new/evaluation-mob.jpg")} class="img-fluidss" alt=""/></Link>
</div>
</div>
<div class="row space">
<div class="col-xs-6 spsp">
<a href="https://api.whatsapp.com/send?phone=9710504474100&amp;text=I'm%20interested%20to%20sell%20my%20car" target="_blank" class="hidden-sm hidden-md hidden-lg"><img src={require("./assets/images/new/whatsapp-mob.jpg")} class="img-fluidss" alt=""/></a>
</div>
<div class="col-xs-6 spsp">
<Link to="/faqs"> <img src={require("./assets/images/new/faq-mob.jpg")} class="img-fluidss" alt=""/></Link>
</div>
</div>
<div class="row space">
<div class="col-xs-6 spsp">
<Link to="/contactus"> <img src={require("./assets/images/new/contact-mob.jpg")} class="img-fluidss" alt=""/></Link>
</div>
<div class="col-xs-6 spsp">
<Link to="/aboutus"><img src={require("./assets/images/new/about-mob.jpg")} class="img-fluidss" alt=""/></Link>
</div>
</div>
</div>
        </div>
    )
}

export default Main
