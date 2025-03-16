import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Nav from './Component/Nav';
import Home from './Component/Home';
import Profile from './Component/Profile';
import PaymentPage from './Component/PaymentPage';
import LoginPage from './Component/LoginPage';
import Feed from './Component/Feed';
import Nnav from './Component/Nnav';
import Nhome from './Component/Nhome';
import Food from './Component/Food';
import Medicine from './Component/Medicine';
import About from './Component/About';
import Contact from './Component/Contact';
import Services from './Component/Services';
import Cart from './Component/Cart';
import JobApplication from './Component/JobApplication';
import TermsAndConditions from './Component/TermsAndConditions';





function App() {
  return (
    <div className="App">
      <Nav/>
      <Nnav/>
    <Routes>

    <Route path="/" element={<Navigate to="/home" />} />

    <Route path='/home' element={<Home/>} />
   
    <Route path='/profile' element={<Profile/>} />

    <Route path='/payment' element={<PaymentPage/>}/>

    <Route path='/login' element={<LoginPage/>}/>

    <Route path='/feedback' element={<Feed/>}/>

    <Route path='/nhome' element={<Nhome/>}/>
    
    <Route path='/food' element={<Food/>}/>

    <Route path='/medicine' element={<Medicine/>}/>

    <Route path='/about' element={<About/>}/>

    <Route path='/contact' element={<Contact/>}/>

    <Route path='/services' element={<Services/>}/>

    <Route path='/cart' element={<Cart/>}/>

    <Route path='/form' element={<JobApplication/>}/>

    <Route path='/terms' element={<TermsAndConditions/>}/>







    </Routes>
    </div>
  );
}

export default App;
