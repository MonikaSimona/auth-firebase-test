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
import Footer from './Footer';
import SingleBlog from './SingleBlog';
import Contact from './Contact';
import About from './About';


function App() {

  return (
    <>
      <div className="wrapper">

        <Router>
          <Fragment>
            <AuthProvider>
              <Header />
              <Routes>
                <Route path="/" element={<PrivateRoute />}>
                  <Route path="/" element={<Dashboard />} />
                </Route>
                <Route path="/update-profile" element={<PrivateRoute />}>
                  <Route path="/update-profile" element={<UpdateProfile />} />
                </Route>
                <Route path="/blog/:id" element={<PrivateRoute />}>
                  <Route path="/blog/:id" element={<SingleBlog />} />
                </Route>
                <Route path="/contact" element={<PrivateRoute />}>
                  <Route path="/contact" element={<Contact />} />
                </Route>
                <Route path="/about" element={<PrivateRoute />}>
                  <Route path="/about" element={<About />} />
                </Route>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
              </Routes>
              <Footer />
            </AuthProvider>
          </Fragment>
        </Router>
      </div>

    </>
  );
}

export default App;
