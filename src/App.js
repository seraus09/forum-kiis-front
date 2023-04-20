import React from 'react';
import SignIn from './Pages/Auth/SignIn/SignIn';
import SignUp from './Pages/Auth/SignUp/SignUp';
import Header from './Components/Header/Header';
import ResetPassword from './Pages/Auth/ResetPasswords/ResetPassword'
import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";

const App = ()=> {
    return (    
        <Router>
            <Header />
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