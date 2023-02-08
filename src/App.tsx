import React from 'react';
import './App.css';
import Header from './components/Header';
import Landing from './screens/Landing';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import ProjectsList from './components/ProjectsList';
import About from './screens/About';


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Header/>

        <Routes >
          <Route path ="/Portfolio-II" element={<Landing />} />
          <Route path ="/projects" element={<ProjectsList />} />
          <Route path ="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
