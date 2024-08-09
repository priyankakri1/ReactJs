import axios from "axios"
import { useState, useEffect } from "react"
import style from "./crud.module.css"
import { Link } from "react-router-dom"

const Users = () => {
    let [employees, setEmployees] = useState([])
    let [load, setLoad] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:5000/employees")
            .then((resp) => {
                setEmployees(resp.data)
            })
            .catch(() => {
                console.log("Somthing wrong");
            })
        setLoad(false)
    }, [load])
    let deleteForm = (id) => {
        axios.delete(`http://localhost:5000/employees/${id}`)
            .then(() => { console.log("Successfully deleted"); })
            .catch(() => {
                console.log("errrrr");
            })
        setLoad(true)
    }

    return (
        <div id={style.userPage}>
            {employees.map((employee) => {
                return (
                    <table>
                        <tr>
                            <td>Name</td>
                            <td>{employee.empName}</td>
                        </tr>
                        <tr>
                            <td>Salary</td>
                            <td>{employee.empSalary}</td>
                        </tr>
                        <tr>
                            <td>Company</td>
                            <td>{employee.empCompany}</td>
                        </tr>
                        <tr>
                            <td><button><Link to={`/editUsers/${employee.id}`}>Edit</Link></button></td>
                            <td><button onClick={() => { deleteForm(employee.id) }}>Delete</button></td>
                        </tr>
                    </table>
                )
            })}

        </div>
    )
}
export default Users