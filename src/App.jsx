import React, { useContext, useEffect, useState } from 'react';
import Login from './assets/components/Auth/Login';
import EmployeeDashboard from './assets/components/Dashboard/EmployeeDashboard';
import AdminDashboard from './assets/components/Dashboard/AdminDashboard';
import { setLocalStroage } from './utils/LocalStrorage';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      try {
        const userData = JSON.parse(loggedInUser);
        setUser(userData.role);
        setLoggedInUserData(userData.data || null);
      } catch (error) {
        console.error("Error parsing loggedInUser from localStorage:", error);
        setUser(null);
        setLoggedInUserData(null);
      }
    } else {
      setLocalStroage();
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === 'admin@example.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    } else {
      const employee = userData?.find((e) => e.email === email && e.password === password);
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
      } else {
        alert("Invalid Credentials");
      }
    }
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      try {
        const user = JSON.parse(loggedInUser);
        if (user?.data) {
          const employee = userData?.find((e) => e.firstName === user.data.firstName);
          if (employee) setLoggedInUserData(employee);
        }
      } catch (error) {
        console.error("Error parsing loggedInUser on update:", error);
      }
    }
  }, [userData]);

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <AdminDashboard changeUser={setUser} />}
      {user === 'employee' && <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />}
    </>
  );
};

export default App;
