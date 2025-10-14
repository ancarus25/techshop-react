
import './App.css';
import{BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<h1>Home Page</h1>}/>
          <Route path='/about' element={<h1>About Page</h1>}/>
          <Route path='/contact' element={<h1>Contact Page</h1>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
