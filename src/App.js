import { Link, BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Link to="/contacts">Link</Link>}>  </Route>
        <Route path="/contacts"/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
