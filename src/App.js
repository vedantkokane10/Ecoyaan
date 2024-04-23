import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {Footer} from './components/Footer/Footer';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import {About} from './pages/about/About'
import {Home} from './pages/home/Home'

function App() {
  return (
    <div >
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/home' exact element={<Home />}/>
          <Route path='/about' exact element={<About />}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
