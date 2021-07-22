import React from 'react'

function Header ({ children }): JSX.Element {
  return (
    <h1 className='font-extrabold text-5xl my-8 subpixel-antialiased'>
      {children}
    </h1>
  )
}

export default Header
