import { Route, Routes } from 'react-router'

import IsAuth from './components/route-guards/IsAuth.jsx'
import IsGuest from './components/route-guards/isGuest.jsx'

import About from './components/about/About.jsx'
import Gallery from './components/gallery/Gallery.jsx'
import Contacts from './components/contacts/Contacts.jsx'
import AddCar from './components/add-car/AddCar.jsx'
import Login from './components/auth/Login.jsx'
import Register from './components/auth/Register.jsx'
import NotFound from './components/not-found/NotFound.jsx'
import Footer from './components/footer/Footer.jsx'
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'
import CarDetails from './components/car-details/CarDetails.jsx'





function App() {
  const user = true;

  return (
    <>
      <Header />

      <Routes>
        <Route index element={<Home />} />
        <Route path='/cars/gallery' element={<Gallery />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/cars/details' element={<CarDetails />} />

        <Route element={<IsGuest user={user} />}>
          <Route path='/cars/add-car' element={<AddCar />} />

        </Route>

        <Route path='/auth' element={<IsAuth user={user} />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>

        <Route path='*' element={<NotFound />} />

      </Routes>

      <Footer />
    </>
  )
}

export default App
