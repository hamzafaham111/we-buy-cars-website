import React from 'react';
import './style.css';

function Form() {
    return (
        <div>
            <div class="container">
<div class="row" style={{marginTop:"40px"}}>
<div class="col-md-12">
<div class="scrapcar-fancy-title">
<h2>Sell Your Car<small></small></h2>

</div>
<div class="scrapcar-services scrapcar-services-modern">
<div class="col-md-8 col-md-offset-2">
<div class="scrapcar-contact-form">
<form id="carSell" action="https://www.webuycars.ae/sellCar" method="post">
<input type="hidden" name="_token" value="sdw7I4SIMD18tMrOKQuByW8MisQ8ZJldWF2Bqfj2"/>
<h3 class="text-center">Enter Vehicle Info Below for Immediate Quote</h3>
<ul >
<li className="col-sm-12">
<label class="title">Name:</label>
<input type="text" value="" name="name" id="txtName" placeholder="Enter Your Name" class="form-control"/>
<i class="fa fa-user"></i>
</li>
<li>
<label class="title">Email:</label>
<input type="text" value="" name="email" id="txtEmail" placeholder="Enter Your Email" class="form-control"/>
<i class="fa fa-envelope"></i>
</li>
<li>
<label class="title">Phone No:</label>
<input class="form-control jelect-current" name="phone" id="txtPhone" type="text" value="+971" data-initial="+971" pattern=".{13,13}" title="enter 12 digits" placeholder="Your Phone" required="" maxlength="13"/>
<i class="fa fa-user"></i>
</li>
<li>
<label class="title">City:</label>
<div class="widget-location-select">
<select class="form-control input-lg" id="City" name="City" required="">
<option value="">City</option>
<option value="Dubai">Dubai</option>
<option value="Doha">Doha</option>
<option value="Sharjah">Sharjah</option>
<option value="Abu Dhabi">Abu Dhabi</option>
<option value="Fujaira">Fujaira</option>
<option value="Ral Al Khaimah">Ral Al Khaimah</option>
<option value="Umm Al Quwain">Umm Al Quwain</option>
<option value="UAE">UAE</option>
</select>
</div>
</li>
<li>
<label class="title">Maker:</label>
<div class="widget-location-select">
<select class="form-control input-lg" id="CarMaker" name="CarMaker" required="">
<option value="">Maker</option>
<option value="ACURA">ACURA</option>
 <option value="ALFA ROMEO">ALFA ROMEO</option>
<option value="ASTON MARTIN">ASTON MARTIN</option>
<option value="AUDI">AUDI</option>

</select>
</div>
</li>
<li>
<label class="title">Model:</label>
<div class="widget-location-select">
<select id="ddlModel" name="Model" class="form-control input-lg" required="">
<option value="">Model</option>
<option value="MDX">MDX</option>
<option value="TLX">TLX</option>
<option value="147">147</option>
<option value="158">158</option>
<option value="159">159</option>
<option value="166">166</option>
<option value="4C">4C</option>
<option value="BRERA">BRERA</option>
<option value="DB7">DB7</option>
<option value="DB9">DB9</option>
<option value="A1">A1</option>

</select>
</div>
 </li>
<li>
<label class="title">Car Condition:</label>
<div class="widget-location-select">
<select id="ddlCondition" name="CarCondition" class="form-control input-lg" required="">
<option value="">Car Condition</option>
<option value="Working">Working</option>
<option value="Scrap">Scrap</option>
<option value="Damaged">Damaged</option>
</select>
</div>
</li>
<li>
<label class="title">Choose Year:</label>
<div class="widget-location-select">
<select id="ddlYear" name="Year" class="form-control input-lg" required="">
<option value="">-- Choose Year --</option>
<option value="1984">1984</option>
<option value="1990">1990</option>
<option value="1992">1992</option>
<option value="1995">1995</option>
<option value="1996">1996</option>
<option value="1997">1997</option>
<option value="2017">2017</option>
<option value="2018">2018</option>
<option value="2019">2019</option>
<option value="2021">2021</option>
<option value="2022">2022</option>
</select>
</div>
</li>
<li>
<label class="title">Choose Color:</label>
<div class="widget-location-select">
<select id="ddlColor" name="Color" class="form-control input-lg" required="">
<option value="">-- Choose Color --</option>
<option value="Black">Black</option>
<option value="Blue">Blue</option>
<option value="Brown">Brown</option>
<option value="Gold">Gold</option>
<option value="Grey">Grey</option>
<option value="Green">Green</option>
<option value="Orange">Orange</option>
<option value="Purple">Purple</option>
<option value="Red">Red</option>
<option value="Silver">Silver</option>
<option value="Yellow">Yellow</option>
<option value="White">White</option>
</select>
</div>
</li>
<li>
<label class="title">Choose Milage:</label>
<div class="widget-location-select">
<select id="ddlMilage" name="Mileage" class="form-control input-lg" required="">
<option value="">Car Milage upto</option>
<option value="Upto 5,000 KM">Upto 5,000 KM</option>
<option value="Upto 10,000 KM">Upto 10,000 KM</option>
<option value="Upto 20,000 KM">Upto 20,000 KM</option>
<option value="Upto 30,000 KM">Upto 30,000 KM</option>
<option value="Upto 40,000 KM">Upto 40,000 KM</option>
<option value="Upto 60,000 KM">Upto 60,000 KM</option>
<option value="Upto 80,000 KM">Upto 80,000 KM</option>
<option value="Upto 100,000 KM">Upto 100,000 KM</option>
<option value="Upto 125,000 KM">Upto 125,000 KM</option>
<option value="Upto 150,000 KM">Upto 150,000 KM</option>
<option value="Upto 175,000 KM">Upto 175,000 KM</option>
<option value="Upto 200,000 KM">Upto 200,000 KM</option>
<option value="Upto 225,000 KM">Upto 225,000 KM</option>
<option value="Upto 250,000 KM">Upto 250,000 KM</option>
<option value="More than 250,000 KM">More than 250,000 KM</option>
<option value="Dont know , assume normal usage">Dont know , assume normal usage</option>
</select>
</div>
</li>
<li><label class="submit-btn"><input type="submit" value="Sell Now" id="sell_submit"/> <i class="automechanic-icon flaticon-right-arrow"></i></label></li>
</ul>
</form>
</div>
<br/>

</div>
</div>
<p class="para text-center"> َWe buy all types of working or non working scrap and damaged vehicles</p>
</div>
</div>
</div>

        </div>
    )
}

export default Form;
