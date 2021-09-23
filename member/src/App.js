// import logo from './logo.svg';
import './components/FontAwsomeIcons';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import Sidebar from './components/Sidebar';
import Coupon from './pages/Coupon';
import Login from './pages/Login';
import Login2 from './pages/Login2';
import MemberCenter from './pages/MemberCenter';
import MemberEdit from './pages/MemberEdit';
import Signup from './pages/Signup';
import PasswordEdit from './pages/PasswordEdit';

function App() {
  return (
    <Router>
      <>
        <MyNavbar />
        <Link to="/Login2">Login2</Link>
        <Link to="/Login2/Signup">Signup</Link>
        <Link to="/MemberCenter">MemberCenter</Link>

        <Switch>
          <Route path="/Login2/Signup">
            <Signup />
          </Route>
          <Route path="/Login2">
            <Login2 />
          </Route>
          <Route path="/MemberCenter/MemberEdit">
            <MemberEdit />
          </Route>
          <Route path="/MemberCenter/PasswordEdit">
            <PasswordEdit />
          </Route>
          <Route path="/MemberCenter/Coupon">
            <Coupon />
          </Route>
          <Route path="/MemberCenter">
            <MemberCenter />
          </Route>
        </Switch>
        <MyFooter />
      </>
    </Router>
  );
}

export default App;
