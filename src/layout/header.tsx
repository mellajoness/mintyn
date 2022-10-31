import styles  from './scss/header.module.scss'
import {ReactComponent as LendsqrIcon} from "../assets/logo.svg";
import  Search from "../assets/icons/search.svg";
import  Profile from "../assets/profileImg.svg"
import  DropDown from "../assets/profiledrop.svg"
import  Bell from "../assets/icons/bell.svg";
import { useState } from 'react';

const Header = () => {
        const [username,setUsername]=useState('');
    return ( 
        <div className={styles.parent}>
            <div className={styles.logoDiv}>
              <div className={styles.logo}>TransMonitor</div>
            </div>

            <div className={styles.content}>
              <div className={styles.searchDiv}>
                <div className={styles.imgSearch}><img src={Search} className={styles.iconSearch} alt="horse" /></div>
                <input className={styles.input} onChange={e => setUsername(e.target.value)} type='search'  value={username}  placeholder='Search...'/>
              </div>

              <div className={styles.searchDiv}>
                 <div className={styles.faq}>Support</div>
                 <div className={styles.faq}>FAQ</div>
                 <div><img src={Bell} className={styles.bellIcon} alt="horse" /></div>
                 <div>
                   <div className={styles.hello}>Hello</div>
                   <div className={styles.name}>Oluwaleke Ojo</div>
                 </div> 
                 <div><img src={Profile} className={styles.profileIcon} alt="horse" /></div> 
              </div>  
            </div>
              
            
        </div>
     );
}
 
export default Header;