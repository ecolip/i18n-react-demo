import './App.css';
import Menu from '../src/components/menu'
import { Routes, Route } from "react-router-dom";
import Home from './page/home';
import Post from './page/post';

function App() {
 
  return (
    <div className="App">
      <header>
        <nav>
          <Menu />
        </nav>
      </header>
     
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post' element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
