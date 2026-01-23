import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Sidebar from './components/Sidebar';
import { Provider } from 'react-redux';
import store from '../src/utils/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
