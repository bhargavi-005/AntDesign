import React from 'react';
import { Dropdown ,Space} from 'antd';

const items = [
    {
      key: '1',
      label: (
        <a >
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a>
          2nd menu item (disabled)
        </a>
      ),
    //   icon: <SmileOutlined />,
    //   disabled: true,
    }]

function DropdownNavi() {
    return(
        <div>
        <Dropdown
    menu={{
      items,
     
    }}
  >
    <a>
      <Space>
        click
      </Space>
    </a>
  </Dropdown>


        </div>
    )
}
export default DropdownNavi;