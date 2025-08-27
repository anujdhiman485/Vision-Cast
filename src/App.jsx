import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import GenerateImages from './pages/GenerateImages'
import GenerateVideos from './pages/GenerateVideos'
import PostOnInstagram from './pages/PostOnInstagram'
import PostOnX from './pages/PostOnX'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/ai' element={<Layout />}>
        <Route index element={<Dashboard/>}/>
        <Route path='generate-image' element={<GenerateImages/>}/>
        <Route path='generate-videos' element={<GenerateVideos/>}/>
        <Route path='post-insta' element={<PostOnInstagram/>}/>
        <Route path='post-x' element={<PostOnX/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
