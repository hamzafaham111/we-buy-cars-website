import React from 'react'
import Carousel from "react-elastic-carousel";
import Item from "./ReviewCarisolStyle";
import "./style.css";
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  
const ReviewCarisole = () => {
    return (
        <div style={{margin:"20px 0 70px 0"}}>
             <h1 style={{ textAlign: "center", fontWeight:"bold"}}>Our Valuable Customers Reviews</h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item>One</Item>
          <Item>Two</Item>
          <Item>Three</Item>
          <Item>Four</Item>
          <Item>Five</Item>
          <Item>Six</Item>
          <Item>Seven</Item>
          <Item>Eight</Item>
        </Carousel>
      </div>
        </div>
    )
}
export default ReviewCarisole;
