import React, { useEffect, useState } from 'react';
import SignUpPage from "./Components/signUp/SignUpPage"
import Sidepanel from './Components/Page_content/Sidepanel';
import Allboxes from './Components/Page_content/Allboxes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainHeader from "./Components/Homepage/MainHeader";
import Signup from "./Components/SignInSetUP/Signup/Signup"
import "./App.css";
import { auth } from './Components/SignInSetUP/firebase';
import Login from './Components/SignInSetUP/Login/Login';
import LoggedInNavbar from './Components/Navbar/LoggedInNavbar';
import MainHeader2 from './Components/Homepage/MainHeader2';
import UserProfile from './Components/DashboardUserProfile/UserProfile';
import UserNavbar from './Components/Navbar/UserNavbar';
import Certification from './Components/Certificate/Certification';

const App = () => {
  const [userName, setUserName] = useState("guest");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user.displayName);
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MainHeader />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signuppage" element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/entry' element={<MainHeader2 name={userName}/>} />
          <Route path='/userprofile' element={<UserProfile name={userName}/>}/>
          <Route path='/usernav' element={<UserNavbar name={userName}/>}/>
          <Route path='/certification' element={<Certification/>}/>
          
          

          <Route
            path="*"
            element={
              <>
                {userName && <LoggedInNavbar name={userName} />}
                <div className='flex'>
                  <Sidepanel />
                  <Routes>
                    <Route path="/:section/:pageName" element={<Allboxes />} />
                  </Routes>
                </div>
              </>
            }
          />
        </Routes>
     
      </Router>
    </>
  );
}

export default App;