import logo from './logo.svg';
import './App.scss';


import MyComponent from './Example/MyComponent';
import ListTodo from './Todos/ListTodo';
import Home from './HomePage/Home';
import ListSanPham from './SanPham/ListSanPham';

import Sliders from './Slider/Sliders';

//Thư viện
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

/**
 * 2 components: class components / function components (function , arrow)
 */



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/test">
              <Sliders />
            </Route>
          </Switch>

        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
