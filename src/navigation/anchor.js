import React from 'react';
import { Anchor,Row,Col } from 'antd';

function AnchorNavi(){
    return(
        <div>
        <Row>
        <Col span={15}>
        <div id="part-1" style={{ height: '100vh', background: 'rgba(255,0,0,0.02)' }}  ></div>
        <div id="part-2" style={{ height: '100vh', background: 'rgba(0,0,0,0)' }} ></div>
         </Col>
        
        <Col span={9}>
        <Anchor
        direction="horizontal"
        item={[
            {
                key: 'part-1',
                href: '#part-1',
                title: 'Part 1',
              },
              {
                key: 'part-2',
                href: '#part-2',
                title: 'Part 2',
              }
        ]}
        />
        </Col>
        </Row>
        </div>

    )
}
export default AnchorNavi;