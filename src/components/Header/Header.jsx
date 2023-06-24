import { Link } from "react-router-dom"
import styles from "./Header.module.scss"

function Header() {
  const logo = 
  <Link to="/home"><h2>e <span>Jumia</span>.</h2></Link>


  return (
    <header>
         <div className={styles.header}> 
           <div className={styles.logo}> 
                  {logo}
         </div>

           <nav>
             <ul>

                <li>
                  <Link to="/home">Home</Link>
                </li>

                <li>
                  <Link to="/home">Contact</Link>
                </li>

             </ul>
           </nav>

                   
         </div>
    </header>
  )
}

export default Header