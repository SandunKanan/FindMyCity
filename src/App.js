import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import FindMyCity from './pages/FindMyCity/FindMyCity';
import Compare from './pages/Compare/Compare';
import Info from './pages/Info/Info';

import './App.scss';
import Header from './components/Header/Header';
import Recommendations from './pages/Recommendations/Recommendations';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/findmycity' element={<FindMyCity />} />
        <Route path='/recommendations' element={<Recommendations />} />
        <Route path='/compare' element={<Compare />} />
        <Route path='/info' element={<Info />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
