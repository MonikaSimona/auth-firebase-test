import '../style/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Signup } from './Signup';
import { AuthProvider } from '../contexts/AuthContext';
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { Login } from './Login';
import Dashboard from './Dashboard';
import { Fragment } from 'react';
import Header from './Header';
import PrivateRoute from './PrivateRoute';
import { ForgotPassword } from './ForgotPassword';
import { UpdateProfile } from './UpdateProfile';

function App() {


  return (
    <div className="wrapper">
      <Router>
        <Fragment>
          <AuthProvider>
            <Header />
            <Routes>
              {/* <PrivateRoute exact path="/" element={<Dashboard />} /> */}
              <Route exact path="/" element={<PrivateRoute />}>
                <Route exact path="/" element={<Dashboard />} />
              </Route>
              <Route exact path="/update-profile" element={<PrivateRoute />}>
                <Route exact path="/update-profile" element={<UpdateProfile />} />
              </Route>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </AuthProvider>
        </Fragment>
      </Router>
    </div>

  );
}

export default App;
