import { NavLink, useNavigate } from "react-router-dom";
import  Overview from "../assets/icons/overview.svg";
import  AllPayment from "../assets/icons/allpayment.svg";
import  Reconcile from "../assets/icons/reconcilledpayment.svg";
import  UnReconcile from "../assets/icons/unreconcilled.svg";
import  Manual from "../assets/icons/manual.svg";
import  AllOrder from "../assets/icons/all.svg";
import  Pending from "../assets/icons/pending.svg";
import  ReconcilledOrder from "../assets/icons/reconcilledorder.svg";
import  Profile from "../assets/icons/profile.svg";
import styles from '../layout/scss/sidebar.module.scss';
import Header from "./header";
 
const SideMenu = ({children}:any) => {
  const overviewItem={
    title:'Main',
      items:[{
          path:'/dashboard',
          name:'Overview',
          icon:<img src={Overview} className={styles.icon} alt="horse" />
      }]
    };

    const menuItem={
      title:'Payments',
        items:[{
            path:'/all-payment',
            name:'All Payments',
            icon:<img src={AllPayment} className={styles.icon} alt="horse" />
        },
        {
          path:'/reconcilled-payments',
          name:'Reconcilled Payments',
          icon:<img src={Reconcile} className={styles.icon} alt="horse" />
        },
        {
          path:'/unReconcilled-payments',
          name:'Un - Reconcilled Payments',
          icon:<img src={UnReconcile} className={styles.icon} alt="horse" />
        },
        {
          path:'/manual-settlement',
          name:'Manual Settlement',
          icon:<img src={Manual} className={styles.icon} alt="horse" />
        }, 
    ],
    };

    const ordersItem={
      title:'Orders',
        items:[{
            path:'/all-orders',
            name:'All Orders',
            icon:<img src={AllOrder} className={styles.icon} alt="horse" />
        },
        {
          path:'/pending-orders',
          name:'Pending Orders',
          icon:<img src={Pending} className={styles.icon} alt="horse" />
        },
        {
          path:'/reconcile-orders',
          name:'Reconcile Orders',
          icon:<img src={ReconcilledOrder} className={styles.icon} alt="horse" />
        },
        {
          path:'/merchant-profile',
          name:'Merchant Profile',
          icon:<img src={Profile} className={styles.icon} alt="horse" />
        },
      ],

    }



    let navigate = useNavigate();
    const logOut=()=>{
      navigate(
        "/",
    )}

    return ( 
      <div style={{display:''}}>
        <Header/>
        <div style={{display:'flex'}}>
          <div className={styles.parent} >
            <div className={styles.btnDiv}>         
               <button className={styles.btn}>GENERATE INVOICE</button>
            </div>
           
            <div>
             <div className={styles.title}>{overviewItem.title}</div>
              {overviewItem.items.map((item,index)=>
              <NavLink to={item.path}  key={index} className={styles.link} style={({ isActive }) => ({ background: isActive ? "#e8f1fd" : "" ,borderLeft:'5px solid #1875F0'})}>
                  <div className={styles.icon}>{item.icon}</div>
                  <div className={styles.pageName}>{item.name}</div>
              </NavLink>
            )}
            </div>

            <div>
             <div className={styles.title}>{menuItem.title}</div>
              {menuItem.items.map((item,index)=>
              <NavLink to={item.path}  key={index} className={styles.link} style={({ isActive }) => ({ background: isActive ? "#e8f1fd" : "" })}>
                  <div className={styles.icon}>{item.icon}</div>
                  <div className={styles.pageName}>{item.name}</div>
              </NavLink>
            )}
            </div>

            <div>
             <div className={styles.title}>{ordersItem.title}</div>
              {ordersItem.items.map((item,index)=>
              <NavLink to={item.path}  key={index} className={styles.link} style={({ isActive }) => ({ background: isActive ? "#e8f1fd" : "" })}>
                  <div className={styles.icon}>{item.icon}</div>
                  <div className={styles.pageName}>{item.name}</div>
              </NavLink>
            )}
            </div>


          </div>
          <main className={styles.main}>{children}</main>
        </div>
      </div>  
     );
}
 
export default SideMenu;