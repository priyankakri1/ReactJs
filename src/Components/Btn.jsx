import styles from  "./findcoder.module.css"
const Btn=()=>{
    return(
        <div>
            {/* <h1>Button</h1> */}
            <button id={styles.btn}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path></svg>Get started
            </button>
        </div>
    )
}
export default Btn