import styles from '../dashboard/scss/dashboard.module.scss';
import Table from '../shared/table';
import UserCard from './userscard';
import AreaChart from './chart';
import LineChart from './linechart';
const Dashboard = () => {
    return ( 
        <div className={styles.container} >
            <div>
                <UserCard/>
            </div>
            <div className={styles.chartsRow}>
               <AreaChart/>
               <LineChart/>
            </div>
            <Table/>
        </div>
     );
}
 
export default Dashboard;