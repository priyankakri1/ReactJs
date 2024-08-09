import { useEffect, useState } from "react"
import style from "./crud.module.css"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"


const EditUsers = () => {
    let obj = useParams()
    let navigate = useNavigate()

    let [name, setName] = useState("")
    let [salary, setSalary] = useState("")
    let [company, setCompany] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:5000/employees/${obj.abc}`)
            .then((resp) => {
                setName(resp.data.empName)
                setSalary(resp.data.empSalary)
                setCompany(resp.data.empCompany)
            })
            .catch(() => { console.log("somthing is wrong"); })
    }, [])

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
    let editForm = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:5000/employees/${obj.abc}`, payload)
            .then(() => {
                console.log("Updated Successfully"); navigate("/users")
            })
            .catch(() => {
                console.log("falied");
            })
    }

    return (
        <div id={style.formPage}>
            <form action="">
                <h2>EDIT USERS</h2>
                <input type="text" placeholder="Name" value={name} onChange={getName} />
                <input type="text" placeholder="Salary" value={salary} onChange={getSalary} />
                <input type="text" placeholder="Company" value={company} onChange={getCompany} />
                <button onClick={editForm}>Sumbit</button>
            </form>
        </div>
    )
}
export default EditUsers