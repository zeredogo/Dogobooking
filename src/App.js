import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './component/home/Home';
import List from './component/list/List';
import Hotel from './component/hotel/Hotel';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hotels' element={<List/>}/>
        <Route path='/hotels/:id' element={<Hotel/>}/>
      </Routes>
    </Router>
  );
}

export default App;
