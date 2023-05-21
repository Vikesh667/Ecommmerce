import './App.css';
import Footer from './component/Footer';
import Nav from './component/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './component/SignUp';
function App() {
  return (
     <div className='App'>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<h1>Products</h1>}/>
        <Route path='/add' element={<h1>Add Products</h1>}/>
        <Route path='/update' element={<h1>Update Products</h1>}/>
        <Route path='/profile' element={<h1>Profile</h1>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
