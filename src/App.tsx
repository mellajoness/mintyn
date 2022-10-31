import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import SideBarRoute from './layout/sidebarRoute';


function App() {
  return (
    <Router>
        <Routes>
          <Route  path='/*' element={<SideBarRoute/>}/>  
        </Routes>
    </Router>
  );
}

export default App;
