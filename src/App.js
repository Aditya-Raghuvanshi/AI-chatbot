import { Provider } from 'react-redux';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import store from './constants/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Navbar/>
      <Login/>
    </div>
    </Provider>
  );
}

export default App;
