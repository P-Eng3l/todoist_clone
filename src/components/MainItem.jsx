import { React, useContext } from 'react';
import '../Index.css'
import { CategoryContext } from '../App'

export default function MainItem(props) {
    const { category, setCategory, data, setDat } = useContext(CategoryContext);

    const styles = {
        textDecoration: props.visible ? "none" : "line-through",
        color: props.visible ? "black" : "grey",
    }

    const changeTask_Vis = {
        display: props.change ? 'initial' : 'none'
    }

    const changeTask_Vis2 = {
        color: props.visible ? "black" : "grey",
    }

    return (

        <li>
            <div className="div_list_main">

                <span>
                    <button className="main_button" type="button" onClick={() => props.deleteTask(props.id)}>
                        <img src="./radio_button_unchecked_FILL0_wght200_GRAD0_opsz48.svg" className="icon_main_menue" id="first_task" />
                    </button>
                </span>

                <span style={styles} className="list_elem_text2">
                    <span className={props.change ? "list_elem_text3 hide" : "list_elem_text3"} style={changeTask_Vis2} onClick={() => props.changeVisTask(props.id)}>
                        {props.text}
                    </span>
                    <span>
                        <input type="text" name="changetask" placeholder={props.text} className="change_task_text" style={changeTask_Vis}
                            onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                    props.changeTask(e.target.value, props.id)
                                    e.target.value = ""
                                }
                            }}
                        />
                    </span>
                </span>

            </div>
        </li>

    )
}
