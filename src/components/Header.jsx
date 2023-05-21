import React, { useState } from 'react'
import Input from './Input';
import CreatedBy from './CreatedBy';
import Top from './Top';
import List from './List';



function Header(props) {
    
    const [listItemText, setListItemText] = useState("")
    const [listItem, setListItem] = useState([]);
    const [itemCheck, setItemCheck] = useState(false);
    const [buttonClass, setButtonClass] = useState("checklist-div");
    const [listClass, setListClass] = useState("list-text");

    const inputChange = (e) => {
        setListItemText(e.target.value)
    }

    const addItem = (e) =>{
        e.preventDefault();
        const newItem = {texto: listItemText, position: listItem.length + 1, state: itemCheck}; 
        setListItem([...listItem, newItem]);
        e.target.reset();
    }

    const checkChange = (e) =>{
        setItemCheck( prevState => prevState == false ? true : false )
        if (itemCheck == true) {
            setButtonClass("checklist-div-checked");
            setListClass("list-text-checked")
        }   else {
            setButtonClass("checklist-div");
            setListClass("")
    };
        
    }

  return (
    <>
    <div className="header-div">
        <div className= {(props.theme == "moon") ? "header-content moon-theme" : "header-content"}>
            <img src={`/images/bg-desktop-${props.theme}.jpg`} className="header-image" alt="..."/>
            <div className='header-content__items'>
                <Top image={`/images/icon-${(props.theme == "moon") ? "sun" : "moon"}.svg`} onclick={() => props.setTheme((props.theme == "moon") ? "sun" : "moon")}/>
                <Input addItem={addItem} inputChange={inputChange}/>
                <List listItem={listItem} itemCheck={itemCheck} checkChange={checkChange} buttonClass={buttonClass} listClass={listClass}/>
                <CreatedBy/> 
            </div>
            
        </div>
    </div>
    </>

  )
}

export default Header;