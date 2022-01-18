import { BrowserRouter as Router ,Switch ,Route} from "react-router-dom"
import Header from "./components/Header";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component ={LandingPage}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/cts" component ={Contact}></Route>
          <Route path="/myProfile" component={MyProflie}></Route>
        </Switch>
      </div>
      <Header/>
      <Routes>

        <Route path="/" element={<Link to="/contacts">Link</Link>}>  </Route>
        <Route path="/contacts"/>
      </Routes>
  </Router>
  );
}

export default App;
