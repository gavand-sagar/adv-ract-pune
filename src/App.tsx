import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import AppRoutes from './routes/app.routes';

function App() {

  const navigate = useNavigate();

  function logout(){
    localStorage.clear();
    navigate('/login')

  }


  return (
    <div className="App">
      <Link to={'/dashboard'}>Dashboard</Link>
      <Link to={'/inventory'}>Inventory</Link>
      <button onClick={logout}>LOGOUT</button>
      <hr/>
      <AppRoutes/>
    </div>
  );
}

export default App;
