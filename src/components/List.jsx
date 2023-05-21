import React from "react"

function List({listItem, checkChange, buttonClass, listClass}) {

  return (
    <div className="list-div">
        <ul className="list">
            {listItem.map((item) => (
              <div className="list-item">
                <button className={buttonClass} onClick={checkChange}><img className="check-img" src="/images/icon-check.svg" alt="" /></button>
                <li className={listClass} key={item.index}>{ item.texto }</li>
              </div>
           ))}
        </ul>
    </div>
  )
}

export default List