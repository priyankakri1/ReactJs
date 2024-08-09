
import style from "./crud.module.css"
import { Link } from "react-router-dom"
const Crud = () => {
    return (
        <div id={style.nav}>

            <Link to="/createUsers">CREATUSERS</Link>

            <Link to="/users">Users</Link>
        </div>
    )
}
export default Crud