import React from 'react'

export const Analytics = () => {
  return (
    <div className='p-2'>
        <h5>Type of communication / data flow </h5>
        <ol className='text-muted'>
          <li>parent to child communication</li>
          <li>child to parent communication</li>
          <li>sibbling to sibbling communication</li>
        </ol>
    </div>
  )
}
