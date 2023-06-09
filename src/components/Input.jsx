import React from 'react'



function Input({addItem, inputChange,}) {
  return (
    <div className='header-input-div'>
        <form action="" onSubmit={addItem} >
          <input type="text" className='header-input' name="item" onChange={inputChange} placeholder='Create a new todo...'/>
          <button className='header-input-button' type='submit'>
            <span class="add-icon">+</span>
          </button>
        </form>
    </div>
  )
}

export default Input