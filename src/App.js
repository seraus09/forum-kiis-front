import React from 'react';
import SignIn from './Pages/Auth/SignIn/SignIn';
import SignUp from './Pages/Auth/SignUp/SignUp';
import Header from './Components/Header/Header';
import ResetPassword from './Pages/Auth/ResetPasswords/ResetPassword'
import HomaPage from './Pages/Dashboard/HomePage/HomaPage';
import {
    BrowserRouter as Router,
    Route,
    Routes, Navigate
  } from "react-router-dom";
  import PrivateRoute from './Components/PriveteRoute/PrivateRoute';

const App = ()=> {
    return (    
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<SignIn />} />
                <Route exact path="/signin" element={<SignIn />} />
                <Route exact path="/signup" element={<SignUp />} />
                <Route exact path="/reset-password" element={<ResetPassword />} />
                <Route exact path='/forum' element={
                    <PrivateRoute>
                        <HomaPage/> 
                    </PrivateRoute>
                    } />
                <Route path="*" element={<Navigate to="/" replace />}/>
            </Routes>
        </Router>
    )
}
export default App