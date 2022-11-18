import { React, useContext } from 'react'
import '../Index.css'
import Nav_Item_L1 from './Nav_Item_L1'
import Nav_Item_L2 from './Nav_Item_L2'
import Nav_Item_L3 from './Nav_Item_L3'
import Nav_Item_L4 from './Nav_Item_L4'
import Add_Smth from "./Add_Smth";
import { CategoryContext } from '../App'

export default function Nav() {

    const {category, setCategory, data, setData, toggle, setToggle} = useContext(CategoryContext);
    
    let counterInbox = data.filter(d => {
        return (d.category === "Inbox" && d.visible === true)
    });

    let counterToday = data.filter(d => {
        return (d.category === "Today" && d.visible === true)
    });

    let counterUpcoming = data.filter(d => {
        return (d.category === "Upcoming" && d.visible === true)
    });

    const style_nav = {
        display: toggle? 'initial' : 'none'
    }

    return (

            <section className="menue" title="Side Bar" style={style_nav}>

                {/* Inbox */}
                <Nav_Item_L1
                    img="./inbox_FILL0_wght200_GRAD0_opsz48.svg"
                    text="Inbox"
                    counter={counterInbox.length}
                    id="blue_icon"
                />

                {/* Today */}
                <Nav_Item_L1
                    img="./calendar_today_FILL0_wght200_GRAD0_opsz48.svg"
                    text="Today"
                    counter={counterToday.length}
                    id="green_icon"
                />

                {/* Upcoming */}
                <Nav_Item_L1
                    img="./calendar_month_FILL0_wght200_GRAD0_opsz48.svg"
                    text="Upcoming"
                    counter={counterUpcoming.length}
                    id="violet_icon"
                />

                {/* Projects */}
                <Nav_Item_L2
                    img="./expand_more_FILL0_wght200_GRAD0_opsz48.svg"
                    text="Projects"
                />

                <ul id="projects_toggle">

                    <hr className="hr_right" />

                    <li>

                        <Nav_Item_L3
                            img="./expand_more_FILL0_wght200_GRAD0_opsz48.svg"
                            text="Work"
                        />

                        <ul id="work_toggle">
                            <Nav_Item_L4
                                img="./radio_button_unchecked_FILL1_wght400_GRAD0_opsz48.svg"
                                text="New Brand"
                                class="icon_list yellow_icon"
                                id="radio_list"
                                counter="5"
                            />

                            <Nav_Item_L4
                                img="./person_FILL1_wght400_GRAD0_opsz48.svg"
                                text="Website Upgrade"
                                class="icon_list light_blue_icon"
                                id="person_list"
                                counter="111"
                            />
                            <Nav_Item_L4
                                img="./person_FILL1_wght400_GRAD0_opsz48.svg"
                                text="Product Roadmap"
                                class="icon_list red_icon"
                                id="person_list"
                                counter="11"
                            />
                            <Nav_Item_L4
                                img="./person_FILL1_wght400_GRAD0_opsz48.svg"
                                text="Meeting Agenda"
                                class="icon_list green_icon"
                                id="person_list"
                                counter="6"
                            />
                        </ul>
                    </li>

                    <li>
                        <Nav_Item_L3
                            img="./chevron_right_FILL0_wght200_GRAD0_opsz48.svg"
                            text="Personal"
                        />
                    </li>
                </ul>

                <Add_Smth
                    text="Add Project"
                />

            </section>
    )
}