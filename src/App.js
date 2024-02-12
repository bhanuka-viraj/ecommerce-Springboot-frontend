import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Item from './pages/Item';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Category from './pages/Category';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/items/:id' element={<Item/>}/>
          <Route path='/categories' element={<Categories/>}/>
          <Route path='/categories/:id' element={<Category/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
