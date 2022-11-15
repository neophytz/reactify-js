import React from 'react'

import "./css/dashboard.css";
import {Content, Header, Sidebar} from './component';

export const Home = () => {

    const header_config = {
        title: "Reacti.fy",
        options: {
            notification: true,
            search: true,
            settings: true,
        }
    }

    return (
        <div className='dashboard'>
            <Header config={header_config}/>
            <Sidebar />
            <Content />
        </div>
    )
}
