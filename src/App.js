import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainComponent from '../src/Component/MainComponent.js';
import {BrowserRouter } from 'react-router-dom';
import myStore from './Redux/Store';
import { Provider } from 'react-redux';
function App() {
  return (
    <div className="App">
      <Provider store={myStore}>
        <BrowserRouter>
          <MainComponent></MainComponent>
        </BrowserRouter>
      </Provider>
      
    </div>
  );
}

export default App;
