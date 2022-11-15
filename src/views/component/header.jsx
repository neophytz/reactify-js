import React from 'react'
import { RenderIf } from '../../util/component/renderIf';
import { NotificationIcon, ProfileIcon, SettingsIcon } from '../../util/component/icons';

export const Header = (props) => {
  const {config} = props;

  return (
    <div className='header d-flex align-items-center justify-content-between'>
      <h6>{config.title}</h6>
      <div className='d-flex p-3 justify-content-around mx-4'>
        {
          (!!config.options.search) ? 
            <input type="text" className='header_search_input py-1 px-3 rounded-pill text-muted fs-7 border-0 mx-2' placeholder='Search...' />
          : null
        }

        {
          (!!config.options.notification) &&
          <button className='btn'>
            <NotificationIcon />
          </button>
        }

        <RenderIf condition={config.options.settings} component={
          <button className='btn'>
            <SettingsIcon />
          </button>
        }/>

        <button className='btn'>
          <ProfileIcon />
        </button>

      </div>
    </div>
  )
}
