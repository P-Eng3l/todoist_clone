import { React, useState, createContext } from 'react'
import './Index.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import dataRaw from './components/data.jsx'

export const CategoryContext = createContext();

function App() {

  const [category, setCategory] = useState("Inbox");
  const [data, setData] = useState(dataRaw);
  const [toggle, setToggle] = useState(true);
  const [search, setSearch] = useState("");

  return (
    <>

      <section className="main_container" title="Task Manager">
        <div className="grid-container">

          <CategoryContext.Provider
            value={{
              category, 
              setCategory,
              toggle,
              setToggle,
              data,
              setData,
              search, 
              setSearch
            }}>
            <Header />
          </CategoryContext.Provider>

          <CategoryContext.Provider
            value={{
              category,
              setCategory,
              data,
              setData,
              toggle,
              setToggle
            }}>
            <Nav />
          </CategoryContext.Provider>

          <CategoryContext.Provider
            value={{
              category,
              setCategory,
              data,
              setData,
              search,
              setSearch,
              // changeVis, 
              // setChangeVis
            }}>
            <Main />
          </CategoryContext.Provider>

        </div>
      </section>

    </>
  )
}

export default App
