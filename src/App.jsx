import { Route, Routes } from 'react-router'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Banner from './components/Banner.jsx'
import Gallery from './components/Gallery.jsx'
import About from './components/About.jsx'
import Contact from './components/Contacts.jsx'
import AddCar from './components/AddCar.jsx'
import NotFound from './components/NotFound.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
 



function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route index element={<Main />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contact />} />
        <Route path='/add-car' element={<AddCar />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />


        <Route path='*' element={<NotFound />} />

      </Routes>
      <Banner />
      <Footer />
    </>
  )
}

export default App
