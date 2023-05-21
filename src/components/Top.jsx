import React from 'react'

function Top(props) {
  return (
                <div className='header-top__content'>
                    <span className='header-span'>TODO</span>
                    <button className="header-moon_icon" onClick={props.onclick}>
                        <img src={props.image}  alt="..."/>
                    </button>
                </div>
  )
}

export default Top