
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './components/page/home/Home';
import Coffee from './components/page/coffee/Coffee'
import Service from './components/page/service/Service';
import Icon from './components/Iconbot/Icon';
import Gallery from './components/page/gallery/Gallery';
import Team from './components/page/team/Team';
import 'swiper/css';



function App() {
  return (
    <BrowserRouter> 
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Coffee' element={<Coffee/>}/>
        <Route path='/Service' element={<Service/>}/>
        <Route path='/Gallery' element={<Gallery/>}/>
        <Route path='/Team' element={<Team/>}/>
      </Routes>
      <Icon/>
    </BrowserRouter>

  );
}

export default App;
