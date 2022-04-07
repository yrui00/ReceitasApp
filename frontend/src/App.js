import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminHomeScreen from './screens/admin/HomeScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <main>
          <Routes>
            <Route path="/admin/*" element={<AdminHomeScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div >
    </BrowserRouter>
  );
}

export default App;
