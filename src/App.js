// import logo from './logo.svg';
import './index.css';
// import Navbar from './components/Navbar';
import About from './routes/About';
import Contact from './routes/Contact';
import Project from './routes/Project';
import Home from './routes/Home';
import Work from './components/Work';
import { Routes ,Route} from 'react-router-dom';
import ProjectSource from './components/ProjectSource';
// Routes
function App() {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/about' element={<About/>}></Route>
      <Route exact path='/contact' element={<Contact/>}></Route>
      <Route  path='/project' element={<Project/>}></Route>
      <Route  path='/project/placement-management-system' element={<ProjectSource/>}></Route>
      <Route  path='/project/student-logbook-management' element={<ProjectSource/>}></Route>
      <Route  path='/project/fodd-order-app' element={<ProjectSource/>}></Route>
      </Routes>
    </>
  );
}

export default App;
