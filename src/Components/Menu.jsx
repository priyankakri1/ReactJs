import {Link} from "react-router-dom"
import styles from "./findcoder.module.css"
const Menu=()=>{
    return(
        <div>
            {/* <h1>Menu</h1> */}
            <ol id={styles.menuBlock}>
                <li><Link to="/explore">Explore Work</Link></li>
                
                <li><Link to="/hire">Hire Talents</Link></li>
                
                <li><Link to="/dev">Dev Board</Link></li>

                <li><Link to="/challenges">Challenges</Link></li>
            </ol>
        </div>
    )
}
export default Menu