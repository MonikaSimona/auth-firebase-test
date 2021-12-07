import '../style/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Signup } from './Signup';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Login } from './Login';
import Dashboard from './Dashboard';
import { useLocation } from 'react-router'
import { useEffect } from 'react';
import Header from './Header';
import { useAuth } from '../contexts/AuthContext'

function App() {


  return (
    <div className="wrapper">
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>

  );
}

export default App;
