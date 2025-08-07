import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.scss';
import { SuspenseLoader } from './components';

const Login = React.lazy(() => import('./screens/Login'));
const Register = React.lazy(() => import('./screens/Register'));
const VerifyOtp = React.lazy(() => import('./screens/Auth/VerifyOtp'));
const Dashboard = React.lazy(() => import('./screens/Dashboard'));
const NotFound = React.lazy(() => import('./components/NotFound'));

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<SuspenseLoader />}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
          <Route path="/learning/*" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </React.Suspense>
    </div>
  );
}

export default App;
