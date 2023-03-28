import React from 'react';
import AnchorNavi from './anchor';
import { Breadcrumb } from 'antd';


function BreadcrumNavi(){
    return(
        <div>
        <Breadcrumb
    items={[
      {
        title: 'Home',
      },
      {
        title: <a href="/navigation/anchor">Application Center</a>,
      },
      {
        title: <a href="">Application List</a>,
      },
      {
        title: 'An Application',
      },
    ]}
    />
        </div>
    
    )
    
}
export default BreadcrumNavi