import React, { useState,useEffect,useRef } from "react";
import "./style.css";
import images from "../assets/images/car_logo.png";
import { Collapse, Navbar, NavbarToggler, NavbarBrand } from "reactstrap";
import Header from "./upNavbar/index";
import { Link } from "react-router-dom";
import { ThreeSteps } from "../component/valution/slider/threeSteps/ThreeSteps";

const Navbars = (props) => {
  const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef()
    navRef.current = navBackground
    useEffect(() => {
      const handleScroll = () => {
        const show = window.scrollY > 100
        if (navRef.current !== show) {
          setNavBackground(show)
        }
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
        document.removeEventListener('scroll', handleScroll)
      }
    }, []);

    

  const [collapsed, setCollapsed] = useState(false);
 const toggleLink=()=>{
  setCollapsed(!collapsed);
 }
  const toggleNavbar = () => setCollapsed(!collapsed);
  console.log("colllapseddddd",collapsed);
  const Menuitem = [
    { cName: "navbar-linkss", url: "/valution", title: "valuation" },
    { cName: "navbar-linkss", url: "/sellmycar", title: "sell my car" },
    { cName: "navbar-linkss", url: "/sellanymake", title: "sell any make" },
    { cName: "navbar-linkss", url: "/mortagaged", title: "mortgaged" },
    { cName: "navbar-linkss", url: "/faqs", title: "faq's" },
    { cName: "navbar-linkss", url: "/aboutus", title: "about us" },
    { cName: "navbar-linkss", url: "/contactus", title: "contact us" },
  ];
  return (
    <>
      <Header />
  
      <Navbar  expand="md" className="stick-nav navbars scrool actives" style={{position:"fixed",zIndex:"999" ,top:navBackground?"-3px":"32px",left:"0", transition: '.5s ease',height: navBackground ? "80px" : '110px'}}>
        <div className="container">
          <NavbarBrand  href="/">
            <img className="navbar-brandss" src={images} alt="" />
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={collapsed} navbar>
            <div className="navbar-links text-center ml-auto ">
              <ul className="">
{
  Menuitem.map((item, index)=>{
    return(
    <li key={index}>
                  <Link className={item.cName} onClick={toggleLink} to={item.url}>
                  {item.title}
                  </Link>
                </li>)})}
              </ul>
            </div>
          </Collapse>
        </div>
      </Navbar>

    </>
  );
};
export default Navbars;
