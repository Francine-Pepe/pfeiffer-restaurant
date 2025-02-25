
import { MantineProvider } from '@mantine/core'
import './styles/styles.sass';
import '@mantine/core/styles.css';
import { BrowserRouter, HashRouter } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Team from './pages/Team'
import RestaurantAreas from './pages/RestaurantAreas'
import CelebrationsAndRents from './pages/CelebrationsAndRents'
import Fireplace from './pages/Fireplace'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Navbar from './components/navbar/Navbar';
import { Navigation } from './data';

function App() {
 

  return (
    <>
        <HashRouter>
        <Navbar data={Navigation} />
          <Home />
          <Menu />
          <Team />
          <RestaurantAreas />
          <CelebrationsAndRents />
          <Fireplace />
          <Contact /> 
        </HashRouter>
        <Footer />
    </>
  )
}

export default App
