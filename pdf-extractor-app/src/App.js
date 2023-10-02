import './App.css';
import UploadForm from './upload-components/UploadForm';
import Login from './route-components/Login';
import Account from './route-components/Account';
import Navbar from './route-components/Navbar';
import { PageContextProvider } from './context/PageContextProvider';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <PageContextProvider>
     <BrowserRouter>
         
         <Navbar/>
        
         <Routes>
            
            <Route path='/' element={<UploadForm/>} />
            <Route path='login' element={<Login/>}/>
            <Route path='account' element={<Account/>}/>
         </Routes>  
    
    </BrowserRouter>
  </PageContextProvider>
  );
}

export default App;
