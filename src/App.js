import { Link, BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Header from "./components/common/Header";

import { Provider } from "react-redux";

import { store } from "./redux/reduxStore.js"

import './App.css';
import Landing from "./components/landing/Landing";
import Login from "./components/login/Login";
import Register from "./components/login/Register";

import ContactsPage from "./components/contacts/ContactsPage";
import Contact from "./components/contacts/Contact";
import CreateContact from "./components/contacts/CreateContact";
import MyProfile from "./components/MyProflie";
import Root from "./components/Root";

function App() {
  
  return (

      <div>

        <Routes>

          <Route path="/" element={<Root/>}>
              
          </Route>

          <Route path="/home" element={<Landing/>}>

          </Route>

          <Route path="/login" element={<Login/>}>
              {
                // if logged in redirect to /contacts
              }
          </Route>

          <Route path="/register" element={<Register/>}>
              {
                // if logged in redirect to /contacts
              }
          </Route>

          <Route path="/contacts/*" element = {<ContactsPage/>}>

          </Route>

          {/* <Route path="/contact" element={<CreateContact/>}>

          </Route>  */}

          <Route path="/user" element={<MyProfile/>}>

          </Route>
          
        </Routes>
        
        </div>
  );
}

export default App;