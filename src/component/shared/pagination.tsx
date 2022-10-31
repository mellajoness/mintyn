import React, { useState } from 'react';
import  Back from "../../assets/back.svg";
import styles from '../shared/scss/pagination.module.scss';
import  Forward from "../../assets/forward.svg";
import _ from 'lodash'
const Pagination = (props: { itemsCount: any; pageSize: any; currentPage: any; onPageChange: any; onNextpage: any; onPrevpage: any; disableNextPage: any; pageLength: any; }) => {
    const {itemsCount,pageSize,currentPage,onPageChange,onNextpage,onPrevpage,disableNextPage,pageLength}=props
    const pagesCount=Math.ceil(itemsCount/pageSize);
    const pages=_.range(1,pagesCount+1)
    if(pagesCount==1) return null


    return ( 
        <React.Fragment>          
       <div style={{display:itemsCount === 0 ? 'none': 'flex',justifyContent:'space-between',alignItems:'center'}}>
        

        {pages.length <= 10 &&
           <div style={{display:'flex',alignContent:'center',border:'1px solid #CED0DA'}}>
             <button disabled={currentPage===1} onClick={onPrevpage} className={styles.btn} >
               Previous
             </button>   
             {pages.map(page=>
                 <div onClick={()=>onPageChange(page)} key={page} style={{height:'40px',color:page===currentPage ? 'white':'#979797',background:page===currentPage ? '#1875F0':'',fontWeight:page===currentPage ? 'bold':'',textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center',cursor:'pointer',width:'35px'}} >{page}</div>  
             )}
             <button disabled={pagesCount===currentPage} onClick={onNextpage} className={styles.btn}>
              Next
             </button>   
           </div>
         } 
           </div> 
        </React.Fragment>
     );
}
 
export default Pagination;