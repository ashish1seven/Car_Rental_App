import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbaar from './components/Navbaar';

import AdminPanel from './pages/AdminPanel';
import Add from './pages/Add';
import Update from './pages/Update';


function App() {
  return (
    <>
      <Navbaar />
      <BrowserRouter>
        <Routes>
          <Route path='/admin' element={<AdminPanel />} />
          <Route path='/add' element={<Add/>} />
          <Route path='/update/:id' element={<Update/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
