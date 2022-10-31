import { useState } from "react";
import styles from '../dashboard/scss/chart.module.scss';
import Chart from "react-apexcharts";
import  Prev from "../../assets/icons/prev.svg";
import  Next from "../../assets/icons/next.svg";
const AreaChart = () => {
 const [series,setSeries]=useState([
            {
              name: 'Inflow',
              data: [46, 57, 59, 56,36, 67,82,34,35,80,40,20]
            }
    ]);

    const [options,setOptions]=useState({
      chart: {
        sparkline: {
            enabled: true
          },
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
         yaxis: {
        show: false,
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

            <div className={styles.dateParent}>
            <div className={styles.date}>Today: 5, Aug 2018</div>
            <div className={styles.nextRow}>
                <select className={styles.dropdown}>
                  <option value="1">4 jan - 11 Mar</option>
                  <option value="2">8 Mar - 11 Dec</option>
                  <option value="3">28 Mar - 11 Mar</option>
                </select>
                <div className={styles.nextRow}>
                  <div className={styles.next}> <img src={Prev} style={{height:'17px',paddingLeft:'6px',paddingRight:'6px'}}/></div>
                  <div className={styles.next}><img src={Next} style={{height:'17px',paddingLeft:'6px',paddingRight:'6px'}}/></div>
                </div>
            </div>
            </div>
           
            <Chart
              options={options}
              series={series}
              type="area"
              width="100%"
              height="193"
            />
        </div>
     );
}
 
export default AreaChart;