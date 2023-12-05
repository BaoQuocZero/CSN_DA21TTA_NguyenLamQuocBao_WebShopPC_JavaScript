import './App.scss';

import Home from './HomePage/Home';
import ListSanPham from './SanPham/ListSanPham';
import ChiTietSanPham from './ChiTietSanPham/ChiTietSanPham';
import Sliders from './Slider/Sliders';
import Slider from './Slider/Slider';

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
              <Slider />
            </Route>
            <Route path="/SanPham/:id">
              <ChiTietSanPham />
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
