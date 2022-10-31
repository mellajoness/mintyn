
import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";
import Dashboard from "../component/dashboard/dashboard";

import SideMenu from "./sidebar";
  
  const SideBarRoute=()=>{
    return (
      <div>
        <SideMenu>
        <Routes>     
            <Route  path='/dashboard' element={<Dashboard/>}/>  
            {/* <Route  path='/users/user-details' element={<UserDetails/>}/>   */}
            <Route  path='/*' element={<Dashboard/>}/>  
          </Routes>  
        </SideMenu>
      </div>
    );
  }
  
  export default SideBarRoute;
  