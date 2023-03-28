import React,{useState} from 'react';
import { Button,Slider,Space } from 'antd';

function SpaceLayout(){
    const [size, setSize] = useState(12);
  
    return (
      <div>
        <Slider value={size} onChange={(value) => setSize(value)} />
        <br />
        <Slider></Slider>
        <br />
        <Space size={size}>
          <Button>Primary</Button>
          <Button>Default</Button>
          <Button>Dashed</Button>
          <Button>Link</Button>
        </Space>
        <br></br>
        <br></br>

        <Space direction="vertical">
        <Button type="primary">Button 1</Button>
        <Button type="primary">Button 2</Button>
        <Button type="primary">Button 3</Button>
      </Space>
      <br></br>
      <br></br>
      <Space.Compact direction="vertical">
      <Button type="primary">Button 1</Button>
      <Button type="primary">Button 2</Button>
      <Button type="primary">Button 3</Button>
    </Space.Compact>
        </div>
    
    );
  };
  
  export default SpaceLayout;