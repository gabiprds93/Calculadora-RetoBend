import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Grid, Row, Col, Button, FormControl} from 'react-bootstrap';
import {connect} from "redux-zero/react";
import {show, calculate, clean} from "./actions";

const App = ({operation, register}) =>{
    return (
      <Grid>
        <Row className="show-grid text-center">
          <Col xsOffset={3} xs={6} mdOffset={3} md={6}>
            <Row className="show-grid">
              <Col xsOffset={0} xs={12} mdOffset={0} md={12}>
              <FormControl componentClass="textarea" value={register}/>
              </Col>
            </Row>
            <form>
              <Row className="show-grid text-center">
                <Col xsOffset={0} xs={12} mdOffset={0} md={12}> 
                <div className="total text-left">{operation}</div>
                  {/* <FormControl
                    type="text"
                    value={operation}
                    placeholder="0"
                  /> */}
                </Col>              
              </Row>              
              <Row className="show-grid">
                <Col xsOffset={0} xs={3} mdOffset={0} md={3}>
                  <Button onClick={e => show(e.target.textContent)}>7</Button>
                </Col>
                <Col xsOffset={0} xs={3} mdOffset={0} md={3}>
                  <Button onClick={e => show(e.target.textContent)}>8</Button>
                </Col>
                <Col xsOffset={0} xs={3} mdOffset={0} md={3}>
                  <Button onClick={e => show(e.target.textContent)}>9</Button>
                </Col>
                <Col xsOffset={0} xs={3} mdOffset={0} md={3}>
                  <Button onClick={e => clean()}>back</Button>
                </Col>
              </Row>
              <Row className="show-grid">
                <Col xsOffset={0} xs={3} mdOffset={0} md={3}>
                  <Button onClick={e => show(e.target.textContent)}>4</Button>
                </Col>
                <Col xsOffset={0} xs={3} mdOffset={0} md={3}>
                  <Button onClick={e => show(e.target.textContent)}>5</Button>
                </Col>
                <Col xsOffset={0} xs={3} mdOffset={0} md={3}>
                  <Button onClick={e => show(e.target.textContent)}>6</Button>
                </Col>
                <Col xsOffset={0} xs={3} mdOffset={0} md={3}>
                  <Button onClick={e => show(e.target.textContent)}>+</Button>
                </Col>
              </Row>
              <Row className="show-grid">
                <Col xsOffset={0} xs={3} mdOffset={0} md={3}>
                  <Button onClick={e => show(e.target.textContent)}>1</Button>
                </Col>
                <Col xsOffset={0} xs={3} mdOffset={0} md={3}>
                  <Button onClick={e => show(e.target.textContent)}>2</Button>
                </Col>
                <Col xsOffset={0} xs={3} mdOffset={0} md={3}>
                  <Button onClick={e => show(e.target.textContent)}>3</Button>
                </Col>
                <Col xsOffset={0} xs={3} mdOffset={0} md={3}>
                  <Button onClick={e => show(e.target.textContent)}>-</Button>
                </Col>
              </Row>
              <Row className="show-grid">
                <Col xsOffset={0} xs={3} mdOffset={0} md={3}>
                  <Button onClick={e => show(e.target.textContent)}>0</Button>
                </Col>
                <Col xsOffset={0} xs={3} mdOffset={0} md={3}>
                  <Button onClick={() => calculate()}>=</Button>
                </Col>
                <Col xsOffset={0} xs={3} mdOffset={0} md={3}>
                  <Button onClick={e => show(e.target.textContent)}>/</Button>
                </Col>
                <Col xsOffset={0} xs={3} mdOffset={0} md={3}>
                  <Button onClick={e => show(e.target.textContent)}>*</Button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Grid>
    );
}

const mapToProps = ({operation, register}) => ({operation, register});

export default connect(mapToProps)(App);