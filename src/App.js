import logo from './logo.svg';
import './App.css';
import Header from "./components/header.js"
import Headerphoto from './components/headerphoto';
import Gucci from './components/Gucci';
import Product from './components/product';
// import Dropdown1 from './components/dropdown1';

export const App = () => {
  return (
    <div>
  <Header />
  <Headerphoto />
  <Gucci/>
  <Product />
  {/* <Dropdown1/> */}
</div>

  );
};

export default App;
