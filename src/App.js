import { Link, BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header";

import './App.css';
import Landing from "./components/landing/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import ContactsPage from "./components/ContactsPage";
import Contact from "./components/Contact";
import Edit from "./components/Edit";
import MyProfile from "./components/MyProflie";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header /> 
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/contacts" element = {<ContactsPage/>}></Route>
          <Route path="/contact/:id" element={<Contact/>}></Route>
          <Route path="/edit/:id" element={<Edit/>}></Route>
          <Route path="/user" element={<MyProfile/>}></Route>
          
        </Routes>
        
        </div>
      
  </BrowserRouter>
  );
}

export default App;