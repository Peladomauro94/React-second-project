import React, { useState } from 'react'
import Input from './Input';
import CreatedBy from './CreatedBy';
import Top from './Top';
import List from './List';



function Header() {
    
    const [listItemText, setListItemText] = useState("")
    const [listItem, setListItem] = useState([]);
    const [itemLeft, setItemLeft] = useState(0);
    const [filter, setFilter] = useState("all");
    const [theme, setTheme] = useState('moon');


    const inputChange = (e) => {
            setListItemText(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1));
    }

    const addItem = (e) =>{
        e.preventDefault();
        const newItem = {texto: listItemText, position: listItem.length + 1, state: false}; 
        if (listItemText !== "") {
            setListItem([...listItem, newItem]);
            e.target.reset();
            setListItemText("");
        }

    }

    const checkChange = (index) =>{
        const change = [...listItem];
        change[index].state = !change[index].state;
        setListItem(change);
        
    }

    const clearItem = (index) =>{
        const clear = listItem.filter((_, item) => item !==index);
        setListItem(clear);
     
    }

    const filterCompleted = () => {
        const completedTasks = listItem.filter((item)=>{return(item.state == false)});
        setItemLeft(completedTasks.length);
    }

    const clearCompleted = () => {
        const completedItems = listItem.filter((item)=>{return(item.state == false)});
        setListItem(completedItems);
    }

    
    const handleButtonClick = () => {
    const newTheme = theme === 'sun' ? 'moon' : 'sun';
    setTheme(newTheme);
    if (newTheme == 'sun') {
      document.body.classList.remove('sun');
      document.body.classList.add('moon');
    }else{
      document.body.classList.remove('moon');
      document.body.classList.add('sun');
    };}

    React.useEffect(() => {
        filterCompleted();
      }, [listItem]);

    

  return (
    <>
    <div className="header-div">
        <div className= "header-image-background">
            <img src={`/images/bg-desktop-${theme}.jpg`} className="header-image" alt="..."/>
            <div className='header-content__items'>
                <Top image={`/images/icon-${(theme == "moon") ? "moon" : "sun"}.svg`} onclick={handleButtonClick}/>
                <Input addItem={addItem} inputChange={inputChange}/>
                <List listItem={listItem} setTheme={setTheme} filterTask={filter} checkChange={checkChange} setFilter={setFilter} itemLeft={itemLeft} clearCompleted={clearCompleted} clearItem={clearItem} />
                <CreatedBy/> 
            </div>
            
        </div>
    </div>
    </>

  )
}

export default Header;