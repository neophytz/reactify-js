import React, { useState } from 'react'

import "./css/dashboard.css";
import {Content, Header, Sidebar, SettingsDrawer} from './component';

export const Dashboard = () => {
    const [showSettingsPanel, setshowSettingsPanel] = useState(false)

    const header_config = {
        title: "Reacti.fy",
        options: {
            notification: true,
            search: true,
            settings: true,
        },
        openSettingsPanel: (value) => {
            setshowSettingsPanel(!!value)
        }
    }

    return (
        <div className='dashboard'>
            {/* this is child component */}
            <Header config={header_config}/> 
            <Sidebar />
            <Content />
            <SettingsDrawer togglePanel={() => setshowSettingsPanel(false)} showPanel={showSettingsPanel} />
        </div>
    )
}
