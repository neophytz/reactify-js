import React from 'react'

// HOC - higher order components
export const RenderIf = ({component, condition}) => {
  return (
    <>
        {
            (!!condition) ? component : null
        }
    </>
  )
}
