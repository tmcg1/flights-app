import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Flights from './views/Flights/Flights';
import Seats from './views/Seats/Seats';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Flights />} />
          <Route path='/seats' element={<Seats />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
