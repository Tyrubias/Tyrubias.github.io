import React from 'react'
import { Link } from 'react-router-dom'

function Top (): JSX.Element {
  return (
    <div className='flex flex-col items-center'>
      <div id='name'>Victor Song</div>
      <div id='menu' className='w-9/12'>
        <ul className='flex flex-row list-none justify-around'>
          <li>
            <Link to='/experience'>Experience</Link>
          </li>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
          <li>
            <Link to='/education'>Education</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Top
