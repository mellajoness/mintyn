import {useState,CSSProperties } from 'react';
import styles from '../shared/scss/table.module.scss';
import  DropDown from "../../assets/icons/dropdown.svg";
import DotLoader from "react-spinners/DotLoader";
import _ from 'lodash';
import { paginate } from './paginate';
import Pagination from './pagination';
import { useNavigate } from 'react-router-dom';
import  Search from "../../assets/icons/search.svg";

const override: CSSProperties = {
    display: "block",
    marginTop: "0 auto",
    borderColor: "red",
  };
 
const Table = () => {
    const [loading,setLoading,]=useState(false);
    const [mismatchError,setMismatchError]=useState('');
    const [color, setColor] = useState("green");

    const [disableNextPage,setDisableNextPage]=useState(false);
    const [pageSize,setPageSize]=useState(10);
    const [dropDownValue,setDropDownValue]=useState(10);
    const [modal_center,setModal_center]=useState(false);
    const [currentPage,setCurrentPage]=useState(1)
    const [sortColumn,setSortColumn]=useState({path:'userId',order:'asc'});
    let navigate = useNavigate();
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [date,setDate]=useState('');
    const [phoneNumber,setPhoneNumber]=useState('');
    const [types,setTypes]=useState('')
    const [dropCount,setDropCount]=useState([
      {id:1, year:'10'},
      {id:2, year:'20'},
      {id:3, year:'50'},
    ])
  
    const [statusTypes,setStatusTypes]=useState([
      {id:1, type:'All'},
      {id:2, type:'Reconcilled'},
      {id:3, type:'Un-reconcilled'},
      {id:4, type:'settled'},
      {id:5, type:'Pending'},
    ]) 
    // const ab=[{type:'All'}, ...statusTypes]
    const [users,setUsers]=useState([
      {id:1,type:'Apple Mac Book 15” 250 SSD 12GB',price:'$73430',transNo:'1234567890',time:'12:30',status:'Reconcilled'},
      {id:2,type:'Apple Mac Book 15” 250 SSD 12GB',price:'$73430',transNo:'1234567890',time:'12:30',status:'Pending'},
      {id:3,type:'Apple Mac Book 15” 250 SSD 12GB',price:'$73430',transNo:'1234567890',time:'12:30',status:'Reconcilled'},
      {id:4,type:'Apple Mac Book 15” 250 SSD 12GB',price:'$73430',transNo:'1234567890',time:'12:30',status:'Reconciled'},
      {id:5,type:'Apple Mac Book 15” 250 SSD 12GB',price:'$73430',transNo:'1234567890',time:'12:30',status:'Pending'},
      {id:6,type:'Apple Mac Book 15” 250 SSD 12GB',price:'$73430',transNo:'1234567890',time:'12:30',status:'Un-reconcilled'},
      {id:7,type:'Apple Mac Book 15” 250 SSD 12GB',price:'$73430',transNo:'1234567890',time:'12:30',status:'Reconcilled'},
      {id:8,type:'Apple Mac Book 15” 250 SSD 12GB',price:'$73430',transNo:'1234567890',time:'12:30',status:'Reconcilled'},
      {id:9,type:'Apple Mac Book 15” 250 SSD 12GB',price:'$73430',transNo:'1234567890',time:'12:30',status:'Pending'},
      {id:10,type:'Apple Mac Book 15” 250 SSD 12GB',price:'$73430',transNo:'1234567890',time:'12:30',status:'Reconcilled'},
      {id:11,type:'Apple Mac Book 15” 250 SSD 12GB',price:'$73430',transNo:'1234567890',time:'12:30',status:'Reconcilled'},
      {id:12,type:'Apple Mac Book 15” 250 SSD 12GB',price:'$73430',transNo:'1234567890',time:'12:30',status:'Pending'},
    ]);


 
    const changeValue=(e:any)=>{
        setDropDownValue(e.target.value)
        console.log(e.target.value);
    }

    const handlePageChange=(page:any)=>{
        setCurrentPage(page)
    }
    
    const pagesCount=Math.ceil(users.length/pageSize);
    
    const handleNextpage=()=>{
        setCurrentPage(currentPage+1)
    }

    const handlePrevpage=()=>{
        if(pagesCount===currentPage && users.length===0) {
          setCurrentPage(currentPage-2)
        }
        setCurrentPage(currentPage-1)
    }
    const changeStatus=(e:any)=>{
      setTypes(e.target.value)
      console.log('types',e.target.value);
  }
    
    const sorted=types ? users.filter(sort =>sort.status===types): users
    // var res = users.filter(item => item.status === types ?   console.log('new',item) :console.log('users',users) )

    console.log('sort',sorted)
    const filtered=paginate(users,currentPage,dropDownValue)
      

    return ( 
        <div>
           <div>
            <div className={styles.payment}>Payments</div>
            <div className={styles.dropdownRow}>  

            <div className={styles.row}>
             <div className={styles.showing}>Showing</div>
             <select  onChange={changeValue} className={styles.select}>
              {dropCount.map(year=>
                <option value={year.year}>{year.year}</option>
              )} 
             </select> 
             <div className={styles.showing} style={{paddingLeft:'0.7em'}}>
               out of <span className="primary-color">{filtered.length} payments</span> 
             </div>
            </div> 

             <div className={styles.inputDiv}>
                <div className={styles.imgSearch}><img src={Search} className={styles.iconSearch} alt="horse" /></div>
                <input className={styles.input} onChange={e => setUsername(e.target.value)} type='search'  value={username}  placeholder='search payments'/>
             </div>

             <select  onChange={changeStatus} className={styles.selectFilter}>
              {statusTypes.map(status=>
                <option key={status.id} value={status.type}>{status.type}</option>
              )} 
             </select> 
            </div>
           </div>


         <div  className={styles.parent}>
         <div className="table-responsive">  
          <div style={{display:'flex',justifyContent:'center',marginTop:'0em'}}><DotLoader color={color} loading={loading} cssOverride={override} size={20}/></div>    
         <table className="table">
          <thead className={styles.tablerow}>
           <tr>
              <th className={styles.tablehead} scope="col">
                Item Type
              </th>

              <th className={styles.tablehead} scope="col">
                Price
              </th>

              <th className={styles.tablehead} scope="col">
                Transaction No
              </th>

              <th className={styles.tablehead} scope="col">
                 Time
              </th>
              <th className={styles.tablehead} scope="col">
                STATUS
              </th>
              <th></th>
           </tr>
          </thead>
          <tbody>

          {filtered.map((user:any,index:any) =>
           <tr key={index}>
             <td className={styles.tabledata}>
              <div className={styles.typerow}>
               <div className={styles.avatar}>
                 VW
               </div>
               <div className={styles.tabledataType}>{user.type}</div>
               </div>
             </td>
            
             <td className={styles.tabledata}>{user.price}</td>
             <td className={styles.tabledata}>{user.transNo}</td>
             <td className={styles.tabledata}>{user.time}</td> 
             <td >
              <div className={styles.statusDiv}>
                <div style={{background:user.status==='Pending' ? '#EBC315' :'' || user.status==='Reconcilled' ? '#27AE60' :'' || user.status==='Un-reconcilled' ? '#7F8FA4' :''}} className={styles.dot}/>
                <div style={{color:user.status==='Pending' ? '#EBC315' :'' || user.status==='Reconcilled' ? '#27AE60' :'' || user.status==='Un-reconcilled' ? '#7F8FA4' :''}} className={styles.statusText}>{user.status}</div>
               </div> 
             </td>
             <td className={styles.tabledata}>              
                <img src={DropDown} style={{float:'right',cursor:'pointer',width:'17px'}}/>       
             </td>
          </tr>
          )}
         </tbody>
         </table>
         </div>
         </div>
         

         <div className={styles.row}>
         <div className={styles.dropdownRow}>   
             <div className={styles.showing}>Showing</div>
            
             <div className={styles.showing} style={{paddingLeft:'0.7em'}}>
               Showing 1 to <span>{dropDownValue}</span> of <span className="primary-color">{users.length} entries</span> 
             </div>
            </div>

         <Pagination
              itemsCount={users.length}
              pageLength={filtered.length}
              pageSize={dropDownValue}
              onPageChange={handlePageChange}
              onNextpage={handleNextpage}
              onPrevpage={handlePrevpage}
              currentPage={currentPage}
              disableNextPage={disableNextPage}
        />

        </div>
     </div>
     );
}
 
export default Table;