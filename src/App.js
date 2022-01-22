import { Link, BrowserRouter, Route, Routes, Navigate } from "react-router-dom"

import './App.css';
import Landing from "./components/landing/Landing";
import Login from "./components/login/Login";
import Register from "./components/login/Register";

import ContactsPage from "./components/contacts/ContactsPage";

import Root from "./components/Root";
import UserProfile from "./components/profile/UserProfile";


function App() {
  
  return (

      <div>

        <Routes>

          <Route path="/" element={<Root/>} />

          <Route path="/login" element={<Login/>} />

          <Route path="/register" element={<Register/>} />

          <Route path="/contacts/*" element = {<ContactsPage/>} />

          <Route path="/profile" element={<UserProfile/>} />
          
        </Routes>
        
        </div>
  );
}

export default App;