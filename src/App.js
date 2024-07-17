import react from 'react'
import './App.css';
import SidebarApp from './components/navbar'
import FooterApp from './components/footer';
import Home from './views/home';
import Contact from './views/contact'
import Projects from './views/projects'
import Skills from './views/skills'
import { Route, Routes } from 'react-router-dom';
function App() {
  return (

    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/skills' element={<Skills/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
