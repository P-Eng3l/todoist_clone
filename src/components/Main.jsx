import { React, useContext } from 'react';
import '../Index.css'
import MainItem from './MainItem'
import { CategoryContext } from '../App'

// ToDo: Change task description if clicked upon
export default function Main(props) {

    const { category, setCategory, data, setData, search, setSearch } = useContext(CategoryContext);

    const listItems = data.map(task =>
        <MainItem
            key={task.id}
            {...task}
            deleteTask={deleteTask}
            changeTask={changeTask}
            changeVisTask={changeVisTask}
        />
    )

    function addTask(input) {

        let keyUpdate = data[data.length - 1].id

        let newTask = {
            key: keyUpdate + 1,
            id: keyUpdate + 1,
            text: input,
            category: category,
            visible: true,
            change: false
        }

        setData([...data, newTask])

    }

    function deleteTask(id = 1) {

        const leftArray = data.slice(0, id)

        const newElement = {
            key: data[id].id,
            id: data[id].id,
            text: data[id].text,
            category: data[id].category,
            visible: !data[id].visible,
            change: data[id].change
        }

        const rightArray = data.slice(id + 1, data.length)

        setData([...leftArray, newElement, ...rightArray]);

    }

    function changeTask(changeText="Test", id = 1) {

        if (changeText==""){
            changeText=data[id].text
        }
        const leftArray = data.slice(0, id)

        const newElement = {
            key: data[id].id,
            id: data[id].id,
            text: changeText,
            category: data[id].category,
            visible: true, // I assume, that if someone changes the text, it means that the task should be unchecked again
            change: false
        }

        const rightArray = data.slice(id + 1, data.length)

        setData([...leftArray, newElement, ...rightArray]);
    }

    function changeVisTask(id = 1) {

        const leftArray = data.slice(0, id)

        const newElement = {
            key: data[id].id,
            id: data[id].id,
            text: data[id].text,
            category: data[id].category,
            visible: true,
            change: true
        }

        const rightArray = data.slice(id + 1, data.length)

        setData([...leftArray, newElement, ...rightArray]);
    }

    const show_search = {
        display: (search === "")? 'none' : 'initial',
        visibility: "visible"
    }

    function searchString(input){
        let tokenSearch = search.split(" ");
        let ret = false;

        if(search === ""){
            return true;
        }

        tokenSearch.forEach(e => {

            if (input.includes(e)){
                ret = true;
            }
        })
        console.log(`ret is: ${ret}`)

        return ret;
    }

    return (
        <section className="main" title="Main Tasks">

            <h1 className="heading">{category}</h1>

            <p className="search_text" style={show_search}>Searching for: {search}</p>

            <ul className="ul_main">

                {
                    data.map(task =>
                        <MainItem
                            key={task.id}
                            {...task}
                            deleteTask={deleteTask}
                            changeTask={changeTask}
                            changeVisTask={changeVisTask}
                        />
                    ).filter(t => {
                        return ( t.props.category == category && searchString(t.props.text) );
                    })
                }

            </ul>

            <button className="add_task" type="button">
                <img src="./add_FILL0_wght200_GRAD0_opsz48.svg" className="icon_add_task red2_icon" />

                <input type="text" name="addtask" placeholder="Add Task" className="add_task_text"
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            addTask(e.target.value)
                            e.target.value = ""
                        }
                    }} />

            </button>

        </section>
    )
}