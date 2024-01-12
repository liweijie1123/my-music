import React from 'react'

import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Navbar from './Navbar'
import Searcher from './Searcher'

import './index.less'


export default function Header() {
  return (
    <div className='Header_root'>
      <LeftOutlined className='outLine'/>
      <RightOutlined className='outLine'/>
      <Navbar />
      <Searcher />
    </div>
  )
}

