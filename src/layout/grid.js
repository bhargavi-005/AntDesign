import React from 'react';
import 'antd/dist/reset.css';
import { Col, Row } from "antd";


function Grid(){
    return(
        <div>
        <Row>
      <Col span={2}>col</Col>
    </Row>
    <br></br>
    <Row>
      <Col span={12}>col-12</Col>
      <Col span={12}>col-12</Col>
    </Row>
    <br></br>
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
    </Row>
    <br></br>
    <br></br>
    <Row>
      <Col span={4}>col-6</Col>
      <Col span={4}>col-6</Col>
      <Col span={4}>col-6</Col>
      <Col span={4}>col-6</Col>
      <Col span={4}>col-6</Col>
      <Col span={4}>col-6</Col>
    </Row>
    </div>
    )
}
export default  Grid;