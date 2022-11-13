import React from 'react'

import "./css/dashboard.css";
import {Content, Header, Sidebar} from './component';

export const Home = () => {
    const sidebar_navigation_list = [
        {title: "Dashboard", icon: "home", route: "/dashbaord"},
        {title: "Users", icon: "home", route: "/dashbaord"},
        {title: "Teachers", icon: "home", route: "/dashbaord"},
        {title: "Admin", icon: "home", route: "/dashbaord"},
        {title: "Analytics", icon: "home", route: "/dashbaord"},
    ]

    const header_config = {
        title: "Dashboard",
        options: {
            notification: true,
            search: true,
            settings: true,
        }
    }

    return (
        <div className='dashboard'>
            <Header config={header_config}/>
            <Sidebar navigation_list={sidebar_navigation_list} />
            <Content />
        </div>
    )
}
