import Modal from "./components/Modal"
import data from "./Data"
import {useState} from "react"

const App = () => {

  const submitFrom=(e)=>{
    e.preventDefault()
  }
  return <section>
    <form onSubmit={submitFrom}>
      <input type="text" />
      <input type="submit" value="pridat"/>
    </form>
  </section>
}

export default App