import React, { Component } from "react";
import './style.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Fade extends Component {
  render() {
    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      arrows: false,
      // cssEase: 'linear',
      speed: 8000,
      initialSlide: 1,
      draggable: false,
    };
    return (
      <div>

        <Slider {...settings}>
          <div className="w-100">
          <div class="scrapcar-banner-layer slick-slide" data-slick-index="1" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide01" >
<div class="scrapcar-banner-tr">
<span class="scrapcar-banner-transparent"></span>
<span class="scrapcar-banner-image"></span>
</div>
<div class="scrapcar-banner-caption ">
<div class="container">
<div class="row">
<div class="col-md-12">
<div class="scrapcar-banner-text">
<b  class="title-slider">Sell Your Car Fast, Safe &amp; Easy</b>
<p>We buy any car in any condition regardless of age model or make
Sell any car now
Instant Cash Payment
Fast process at your door step</p>
<a href="https://www.webuycars.ae/sell-my-car" class="scrapcar-simple-btn" tabindex="0"><i class="fa fa-car"></i>Sell My Car</a>
<a href="#" class="scrapcar-simple-btn" tabindex="0"><i class="fa fa-whatsapp"></i>Send Whatsapp</a>

</div>
</div>
</div>
</div>
</div>
</div>
          </div>
          <div>
          <div class="scrapcar-banner-layer slick-slide" data-slick-index="1" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide01" >
<div class="scrapcar-banner-tr">
<span class="scrapcar-banner-transparent"></span>
<span class="scrapcar-banner-images"></span>
</div>
<div class="scrapcar-banner-caption ">
<div class="container">
<div class="row">
<div class="col-md-12">
<div class="scrapcar-banner-text">
<b class="title-slider">Free Instant Car Valuation | Free Used Car Valuation – We Buy Cars</b>
<p>With our free instant used car valuation, you can be sure that the deal you get when reselling is going to be the best one!</p>

<a href="https://www.webuycars.ae/sell-my-car" class="scrapcar-simple-btn" tabindex="0"><i class="fa fa-car"></i>Sell My Car</a>
<a href="#" class="scrapcar-simple-btn" tabindex="0"><i class="fa fa-whatsapp"></i>Send Whatsapp</a>
</div>
</div>
</div>
</div>
</div>
</div>
          </div>
        
        </Slider>
      </div>
    );
  }
}
