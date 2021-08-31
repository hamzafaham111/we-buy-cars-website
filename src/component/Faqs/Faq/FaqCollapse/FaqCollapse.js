import React, { useState,useEffect} from 'react';
import './style.css';

import { Collapse, CardBody, Card } from 'reactstrap';

const FaqCollapse = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    if(props.index ===0){
      toggle()
    }
 
  }, props.index)
  console.log(props);
  return (
  <>
  

  <div className='container-fluid mb-3 '>
  <div className='faq-question'  onClick={toggle} > {isOpen ?( <span className={props.minusicon}></span> ):( <span className={props.plusicon}></span>)}{props.title}</div>
      <Collapse isOpen={isOpen}>
        <Card className="mar ">
          <CardBody className='faq-answer'>
          <div class="decor-1"></div>{props.text}
          </CardBody>
        </Card>
      </Collapse>
      </div>
        </>
    )
}
export default FaqCollapse;