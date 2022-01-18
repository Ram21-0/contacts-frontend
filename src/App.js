import { Link, BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header";

import './App.css';
import Landing from "./components/landing/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import ContactsPage from "./components/ContactsPage";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/contacts" element = {<ContactsPage/>}></Route>

          {/* <Route path="/about" component={About}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/cts" component ={Contact}></Route>
          <Route path="/myProfile" component={MyProflie}></Route> */}
        </Routes>
      </div>
      {/* <Header/> */}
      {/* <Routes>

        <Route path="/" element={<Link to="/contacts">Link</Link>}>  </Route>
        <Route path="/contacts"/>
      </Routes> */}
  </BrowserRouter>
  );
}

export default App;