import React, { useState } from 'react'
import { CalenderIcon, UsersIcon, ChevronLeftIcon, ChevronRightIcon, ReportIcon, HomeIcon  } from '../../util/component/icons';
import { RenderIf } from '../../util/component/renderIf';

export const Sidebar = (props) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  const navigation_list = [
    {active: false, title: "Dashboard", icon: <HomeIcon />, route: "/dashbaord"},
    {active: false, title: "Users", icon: <UsersIcon />, route: "/dashbaord"},
    {active: true, title: "Reports", icon: <ReportIcon />, route: "/dashbaord"},
    {active: false, title: "Calender", icon: <CalenderIcon />, route: "/dashbaord"},
  ];

  const sidebar_style  = {width: isSideBarOpen ? '250px' : '70px'};

  return (
    <div className='sidebar px-2 pt-5' style={sidebar_style}>
      {
        navigation_list.map((navObj, idx) => {
          return (
            <div key={idx} className={`w-100 rounded d-flex align-items-center py-2 px-3 text-dark mb-2 ${navObj.active ? 'bg-light' : ''} ${navObj.title === "Dashboard" ? 'bg-dark text-white' : ''}`}>
              <span style={{marginRight: 12}}>
                {navObj.icon}
              </span>
              <span className='fs-6 pt-1'>{isSideBarOpen ? navObj.title : ''}</span>
            </div>
          )
        })
      }

      <div className='sidebar_info d-flex alig-items-center justify-content-between bg-dark text-white rounded shadow' style={{width: isSideBarOpen ? '230px' : '50px'}}>
        <RenderIf condition={isSideBarOpen} component={
          <div className='d-flex align-items-center'>
            <img src="https://source.unsplash.com/random/50x50"  className='rounded-circle img-responsive sidebar_profile_image' alt="amazing" />
            <div>
              <p className='px-2 m-0'>Sachin duhan</p>
              <p className='fs-7 px-2 m-0'>view profile</p>
            </div>  
          </div>
        }/>

        <div className='p-2 pointer' onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
          {
            isSideBarOpen ?  <ChevronLeftIcon /> : <ChevronRightIcon />
          }
        </div>
      </div>
    </div>
  )
}
