import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import AdminPage from './pages/AdminPage/AdminPage';
import { useEffect, useState } from 'react';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';
import CreateProduct from './pages/CreateProduct/CreateProduct';

function App() {
  const a = JSON.parse(localStorage.getItem('auth'))
  const [auth, setAuth] = useState(a);

  useEffect(() => {
    localStorage.setItem('auth', auth)
  }, [auth])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product/:id' element={<div>Main</div>} />
        <Route path='/login' element={<PublicRoute><LoginPage setAuth={setAuth} /></PublicRoute>} />
        <Route path='/admin' element={<PrivateRoute><AdminPage /></PrivateRoute>} />
        <Route path='/create-product' element={<PrivateRoute><CreateProduct /></PrivateRoute>} />
      </Routes>
      <footer></footer>
    </div >
  );
}

export default App;
