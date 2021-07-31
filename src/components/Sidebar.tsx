import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar ({
  links
}: {
  links: { path: string; name: string }[]
}): JSX.Element {
  return (
    <div className='md:h-2/4 flex flex-col place-content-evenly'>
      {links.map(({ path, name }, index) => (
        <Link
          key={index}
          className='underline text-center md:text-2xl'
          to={path}
        >
          {name}
        </Link>
      ))}
    </div>
  )
}

export default Sidebar