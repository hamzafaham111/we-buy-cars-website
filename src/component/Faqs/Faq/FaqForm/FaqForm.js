import React from 'react';
import './style.css';
import ReadMore from '../ButtonRead/ReadMore';
import {Form, FormGroup, Label, Input } from 'reactstrap';

const FaqForm = (props) => {
  return (
<div className="Faqform">
    <Form>
    <div className="container-fluid fom-div">
    <div className="row">
    <div className="col-md-6 col-sm-12  col-12">
    <FormGroup>
        <Label for="examplename" className="label">Name</Label>
        <Input className="input-field" type="text" name="name" id="examplename"  />
      </FormGroup>
      </div>
      <div className="col-md-6 col-sm-12 col-12">
      <FormGroup>
        <Label for="phone" className="label">Phone Number</Label>
        <Input className="input-field" type="tel" id="phone" name="phone"  />
      </FormGroup>
      </div>
      <div className="col-md-6 col-sm-12 col-12">
      <FormGroup>
        <Label for="exampleEmail" className="label">Email</Label>
        <Input className="input-field" type="email" name="email"  autoComplete='off' />
      </FormGroup>
      </div>
      <div className="col-md-6 col-sm-12 col-12">
      <FormGroup>
        <Label for="examplename" className="label">Name</Label>
        <Input className="input-field" type="text" name="name" id="examplename"  />
      </FormGroup>
      </div>
    <div className="col-md-12">
      <FormGroup>
        <Label for="exampleText" className="label ">Description</Label>
        <Input className="description"  type="textarea" name="text" id="exampleText" />
      </FormGroup>
      </div>
      <div className="submitBlock">
      <ReadMore title="Submit" className="submit" />
      </div>
      </div>
 
    </div>
    </Form>
    </div>
    
  );
}

export default FaqForm;