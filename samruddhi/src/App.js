import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "./auth/firebase";
import Login from "./auth/login";
import Profile from "./auth/profile";
import SignUp from "./auth/register";
import Home from "./components/Home";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false); // Stop loading once we know if the user is logged in
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Loading state while checking user authentication
  }

  // A protected route component to restrict access to authenticated users
  const ProtectedRoute = ({ element, ...rest }) => {
    return user ? element : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route 
          path="/login" 
          element={
            <div className="auth-wrapper">
              <div className="auth-inner">
                <Login />
              </div>
            </div>
          } 
        />
        <Route 
          path="/register" 
          element={
            <div className="auth-wrapper">
              <div className="auth-inner">
                <SignUp />
              </div>
            </div>
          } 
        />
        <Route 
          path="/profile" 
          element={
            <div className="auth-wrapper">
              <div className="auth-inner">
                <Profile />
              </div>
            </div>
          } 
        />

        {/* Redirecting to home if authenticated, otherwise to login */}
        <Route path="/" element={user ? <Navigate to="/home" /> : <Navigate to="/login" />} />

        {/* Protected Route: Only accessible if the user is logged in */}
        <Route 
          path="/home" 
          element={
            <ProtectedRoute element={<Home />} />
          }
        />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
