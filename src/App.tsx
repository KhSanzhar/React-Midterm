import React from "react"
import { Navigation } from "./components/Navigation"
import { Route, Routes } from "react-router-dom"
import { Homepage } from "./pages/homepage"
import { ProfilePage } from "./pages/profilepage"
import { CreatePost } from "./components/CreatePost"

function App() {
  return(
    <>
      <Navigation />
        <Routes>
          <Route path="/" element={ <Homepage /> } />
          <Route path="/posts" element={ <CreatePost /> } />
          <Route path="/profile" element={ <ProfilePage />} />
        </Routes>
    </>
  )
}