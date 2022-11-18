import React from "react";
import '../Index.css'

export default function Nav_Item_L3(props) {

    return (

        <div className="list_div" style={{ MarginTop: "10px" }}>
            <ul className="list_menue">
                <button className="small_icon_toggle">
                    <span><img src={props.img}
                        className="icon_list" id="arrow_list1" /></span>
                </button>
                <span><img src="./radio_button_unchecked_FILL1_wght400_GRAD0_opsz48.svg"
                    className="icon_list grey_icon" id="radio_list" /></span>
                <li>{props.text}</li>
            </ul>
        </div>
        
    )
}