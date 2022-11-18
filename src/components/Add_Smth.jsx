import React from "react";
import '../Index.css'

export default function Add_Smth(props) {
    return (
        <div className="button_div" style={{ MarginTop: "10px" }}>
            <img src="./add_FILL0_wght200_GRAD0_opsz48.svg" className="icon_menue red2_icon" />
            <span className="button_main_menue" style={{ opacity: "50%" }}>{props.text}</span>
        </div>
    )
}