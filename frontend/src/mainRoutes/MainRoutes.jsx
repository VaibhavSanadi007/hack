import {Route, Routes} from 'react-router-dom'
import Home from '../components/Home'
import ProductDetail from '../components/ProductDetail'
import Auth from '../components/Auth'
import About from '../components/About'
import Mouse from '../components/Mouse/Mouse'
import Keyboard from '../components/Keyboard/Keyboard'
import Deskmat from '../components/Deskmat/Deskmat'
import MouseDetail from '../components/MouseDetail/MouseDetail'
import KeyDetail from '../components/Keydetail/KeyDetail'
import DeskmatDetail from '../components/DeskmatDetail/DeskmatDetail'
import Login from '../components/auth/Login'
const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/mouse' element={<Mouse/>} />
      <Route path='/mousedetail/:id' element={<MouseDetail/>} />
      <Route path='/keyboard' element={<Keyboard/>} />
      <Route path='/keydetail/:id' element={<KeyDetail/>} />
      <Route path='/deskmat' element={<Deskmat/>} />
      <Route path='/matdetail/:id' element={<DeskmatDetail/>} />
      <Route path='/productdetail' element={<ProductDetail/>} />
      <Route path='/auth' element={<Auth/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
  )
}
export default MainRoutes