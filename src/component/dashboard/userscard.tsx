import styles from '../dashboard/scss/dashboard.module.scss';
import Chart from "react-apexcharts";
import ReactApexChart from 'react-apexcharts';
import { useState } from 'react';
const UserCard = () => {
    const [series,setSeries]=useState([
            {
              name: 'Inflow',
              data: [50,20,70,50, 105,]
            }

    ]);

    const [options,setOptions]=useState({
      chart: {
        sparkline: {
          enabled: true
        },
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false,
        }
      },
      colors: ['#0294FF', '#FFFFFF'],
     
      dataLabels: {
          enabled: false
      },

      stroke: {
        show: true,
        // curve: 'smooth',
        // lineCap: 'butt',
        // colors: undefined,
        width: 1,
        dashArray: 0,      
    },
      legend: {
      
      },
      markers: {
        size: 0,
        hover: {
          size: 0,
        }
      },
      xaxis: {
         categories: ['','','','',''],
      },
      yaxis: {
        show: false,
    },
      tooltip: {
        y: [
          {
            title: {
              formatter: function (val:any) {
                return val;
              }
            }
          }
        ]
      }
    }); 



  
    return ( 
        <div className={styles.parent}>
           <div className={styles.card}>
             <div className={styles.cardcontent}>
               <div className={styles.user}>Daily Transaction Value </div> 
               <div className={styles.count}>2,342</div> 
             </div>
             <Chart
                  options={options}
                  series={series}
                  type="area"
                  width="55%"
                  height="50"
              />    
           </div>          

           <div className={styles.card}>
             <div className={styles.cardcontent}>
               <div className={styles.user}>Daily Transaction Value </div> 
               <div className={styles.count}>4,000,000</div> 
             </div>
             <Chart
                  options={options}
                  series={series}
                  type="area"
                  width="55%"
                  height="50"
              />    
           </div>          

           <div className={styles.card}>
             <div className={styles.cardcontent}>
               <div className={styles.user}>Daily Transaction Value </div> 
               <div className={styles.count}>452,000</div> 
             </div>
             <Chart
                  options={options}
                  series={series}
                  type="area"
                  width="55%"
                  height="50"
              />    
           </div>          

           <div className={styles.card}>
             <div className={styles.cardcontent}>
               <div className={styles.user}>Daily Transaction Value </div> 
               <div className={styles.count}>4,000,000</div> 
             </div>
             <Chart
                  options={options}
                  series={series}
                  type="area"
                  width="55%"
                  height="50"
              />    
           </div>          

        </div>
     );
}
 
export default UserCard;