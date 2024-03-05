import React from 'react'
import { Link } from 'react-router-dom'

const edit_departments = () => {
  return (
    <button className='px-8 py-2 border-2 border-sky-500 text-sky-500 rounded-lg transition-all hover:border-sky-800 hover:text-sky-800'>
        <Link to='/Departments'> Edit Departments </Link>
    </button>
  )
}

export default edit_departments