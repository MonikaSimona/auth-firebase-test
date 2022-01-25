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
import { Icon } from '@iconify/react';
import Contact from './Contact';
import About from './About';


function App() {
  // const scrollToTop = () => {
  //   console.log("click")
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth"
  //   });
  // }

  return (
    <>
      {/* <button className='up-to-top' onClick={() => scrollToTop()}><Icon className='up-to-top-icon' icon="akar-icons:circle-chevron-up" /></button> */}
      <div className="wrapper">

        <Router>
          <Fragment>
            <AuthProvider>
              <Header />
              <Routes>
                <Route exact path="/" element={<PrivateRoute />}>
                  <Route exact path="/" element={<Dashboard />} />
                </Route>
                <Route exact path="/update-profile" element={<PrivateRoute />}>
                  <Route exact path="/update-profile" element={<UpdateProfile />} />
                </Route>
                <Route exact path="/blog/:id" element={<PrivateRoute />}>
                  <Route exact path="/blog/:id" element={<SingleBlog />} />
                </Route>
                <Route exact path="/contact" element={<PrivateRoute />}>
                  <Route exact path="/contact" element={<Contact />} />
                </Route>
                <Route exact path="/about" element={<PrivateRoute />}>
                  <Route exact path="/about" element={<About />} />
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
