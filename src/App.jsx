import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Article from './Articles';

function App() {
  

  return (
    <>
    <div className="header">NC News</div>
    <BrowserRouter>
    <Link to="/articles">
      <button>Articles</button>
    </Link>
    <Routes>
      <Route path="/articles" element={<Article/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
