import React from "react";
import "./style.css";
import img from "../../assets/img/icon1.png";
import Breadcrumb from '../breadCrumb';
// import imga from '';
function index() {
  return (
    <div>
     <div className="bread-curamb">
        <Breadcrumb title="Sell Any Make"/>
        </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12 sell_padding">
            <h2 class="text-center s">Sell Any Make</h2>
            <p>
              At webuycars, we provide a service that allows our customers to
              sell any brand of car, conveniently and quickly. Our FREE online
              valuation tool can return a valuation for any car registered in
              the UAE in a matter of seconds, regardless of make, model or
              condition.
            </p>
            <p>
              Below you can see our list of most commonly purchased cars.
              Ranging from high-end executive models to everyday family cars,
              the huge selection of cars we buy from customers on a daily basis
              really do come in all shapes and sizes!
            </p>
            <p>
              For more information on selling a particular make of car, you can
              click the matching link below, although the process is always as
              simple as entering your reg number and receiving your valuation!
            </p>
            <p>
              For your instant and FREE valuation,{" "}
              <a
                href="https://www.webuycars.ae/valuation"
                class="btn theme-btn"
              >
                <b>sell your car</b>
              </a>{" "}
              the quick and easy way!
            </p>
            <p className="text-center">
              <a
                href="https://web.whatsapp.com/send?phone=+9710504474100&amp;text=I'm%20interested%20to%20sell%20my%20car"
                target="_blank"
                class="hidden-xs m-auto"
              >
                <img src={img} width="70px" /> <b>Send WhatsApp</b>
              </a>
              {/* <a href="https://api.whatsapp.com/send?phone=+9710504474100&amp;text=I'm%20interested%20to%20sell%20my%20car" target="_blank" class="hidden-sm hidden-md hidden-lg"><img src={require("../..assets/img/icon1.png"/> <b>Send WhatsApp</b></a> */}
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 sell_padding">
            <h2 class="text-center s">All Makes</h2>
          </div>
        </div>
      </div>

      {/* next icon */}
      <div class="container">
        <div class="col-md-12" id="slider-thumbs">
          <div class="content_section">
            <div class="row car_logos">
              <p class="letters">A - F</p>
            </div>
            <div class="row">
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Acura"
                    src={require("../../assets/img/Acura.png")}
                  />
                  Acura
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Alfa Romeo"
                    src={require("../../assets/img/alfa-romeo.jpg")}
                  />
                  Alfa Romeo
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Aston Martin"
                    src={require("../../assets/img/aston-martin.jpg")}
                  />
                  Aston Martin
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Audi"
                    src={require("../../assets/img/audi.jpg")}
                  />
                  Audi
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="baic"
                    src={require("../../assets/img/baic.jpg")}
                  />
                  Baic
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Bentley"
                    src={require("../../assets/img/bentley.jpg")}
                  />
                  Bentley
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="BMW"
                    src={require("../../assets/img/bmw.jpg")}
                  />
                  BMW
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="brilliance"
                    src={require("../../assets/img/brilliance.png")}
                  />
                  Brilliance
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="brilliance"
                    src={require("../../assets/img/Bugatti.png")}
                  />
                  Bugatti
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="BYD"
                    src={require("../../assets/img/byd.png")}
                  />
                  BYD
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Cadillac"
                    src={require("../../assets/img/cadillac.jpg")}
                  />
                  Cadillac
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="changan"
                    src={require("../../assets/img/changan.png")}
                  />
                  changan
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="chery"
                    src={require("../../assets/img/chery.png")}
                  />
                  chery
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Chevrolet"
                    src={require("../../assets/img/chevrolet.jpg")}
                  />
                  Chevrolet
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Chrysler"
                    src={require("../../assets/img/chrysler.jpg")}
                  />
                  Chrysler
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Citroen"
                    src={require("../../assets/img/citroen.jpg")}
                  />
                  Citroen
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Ferrari"
                    src={require("../../assets/img/ferrari.jpg")}
                  />
                  Ferrari
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Fiat"
                    src={require("../../assets/img/fiat.jpg")}
                  />
                  Fiat
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Ford"
                    src={require("../../assets/img/ford.jpg")}
                  />
                  Ford
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Fisker"
                    src={require("../../assets/img/Fisker.png")}
                  />
                  Fisker
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="foton"
                    src={require("../../assets/img/foton.png")}
                  />
                  Foton
                </p>
              </div>
            </div>

            <div class="row car_logos">
              <p class="letters">H - L</p>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="gac"
                    src={require("../../assets/img/gac.png")}
                  />
                  GAC
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Geely"
                    src={require("../../assets/img/geely.png")}
                  />
                  Geely
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="GMC"
                    src={require("../../assets/img/gmc.png")}
                  />
                  GMC
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Greatwall"
                    src={require("../../assets/img/greatwall.png")}
                  />
                  GreatWall
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Haval"
                    src={require("../../assets/img/haval.png")}
                  />
                  Haval
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Honda"
                    src={require("../../assets/img/honda.jpg")}
                  />
                  Honda
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Hummer"
                    src={require("../../assets/img/hummer-new.jpg")}
                  />
                  Hummer
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Hyundai"
                    src={require("../../assets/img/hyundai.jpg")}
                  />
                  Hyundai
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Infiniti"
                    src={require("../../assets/img/Infiniti.png")}
                  />
                  Infiniti
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="International"
                    src={require("../../assets/img/International.png")}
                  />
                  International
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Isuzu"
                    src={require("../../assets/img/izuzu.jpg")}
                  />
                  Isuzu
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Jaguar"
                    src={require("../../assets/img/jaguar.jpg")}
                  />
                  Jaguar
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Jac"
                    src={require("../../assets/img/jac.png")}
                  />
                  Jac
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Kia"
                    src={require("../../assets/img/kia.jpg")}
                  />
                  Kia
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="kinglong"
                    src={require("../../assets/img/kinglong.png")}
                  />
                  kinglong
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="koenigsegg"
                    src={require("../../assets/img/koenigsegg.png")}
                  />
                  koenigsegg
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="KTM"
                    src={require("../../assets/img/KTM.png")}
                  />
                  KTM
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Lamborghini"
                    src={require("../../assets/img/lamborghini.jpg")}
                  />
                  Lamborghini
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Land Rover"
                    src={require("../../assets/img/landrover.jpg")}
                  />
                  Land Rover
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Lexus"
                    src={require("../../assets/img/lexus.jpg")}
                  />
                  Lexus
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="lincoln"
                    src={require("../../assets/img/lincoln.png")}
                  />
                  lincoln
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Lotus"
                    src={require("../../assets/img/lotus.jpg")}
                  />
                  Lotus
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Luxgen"
                    src={require("../../assets/img/Luxgen.png")}
                  />
                  Luxgen
                </p>
              </div>
            </div>
            <div class="row car_logos">
              <p class="letters">M - P</p>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Mahindra"
                    src={require("../../assets/img/Mahindra.png")}
                  />
                  Mahindra
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Maserati"
                    src={require("../../assets/img/maserati.jpg")}
                  />
                  Maserati
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Maybach"
                    src={require("../../assets/img/Maybach.png")}
                  />
                  Maybach
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Mazda"
                    src={require("../../assets/img/mazda.jpg")}
                  />
                  Mazda
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Mclaren"
                    src={require("../../assets/img/mclaren.jpg")}
                  />
                  Mclaren
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Mercedes-Benz"
                    src={require("../../assets/img/Mercedes-Benz.png")}
                  />
                  Mercedes-Benz
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Mercedes"
                    src={require("../../assets/img/mercedes.jpg")}
                  />
                  Mercedes
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="MG"
                    src={require("../../assets/img/mg.jpg")}
                  />
                  MG
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Mini"
                    src={require("../../assets/img/mini.jpg")}
                  />
                  Mini
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Mitsubishi"
                    src={require("../../assets/img/mitsubishi.jpg")}
                  />
                  Mitsubishi
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Nissan"
                    src={require("../../assets/img/nissan.jpg")}
                  />
                  Nissan
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Noble"
                    src={require("../../assets/img/Noble.png")}
                  />
                  Noble
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Opel"
                    src={require("../../assets/img/opel.jpg")}
                  />
                  Opel
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Pagani"
                    src={require("../../assets/img/Pagani.png")}
                  />
                  Pagani
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Peugeot"
                    src={require("../../assets/img/peugeot.jpg")}
                  />
                  Peugeot
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="PGO"
                    src={require("../../assets/img/PGO.png")}
                  />
                  PGO
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Porsche"
                    src={require("../../assets/img/porsche.jpg")}
                  />
                  Porsche
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Pontiac"
                    src={require("../../assets/img/Pontiac.png")}
                  />
                  Pontiac
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="proton"
                    src={require("../../assets/img/proton.png")}
                  />
                  proton
                </p>
              </div>
            </div>
            <div class="row car_logos">
              <p class="letters">R - T</p>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="RAM"
                    src={require("../../assets/img/RAM.png")}
                  />
                  RAM
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Renault"
                    src={require("../../assets/img/renault.jpg")}
                  />
                  Renault
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Rolls Royce"
                    src={require("../../assets/img/rolls-royce.jpg")}
                  />
                  Rolls Royce
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Rover"
                    src={require("../../assets/img/rover.jpg")}
                  />
                  Rover
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Saab"
                    src={require("../../assets/img/saab.jpg")}
                  />
                  Saab
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Seat"
                    src={require("../../assets/img/seat.jpg")}
                  />
                  Seat
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Skoda"
                    src={require("../../assets/img/skoda.jpg")}
                  />
                  Skoda
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="speranza"
                    src={require("../../assets/img/speranza.png")}
                  />
                  speranza
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="spyker"
                    src={require("../../assets/img/spyker.png")}
                  />
                  spyker
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                  <img
                    class="img-responsive imgsss"
                    alt="Ssang Yong"
                    src={require("../../assets/img/ssangyong.jpg")}
                  />
                  Ssang Yong
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6">
                <p className="text-center">
                
                    <img
                      class="img-responsive imgsss"
                      alt="Subaru"
                      src={require("../../assets/img/subaru.jpg")}
                    />
                    Subaru
               
                </p>
                
              </div>
            </div>
        
              <div class="row">
                <p class="letters">V - Z</p>
                <div class="col-md-2 col-sm-4 col-xs-6">
                  <p className="text-center">
                    <img
                      class="img-responsive imgsss"
                      alt="uaz"
                      src={require("../../assets/img/uaz.png")}
                    />
                    UAZ
                  </p>
                </div>
                <div class="col-md-2 col-sm-4 col-xs-6">
                  <p className="text-center">
                    <img
                      class="img-responsive imgsss"
                      alt="Volkswagen"
                      src={require("../../assets/img/volkswagen.jpg")}
                    />
                    Volkswagen
                  </p>
                </div>
                <div class="col-md-2 col-sm-4 col-xs-6">
                  <p className="text-center">
                    <img
                      class="img-responsive imgsss"
                      alt="Volvo"
                      src={require("../../assets/img/volvo.jpg")}
                    />
                    Volvo
                  </p>
                </div>
                <div class="col-md-2 col-sm-4 col-xs-6">
                  <p className="text-center">
                    <img
                      class="img-responsive imgsss"
                      alt="Wiesmann"
                      src={require("../../assets/img/Wiesmann.png")}
                    />
                    Wiesmann
                  </p>
                </div>
                <div class="col-md-2 col-sm-4 col-xs-6">
                  <p className="text-center">
                    <img
                      class="img-responsive imgsss"
                      alt="zna"
                      src={require("../../assets/img/zna.png")}
                    />
                    zna
                  </p>
                </div>
              </div>
           
          </div>
        
        </div>
        
      </div>
    </div>
  );
}

export default index;
