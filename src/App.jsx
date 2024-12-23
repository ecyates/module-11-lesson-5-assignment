import { useState } from 'react';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import ComicList from './components/ComicList';
import ComicDetail from './components/ComicDetail';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AppStyles.css';

const App =()=> {
  return (
    <>    
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/characters/' element={<CharacterList/>}/>
        <Route path='/characters/:id' element={<CharacterDetail/>}/>
        <Route path='/comics/' element={<ComicList/>}/>
        <Route path='/comics/:id' element={<ComicDetail/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App;
