import React from 'react';
import './style.css';
import Breadcrumb from '../breadCrumb';
import './font/flaticon.css';

function index() {
    return (
        <div>
         <div className="bread-curamb">
        <Breadcrumb title="Contact Us"/>
        </div>
            <div class="scrapcar-main-section scrapcar-about-gallery-wrap">
<div class="container">
<div class="row">
<div class="col-md-7 pt-5">
<div class="scrapcar-aboutus">
<h3>Contact Us By Phone</h3>
<span>We have friendly team members waiting to answer your questions and queries 24 hours a day 7 days a week so feel free to call us whenever you need to.</span>
<p>We understand it can be a difficult decision to sell your car. We also know you want the simplest process possible where you get the very best service coupled with of course the best price for your car, regardless of it’s condition. Should you need any advice over the phone please do not hesitate to contact us directly <b>Monday to Sunday</b> - 24 hours a day on <b>0504474100</b>.</p>
<a href="https://www.webuycars.ae/sell-my-car" class="scrapcar-simple-btn"><i class="automechanic-icon automechanic-people-1"></i>Sell My Car</a>
</div>
</div>
<div class="col-md-5 mt-5" >
<img src="https://www.webuycars.ae/images/contact.jpg" class="img-fluid"/>
</div>
</div>
</div>
</div>

{/* next  */}

<div class="scrapcar-main-section scrapcar-about-gallery-wrap">
<div class="container">

<div class="col-md-12">
<div class="scrapcar-aboutus">
<h3>Our Customer Service Team</h3>
<span>We pride ourselves on ensuring we only hire the best team members available. All of our staff have been trained to the highest standards and will always be able to help you no matter what the question, so call us now and sell your Car today. </span>
<p>For all customer service queries, please email ; <b>info@webuycars.ae</b></p>
</div>
<div class="scrapcar-aboutus">
<a href="https://web.whatsapp.com/send?phone=9710504474100&amp;text=I'm%20interested%20to%20sell%20my%20car" class="hidden-xs scrapcar-simple-btn" target="_blank"><i class="fa fa-whatsapp "></i> Send WhatsApp </a>
{/* <a href="https://api.whatsapp.com/send?phone=9710504474100&amp;text=I'm%20interested%20to%20sell%20my%20car" class="hidden-sm hidden-md hidden-lg scrapcar-simple-btn" target="_blank"><i class="fa fa-whatsapp"></i> Send WhatsApp </a> */}
</div>
</div>
</div>
</div>
       {/* Contact Why Choose Us */}
       <div class="scrapcar-main-content">

<div class="scrapcar-main-section">
<div class="container">
<div class="row">
<div class="col-md-12">
<div class="scrapcar-fancy-titlev2 left-align">
<h2>Why choose us</h2>
<p>Here at We Buy Cars, we like to keep things simple. If you are looking to sell your car quickly, without any hassle, then we can help. Simply enter your car details on our Sell My Car link and follow the steps to see what your car or van is worth in as little as 30 seconds!</p>
</div>
</div>
<div class="scrapcar-contact-wrap" >
<div class="row">
<div class="col-md-3">
<div class="scrapcar-contact-info">
<ul>
<li>
<div class="scrapcar-contact-info-text">
{/* <i class="automechanic-icon automechanic-technology-12"></i> */}
<i class="automechanic-icons flaticon-phone-call"></i>
<h5>Call Us Now At </h5>
<span><a href="tel:0504474100">050 447 4100</a></span>
</div>
</li>
<li>
<div class="scrapcar-contact-info-text">
{/* <i class="automechanic-icon automechanic-interface2"></i> */}
<i class="automechanic-icons flaticon-email"></i>
<h5>Mail Us At</h5>
<a href="mailto:info@webuycars.ae">info@webuycars.ae</a>
</div>
</li>
<li>
 <div class="scrapcar-contact-info-text">
<i class="automechanic-icons flaticon-pin"></i>

<h5>Find Us At</h5>
<span>Arabian Center Dubai</span>
</div>
</li>
</ul>
</div>
</div>
<div class="col-md-9">
<div class="scrapcar-contact-form contant-fff">
<form action="https://www.webuycars.ae/createContact" id="carContact" method="post">
<input type="hidden" name="_token" value="cWXzq3jgZ5baSpyHVjOhnkrGT4YCZLRrwHGp24HK"/>
<ul>
<li>
<label class="title">Your Name:</label>
<input type="text" value="Type Your Name" id="name" name="name" onblur="if (!window.__cfRLUnblockHandlers) return false; if(this.value == '') { this.value ='Type Your Name'; }" onfocus="if (!window.__cfRLUnblockHandlers) return false; if(this.value =='Type Your Name') { this.value = ''; }"/>
<i class="fa fa-user"></i>
</li>
<li>
<label class="title">Email:</label>
<input type="email" name="email" id="email" value="Type Your Email" onblur="if (!window.__cfRLUnblockHandlers) return false; if(this.value == '') { this.value ='Type Your Email'; }" onfocus="if (!window.__cfRLUnblockHandlers) return false; if(this.value =='Type Your Email') { this.value = ''; }"/>
<i class="fa fa-envelope"></i>
</li>
<li>
<label class="title">Phone No:</label>
<input class="form-control jelect-current" name="phone" id="phone" type="text" value="+971" data-initial="+971" pattern=".{13,13}" title="enter 13 digits" placeholder="Your Phone" required="" maxlength="13" onblur="if (!window.__cfRLUnblockHandlers) return false; if(this.value == '') { this.value ='Type Your Name'; }" onfocus="if (!window.__cfRLUnblockHandlers) return false; if(this.value =='Type Your Name') { this.value = ''; }"/>
<i class="fa fa-user"></i>
</li>
<li class="full-width">
<label class="title">Enter your queries:</label>
<textarea class="fullwi" placeholder="Type Your Message" id="message" name="message"></textarea>
<i class="fa fa-commenting"></i>
</li>
<li>
<label class="submit-btn submi-btn">
<input className="btnn" type="submit" value="Send Now" id="contact_btn"/> <i class="automechanic-icon flaticon-right-arrow"></i>
</label>
</li>
</ul>
</form>
</div>
</div>
</div>
</div>
</div>

</div>
</div>

</div>
       
        </div>
    )
}

export default index;
