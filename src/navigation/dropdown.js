import React from 'react';
import { Dropdown ,Button} from 'antd';

const items=[{key:1,lable:(<a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
1st menu item
</a>)},{key:2,value:(<a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
2st menu item
</a>)} ]

function DropdownNavi() {
    return(
        <div>
        <Dropdown
        menu={{
          items,
        }}
       
      >
        <Button>bottom</Button>
      </Dropdown>  


        </div>
    )
}
export default DropdownNavi;