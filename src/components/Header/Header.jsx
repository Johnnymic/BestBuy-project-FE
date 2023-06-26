import { Link } from "react-router-dom"
import styles from "./Header.module.scss"
import {FaShoppingCart} from  'react-icons/fa'
import {HiOutlineMenuAlt3} from 'react-icons/hi'

function Header() {
  const logo = (
  <Link to="/home"><h2>e <span>BestBuy</span>.</h2></Link>)

  const cart =(
      <span className={styles.cart}>
                 <Link to="/cart">
                    Cart
                   <FaShoppingCart />
                   <p>0</p>
                  </Link>
                 </span>
  )
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
                  <Link to="/contact">Contact</Link>
                </li>
           

             </ul>
           </nav>

           <section >
               <ul>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              
               
                <li>
                  <Link to="/login">Register</Link>
                </li>

               <li>
                  <Link to="/order-history">My order
               </Link>
                </li>
             </ul>
                {cart}
                 
           </section>

           <div className={styles["menu-icon"]}>
              {cart}
              <HiOutlineMenuAlt3/>
           </div>

                   
         </div>
    </header>
  )
}

export default Header