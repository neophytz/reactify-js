import React from 'react'
import { RenderIf } from '../../util/component/renderIf';

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

const SettingsIcon = ({height= 20, width = 20}) => {
  return (
    <svg style={{height, width}}  stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
  )
}

const NotificationIcon = ({height = 25, width = 25}) => {
  return (
    <svg style={{height, width}} stroke="currentColor" fill="currentColor" strokeWidth="8" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M289.7 403c-6.1 0-11.4 4.2-12.7 10.2-1 4.5-2.7 8.2-5 10.9-1.3 1.5-5.1 5.9-16.1 5.9-11 0-14.8-4.5-16.1-5.9-2.3-2.7-4-6.4-5-10.9-1.3-6-6.6-10.2-12.7-10.2-8.4 0-14.5 7.8-12.7 15.9 5 22.3 21 37.1 46.5 37.1s41.5-14.7 46.5-37.1c1.8-8.1-4.4-15.9-12.7-15.9zM412 352.2c-15.4-20.3-45.7-32.2-45.7-123.1 0-93.3-41.2-125.8-79.6-139.8-3.6-.9-6.2-2.1-6.2-5.9v-2.9c0-13.3-10.8-24.6-24-24.6h-.6c-13.2 0-24 11.3-24 24.6v2.9c0 3.7-2.6 5-6.2 5.9-38.5 9.1-79.6 46.5-79.6 139.8 0 90.9-25.3 102.7-45.7 123.1-9.9 13.1-.5 31.8 15.9 31.8h280.1c16.1 0 25.4-18.8 15.6-31.8zm-39 5.8H139.8c-3.8 0-5.8-4.4-3.3-7.3 7-8 14.7-18.5 21-33.4 9.6-22.6 14.3-51.5 14.3-88.2 0-37.3 7-66.5 20.9-86.8 12.4-18.2 27.9-25.1 38.7-27.6 8.4-2 14.4-5.8 18.6-10.5 3.2-3.6 8.7-3.8 11.9-.2 5.1 5.7 12 9.1 18.8 10.7 10.8 2.5 26.3 9.4 38.7 27.6 13.9 20.3 20.9 49.5 20.9 86.8 0 36.7 4.7 65.6 14.3 88.2 6.5 15.2 14.4 25.9 21.5 33.9 2.2 2.7.4 6.8-3.1 6.8z"></path></svg>
  )
}

const ProfileIcon = ({height = 23, width = 23}) => {
  return (
    <svg style={{height, width}} stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z" fill="currentColor"></path></svg>
  )
}