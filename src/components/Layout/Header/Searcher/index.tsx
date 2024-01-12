import React from 'react'
import { MonitorOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import './index.less'


export default function Navbar() {
  return (
    <div className='SearcherRoot'>
      <Input placeholder="搜索" prefix={<MonitorOutlined />} />
    </div>
  )
}
