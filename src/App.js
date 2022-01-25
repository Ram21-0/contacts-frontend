import { Route, Routes } from "react-router-dom"

import './App.css';
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import ContactsPage from "./components/contacts/ContactsPage";

import Root from "./components/Root";
import UserProfile from "./components/profile/UserProfile";

function App() {

    return (
        <Routes>
            <Route path="/" element={<Root/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/contacts/*" element = {<ContactsPage/>} />
            <Route path="/profile" element={<UserProfile/>} />
        </Routes>
    )
}

export default App;