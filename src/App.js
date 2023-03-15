import React from 'react';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import NavBar from './Components/Menu/Navbar';
import ResetPassword from './Pages/ResetPassword'
import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";




const App = ()=> {
    return (    
        <Router>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<SignIn />} />
                <Route exact path="/signin" element={<SignIn />} />
                <Route exact path="/signup" element={<SignUp />} />
                <Route exact path="/reset-password" element={<ResetPassword />} />
            </Routes>
        </Router>
    )
}
export default App