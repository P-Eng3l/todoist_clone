import { React, useContext } from 'react'
import { CategoryContext } from '../App'
import '../Index.css'

export default function Header() {

    const { category, setCategory, toggle, setToggle, data, setData, search, setSearch } = useContext(CategoryContext);

    const handleClick = event => {
        console.log(`${!toggle}`)
        setToggle(!toggle)
    };

    let counterVisible = data.filter(d => {
        return (d.visible === true)
    });

    let counterCategory = data.filter(d => {
        return (d.category === category && d.visible === true)
    });

    function handleSearch(input = "") {
        setSearch(input)
    }

    return (

        <section className="header" title="Header">

            <img src="./menu_FILL0_wght200_GRAD0_opsz48.svg" onClick={handleClick} className="icon_header" id="icon1" />

            <img src="./search_FILL0_wght200_GRAD0_opsz48.svg" className="icon_header" id="icon2" />

            <form>
                <input type="text" name="search" placeholder="Quick Find" className="search"
                    onChange={(e) => {
                        handleSearch(e.target.value);
                    }} onKeyDown={ (e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                        }
                    }} />
            </form>

            <img src="./check_circle_FILL1_wght200_GRAD0_opsz48.svg" className="icon_header" id="icon3" style={{ marginLeft: "-10px" }} />

            <span id="score_todo">
                <p id="score_todo_P">{counterVisible.length} / {counterCategory.length}</p>
            </span>

        </section>

    )
}