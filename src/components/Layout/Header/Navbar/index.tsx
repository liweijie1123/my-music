import React from 'react'

import './index.less'

const NAVBAR  =[
  {
    label: '个性推荐',
    route: '',
  },
  {
    label: '每日歌曲推荐',
    route: '',
  },
  {
    label: '歌单',
    route: '',
  },
  {
    label: '排行榜',
    route: '',
  },
  {
    label: '歌手',
    route: '',
  },
  {
    label: '最新音乐',
    route: '',
  },
]

export default function Navbar() {
  const item  = NAVBAR
  return (
    <div className='root'>
      {
        item.map((item)=>{
          return (
            <div className="item" key={item.label}>
              {item.label}
            </div>
          )
        })
      }
    </div>
  )
}
