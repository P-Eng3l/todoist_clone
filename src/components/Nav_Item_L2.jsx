import React from "react";
import '../Index.css'

export default function Nav_Item_L2(props) {

    return (

        <div className="button_div" style={{ MarginTop: "10px" }}>
            <button className="main_icon_toggle" >
                <img src={props.img} id="icon_toggle" />
            </button>
            <span className="button_main_toggle">{props.text}</span>
        </div>
        
    )
}