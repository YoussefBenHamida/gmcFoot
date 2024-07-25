import { Routes ,Route} from 'react-router-dom';
import './App.css';
import AppNavBar from './components/AppNavBar';
import Dashboard from './components/Dashboard';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAuthUser } from './redux/actions';
import Home from './components/Home';

function App() {
  const dispatch=useDispatch()

  const auth = () => dispatch(getAuthUser());

  useEffect(() => {
    auth();
  }, [dispatch]);

  return (
    <div className="App">
    <AppNavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard"  element={<Dashboard />} />
    </Routes>
    </div>
  );
}

export default App;
