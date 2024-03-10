import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from './pages/Dashboard';
import Homepage from './pages/Homepage';
import Register from './pages/Signup';
import Login from './pages/Login';
import SubmissionForm from './pages/Forms/SingupDetails';
import ApplicationForm from './pages/Forms/ApplicationForm';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-info" element={<SubmissionForm />} />
          <Route path="/application-form" element={<ApplicationForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
