import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from './Components/Navbar';
import PuppyLovePage from './Pages/PuppyLovePage';
import LoginPage from './Pages/LoginPage';

function App() {
  return (
    <div>

      <Router>

        <Navbar />

        <Switch>
          <Route path="/puppy-love">
            <PuppyLovePage />
          </Route>
          <Route path="/">
            <LoginPage />
          </Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
