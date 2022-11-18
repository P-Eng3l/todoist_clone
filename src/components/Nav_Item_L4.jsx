import React from "react";
import '../Index.css'

export default function Nav_Item_L4(props) {

    return (

        <li>
            <div className="list_div_small" style={{ MarginTop: "10px" }}>
                <ul className="list_menue">
                    <span>
                        <img src={props.img}
                            className={props.class} id={props.id}
                            style={{ MarginRight: "8px", MarginLeft: "2px" }} />
                    </span>
                    <li>{props.text}<span className="counter_menue_2">{props.counter}</span></li>
                </ul>
            </div>
        </li>
        
    )
}