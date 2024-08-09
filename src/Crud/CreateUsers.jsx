import { useEffect } from "react"
import { useState } from "react"
import style from "./crud.module.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const CreateUsers = () => {
    let navigate = useNavigate()

    let [name, setName] = useState("")
    let [salary, setSalary] = useState("")
    let [company, setCompany] = useState("")

    let getName = (e) => {
        setName(e.target.value)
    }

    let getSalary = (e) => {
        setSalary(e.target.value)
    }

    let getCompany = (e) => {
        setCompany(e.target.value)
    }
    let payload = {
        empName: name,
        empSalary: salary,
        empCompany: company

    }
    let formHandle = (e) => {
        e.preventDefault()
        if (name == "" || salary == "" || company == "") {
            alert("input fields are empty")
        }
        else {
            axios.post("http://localhost:5000/employees", payload)
                .then(() => { console.log("Data inserted"); navigate("/users") })
                .catch(() => { console.log("Failed"); })
        }

    }

    return (
        <div id={style.formPage}>
            {/* <h1>CreateUsers</h1> */}
            <form action="">
                <h2>CREATE USERS</h2>
                <input type="text" placeholder="Name" value={name} onChange={getName} />
                <input type="text" placeholder="Salary" value={salary} onChange={getSalary} />
                <input type="text" placeholder="Company" value={company} onChange={getCompany} />
                <button onClick={formHandle}>Sumbit</button>
            </form>
        </div>
    )
}
export default CreateUsers