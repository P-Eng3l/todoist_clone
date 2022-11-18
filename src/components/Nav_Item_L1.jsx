import { React, useContext } from 'react'
import '../Index.css'
import {CategoryContext} from '../App'

export default function Nav_Item_L1(props) {
    const {category, setCategory, data, setData} = useContext(CategoryContext);

    function handleClick() {        
        setCategory(props.text);
    }

    return (
        <button className="button_div" type="button" onClick={handleClick}>
            <img src={props.img} className="icon_menue" id={props.id} />
            <span className="button_main_menue">{props.text}</span>
            <span className="counter_menue">{props.counter}</span>
        </button>
    )
}