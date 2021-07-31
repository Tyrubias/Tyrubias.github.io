import React from 'react'
import Sidebar from './Sidebar'

function Layout ({
  left,
  center
}: {
  left: JSX.Element
  center: JSX.Element
}): JSX.Element {
  return (
    <div className='md:grid grid-cols-page gap-x-8 grid-rows-none items-center justify-between h-screen'>
      {left}
      <div>{center}</div>
      {window.innerWidth > 768 && (
        <Sidebar
          links={[
            { path: 'experience', name: 'Experience' },
            { path: 'projects', name: 'Projects' },
            { path: 'education', name: 'Education' }
          ]}
        />
      )}
    </div>
  )
}

export default Layout
