import React from "react"
import { Navigation } from "./components/Navigation"
import { Route, Routes } from "react-router-dom"
import { Homepage } from "./pages/homepage"
import { PostsPage } from "./pages/postspage"
import { ProfilePage } from "./pages/profilepage"

function App() {
  return(
    <>
      <Navigation />
        <Routes>
          <Route path="/" element={ <Homepage /> } />
          <Route path="/posts" element={ <PostsPage /> } />
          <Route path="/profile" element={ <ProfilePage />} />
        </Routes>
    </>
  )
}