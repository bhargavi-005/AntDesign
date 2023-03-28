import React from "react";
import { Button } from 'antd';
import 'antd/dist/reset.css';
function Buttons(){
    return(
        <div>
           

            <Button>click</Button>
            <br></br>
            <Button type='primary'
            onClick={buttonclick}
            >click</Button>
            <br></br>
            <Button type='default'>click</Button>
            <br></br>
            <Button type='dashed'>click</Button>
            <br></br>
            <Button type='text'>click</Button>
            <br></br>
    <Button type='link'>click</Button>
        </div>
    )
}
export default Buttons;