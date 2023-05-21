import React from 'react'
import { Link } from 'react-router-dom'

function CreatedBy() {
  return (
    <div className='header-created-by-div'>
        <span>Full Stack Developer Bootcamp</span>
        <span>Caded by <Link className='header-created-by-link'>Angatupyry</Link></span>
    </div>
  )
}

export default CreatedBy