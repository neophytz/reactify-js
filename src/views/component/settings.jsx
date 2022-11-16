import React from 'react'
import './css/settings.css'

import {CloseIcon} from '../../util/component/icons';

export const SettingsDrawer = (props) => {
    const {togglePanel, showPanel = false} = props;

    return (
        <div className='overlay' onClick={() => togglePanel()} style={{display: showPanel ? 'block' : 'none'}}>
            <div className='panel' onClick={e => e.stopPropagation()}>
                <div className='d-flex p-4 align-items-center justify-content-between'>
                    <h6 className='text-dark m-0'>Settings</h6>
                    <button className='btn' onClick={() => togglePanel()}>
                        <CloseIcon />
                    </button>
                </div>
            </div>
        </div>
    )
}
