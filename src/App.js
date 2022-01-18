import { Link, BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header";

import { Provider } from "react-redux";

import { store } from "./redux/reduxStore.js"

import './App.css';
import Landing from "./components/landing/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import ContactsPage from "./components/ContactsPage";
import Contact from "./components/Contact";
import Edit from "./components/Edit";
import MyProfile from "./components/MyProflie";

import axios from "axios";



function App() {

  // axios.get("http://localhost:8080/contacts")
  //       .then(response => {
  //           console.log("data",response.data);
  //           // dispatch(getAllContacts(response.data))
  //       })
  //       .catch(err => console.log("err",err))

  // const x = async () => {
  //   axios.get("http://localhost:8080/contacts"
  //   ).then(response => console.log("response.body",response.data))
  //   .catch(err => console.log("err",err))
  // };

  // x()
  



  return (
    <Provider store={store}>
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
  </Provider>
  );
}

export default App;