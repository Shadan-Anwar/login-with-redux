
import './App.css';
import Log from './Log'
import LogOut from './LogOut';
import {  useSelector } from 'react-redux/es/hooks/useSelector';


function App() {

  const user = useSelector (store=>store.userSlice.user)

  return (
    
    <div className="App">
    {
      user ? <LogOut/> : <Log/>
    }
      
    </div>
  );
}

export default App;
