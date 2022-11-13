import React from 'react'

export const Sidebar = (props) => {
  const {navigation_list} = props;

  return (
    <div className='sidebar px-2 pt-5'>
      {
        navigation_list.map((navObj, idx) => {
          return (
            <div key={idx} className='w-100 rounded py-2 px-3 bg-white text-dark mb-2'>
              <span className='fs-6'>{navObj.title}</span>
            </div>
          )
        })
      }
    </div>
  )
}
