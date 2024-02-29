import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './Components/LoginForm';
import Dashboard from './Components/Dashboard';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {  
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/dashboard/:userName' Component={Dashboard}/>
          <Route path='/' Component={LoginForm}/>
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
