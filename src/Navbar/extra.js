import React, { useState } from "react";
import "./style.css";
import images from "../../../assest/image/logo.png";
import { Collapse, Navbar, NavbarToggler, NavbarBrand } from "reactstrap";
import Header from "../upNavbar";
import { Link } from "react-router-dom";

const Navbars = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
 
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const Menuitem = [
    { cName: "navbar-linkss", url: "/", title: "Home" },
    { cName: "navbar-linkss", url: "/howitwork", title: "How it Works " },
    { cName: "navbar-linkss", url: "/ourmission", title: "ourmission" },
    { cName: "navbar-linkss", url: "/carmubaya", title: "carmubaya" },
    { cName: "navbar-linkss", url: "/faq", title: "  faq's" },
    { cName: "navbar-linkss", url: "/contactus", title: "contact us" },
    { cName: "navbar-linkss", url: "/aboutus", title: "about us" },
  ];
  return (
    <>
      <Header />
   
      <Navbar expand="lg" className="stick-nav navbars actives">
        <div className="container">
          <NavbarBrand href="#home">
            <img className="navbar-brandss" src={images} alt="" />
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <div className="navbar-links text-center ml-auto ">
              <ul className="">
{
  Menuitem.map((item, index)=>{
    return(
    <li key={index}>
                  <Link className={item.cName} to={item.url}>
                  {item.title}
                  </Link>
                </li>)
  })
}
              </ul>
            </div>
          </Collapse>
        </div>
      </Navbar>

    </>
  );
};
export default Navbars;
