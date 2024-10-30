import React, { useContext, useEffect, useState } from 'react';
import Login from './assets/components/Auth/Login';
import EmployeeDashboard from './assets/components/Dashboard/EmployeeDashboard';
import AdminDashboard from './assets/components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (authData) {
      // Check if the user is an admin
      const admin = authData.admin.find((e) => email === e.email && password === e.password);
      if (admin) {
        setUser('admin');
        setLoggedInUserData(admin);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: admin }));
        return;
      }

      // Check if the user is an employee
      const employee = authData.employees.find((e) => email === e.email && password === e.password);
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
        return;
      }

      // If no match found
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : null}
      {user === 'admin' ? <AdminDashboard changeUser={setUser} data={loggedInUserData} /> : user === 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null}
    </>
  );
};

export default App;
