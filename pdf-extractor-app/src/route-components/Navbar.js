import{Link,useNavigate} from "react-router-dom";
import React, { useState } from 'react';
import './Navbar.css';
function Navbar() {
    const nav = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
      };
      

//     const [user,loading,error] = useAuthState(auth);
//    const signOutClick =()=>{
//     auth.signOut();
//     nav('/');
//     alert("Logged out succesfully");
//    }
    return (
      <div className="Navbar">
            <div className='Home_btn'> 
               <Link to= '/'>    Home</Link>
             </div>
          <div className='Login_btn'> 
          <Link to= './Login'>Login</Link>
              {/* {!user&&<Link to= './Login'>Login/Signup</Link>}
              <h3>{user?.email}</h3>
              { user && <button onClick={signOutClick} type='submit'>Log Out</button>} */}
          </div>
            <div className='Account_btn'>
                <Link to= './Account'>Account</Link>
            </div>
                
                
      </div>
    );
  }
  
  export default Navbar;