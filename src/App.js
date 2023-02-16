import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import UnderHeader from './components/UnderHeader/UnderHeader';

function App() {
  return (
    <div className="App">
      <Header />
      <UnderHeader />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product/:id' element={<div>Main</div>} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
      <footer></footer>
    </div>
  );
}

export default App;
