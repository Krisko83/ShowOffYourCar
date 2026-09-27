import { Route, Routes } from 'react-router'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Banner from './components/Banner.jsx'
import Gallery from './components/Gallery.jsx'
import About from './components/About.jsx'
import Contact from './components/Contacts.jsx'
import AddCar from './components/AddCar.jsx'
import NotFound from './components/NotFound.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Home from './components/Home.jsx'
import IsAuth from './utils/isAuth.jsx'
import IsGuest from './utils/isGuest.jsx'




function App() {
const user = true;

  return (
    <>
      <Header />

      <Routes>
        <Route index element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contact />} />

        <Route element={<IsGuest user={user} />}>
          <Route path='/add-car' element={<AddCar />} />

        </Route>

        <Route element={<IsAuth user={user} />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>

        <Route path='*' element={<NotFound />} />

      </Routes>
      <Banner />
      <Footer />
    </>
  )
}

export default App
