import React from 'react'

import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

import './index.less'

const Layout =()=>{
    return (
        <>
        <div>
            <Header/>
            <div className="middle">
                <Sidebar></Sidebar>
                <div className='content'>
                    内容
                </div>
            </div>
            <Footer/>
        </div>
        </>
    )
}

export default Layout