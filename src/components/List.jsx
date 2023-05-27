import React, { useEffect, useState } from "react"

function List({listItem, checkChange, itemLeft, setFilter, clearCompleted, filterTask, clearItem}) {

  
  const filtro = { 
    all: () => true,
    active: (item) => !item.state,
    completed: (item) => item.state,
  }



  return (
    <div className="list-div">
        <ul className="list">
            {listItem && listItem.filter(filtro[filterTask]).map((item, index) => (
              <div key={index} className="list-item">
                <button className={item.state ? "checklist-div-checked" :  "checklist-div"} onClick={() => checkChange(index)}><img className="check-img" src={item.state ? "/images/icon-check.svg" :  ""} alt="" /></button>
                <li className={item.state ? "list-text-checked" : ""} key={item.index}>{ item.texto }</li>
                <button className="list-item-button_delete" onClick={() => clearItem(index)}>X</button>
              </div>
           ))}
           
            
              <div className="list-filters">
                <li className="list-filters-item__left">{itemLeft} items left</li>
                <div className="list-filters-center__buttons">
                    <button className="list-filters__button" onClick={() => setFilter("active")}>All active</button>
                    <button className="list-filters__button" onClick={() => setFilter("completed")}>Completed</button>
                </div>
                    <button className="list-filters__button" onClick={() => setFilter("all")}>All items</button>
              </div>
              
        </ul>
        <div className="list-filters-clear_completed_div">
          <button className="list-filters__button clear-completed" onClick={clearCompleted}>Clear completed</button>
        </div>
        
    </div>
  )
}

export default List