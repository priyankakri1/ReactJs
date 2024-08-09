import styles from "./findcoder.module.css"
import Logo from "./Logo"
import Menu from "./Menu"

import Btn from "./Btn"

const FindCoder=()=>{
    return(
        <div id={styles.nav}>
            <article className={styles.logo}>
          <Logo></Logo>
            </article>
            <article className={styles.menu}>
            <Menu></Menu>
            </article>
            <article className={styles.btn}>
            <Btn></Btn>
            </article>
        </div>
    )
}
export default FindCoder