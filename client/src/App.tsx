// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, About } from '@pages/index';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
