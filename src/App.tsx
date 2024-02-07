import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import AppRoutes from './routes/app.routes';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import Loader from './core/compoents/Loader';
import { useEffect } from 'react';

function App() {



  const token = useSelector((s: RootState) => s.user.token)
  const fact = useSelector((s: RootState) => s.user.fact)
  const isFactLoading = useSelector((s: RootState) => s.user.isFactloading)

  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate('/login')

  }


  return (
    <div className="App">
      {isFactLoading ? <Loader/> : fact}
      <hr/>

      <Link to={'/dashboard'}>Dashboard</Link>
      <Link to={'/inventory'}>Inventory</Link>
      <button onClick={logout}>LOGOUT</button>
      <hr />
      <AppRoutes />
    </div>
  );
}

export default App;
