import React from 'react';
import { Col, Row } from 'antd';
import RightContent from './RightContent';
import LeftContent from './LeftContent';
import MidContent from './MidConten';

const Contents: React.FC = () => (
    <Row style={{ marginTop: 300, textAlign: "center", background: "#FFF" }}>
        <Col  style={{ marginTop: 20 }} span={5}><LeftContent /></Col>
        <Col  style={{ marginTop: 30 }} span={11}><MidContent /></Col>
        <Col style={{ marginTop: 10 }} span={8}><RightContent /></Col>
    </Row>
);

export default Contents;