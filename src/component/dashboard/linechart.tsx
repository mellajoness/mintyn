import { useState } from "react";
import styles from '../dashboard/scss/linechart.module.scss';
import Chart from "react-apexcharts";
const LineChart = () => {
 const [series,setSeries]=useState([
            {
              name: 'Inflow',
              data: [46, 57, 59, 56,36, 67,82,34,35,80,40,20]
            }
    ]);

    const [options,setOptions]=useState({
      chart: {
          toolbar: {
              show: false,
          }
      },
      plotOptions: {
          bar: {
              horizontal: false,
              columnWidth: '100%',
              endingShape: 'rounded'	
          },
      },
      dataLabels: {
          enabled: false,
      },
     
      legend: {
        show: false
      },
      stroke: {
          show: true,
          width: 20,
          colors: ['transparent'],
         
      },
    
      colors: ['#0294FF', '#FFFFFF'],
      xaxis: {
          categories: ["Jan",'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', "Nov", "Dec"],
      },
      grid: {
          borderColor: '#f1f1f1',
      },
      fill: {
          opacity: 1
  
      },
  
});


    return ( 
        <div className={styles.parent}>
            <div className={styles.box}>
                <div className={styles.order}>Orders</div>
                <div className={styles.row}>
                    <div className={styles.green}/>
                    <div className={styles.orange}/>
                </div>
                <div className={styles.row}>
                    <div className={styles.orderType}>Pending Orders:</div>
                    <div className={styles.pendingNumb}>20</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.orderType}>Reconcilled Orders:</div>
                    <div className={styles.pendingNumb}>80</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.orderType}>Total Orders:</div>
                    <div className={styles.total}>100</div>
                </div>       
            </div> 

            <div className={styles.box}>
                <div className={styles.order}>Payment</div>
                <div className={styles.row}>
                    <div className={styles.green}/>
                    <div className={styles.orange}/>
                </div>
                <div className={styles.row}>
                    <div className={styles.orderType}>Un-reconcilled Payments:</div>
                    <div className={styles.pendingNumb}>20</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.orderType}>Reconcilled Orders:</div>
                    <div className={styles.pendingNumb}>80</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.orderType}>Total Orders:</div>
                    <div className={styles.total}>100</div>
                </div>       
            </div> 
           

           
           
        </div>
     );
}
 
export default LineChart;