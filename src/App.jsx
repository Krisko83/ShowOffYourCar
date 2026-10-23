import { Route, Routes } from 'react-router'
import IsAuth from './components/route-guards/IsAuth.jsx'
import IsGuest from './components/route-guards/isGuest.jsx'
import About from './components/about/About.jsx'
import Gallery from './components/gallery/Gallery.jsx'
import Contacts from './components/contacts/Contacts.jsx'
import NotFound from './components/not-found/NotFound.jsx'
import Footer from './components/footer/Footer.jsx'
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'
import CarDetails from './components/car-details/CarDetails.jsx'
import CarEdit from './components/car-edit/CarEdit.jsx'
import CarAdd from './components/car-add/CarAdd.jsx'
import Profile from './components/profile/Profile.jsx'
import CarCommentedList from './components/car-commented/CarCommentedList.jsx'
import CarOwnedList from './components/car-owned/CarOwnedList.jsx'
import Login from './components/user/Login.jsx'
import Register from './components/user/Register.jsx'
import UserProvider from './components/contexts/UserContext.jsx'
import UserProfile from './components/profile/UserProfile.jsx'
import UserImageProvider from './components/contexts/UserImageContext.jsx'
import { ToastContainer } from 'react-toastify'
import Logout from './components/user/Logout.jsx'
import ScrollToTop from './components/scroll-to-top/ScrollToTop.jsx'


function App() {

  return (
    <UserImageProvider>
      <UserProvider>
        <Header />

        <Routes>
          <Route index element={<Home />} />
          <Route path='/cars/gallery' element={<Gallery />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/cars/:car_id/details' element={<CarDetails />} />

          <Route element={<IsGuest />}>
            <Route path='/cars/:car_id/edit' element={<CarEdit />} />
            <Route path='/cars/add-car' element={<CarAdd />} />
            <Route path='/user/profile' element={<Profile />} />
            <Route path='/user/owned-cars' element={<CarOwnedList />} />
            <Route path='/user/commented-cars' element={<CarCommentedList />} />
            <Route path='/user/user-profile/:commentOwnerId' element={<UserProfile />} />
            <Route path='/user/logout' element={<Logout />} />
          </Route>

          <Route path='/user' element={<IsAuth />}>
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
          </Route>

          <Route path='*' element={<NotFound />} />

        </Routes>

        <ToastContainer />
        <ScrollToTop />

        <Footer />
      </UserProvider>
    </UserImageProvider>
  )
}

export default App
