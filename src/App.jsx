import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar'
import Main from './Components/main/Main';
import Comment from './Pages/comment/Comment';


export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/comment/:id' element={<Comment />} />
      </Routes>
    </div>
  )
}
