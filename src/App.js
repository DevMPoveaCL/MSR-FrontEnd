import React from "react";

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { HomePage, LoginPage, RegisterPage, MainView, ProfilePage } from "./pages";


import RedditPage from "./pages/RedditPage/RedditPage";
import Post1Blog from "./pages/RedditPage/RedditPostPages/Post1Blog";
import Post2Blog from "./pages/RedditPage/RedditPostPages/Post2Blog";
import Post3Blog from "./pages/RedditPage/RedditPostPages/Post3Blog";
import Post4Blog from "./pages/RedditPage/RedditPostPages/Post4Blog";
import UsuarioComponent from "./components/TodoComponents/UsuarioComponent";


const App = ()=>{
  return (
    <BrowserRouter basename="/MSR-FrontEnd">
      <Routes>
        <Route exact path = "/" element={<HomePage/>}/>
        <Route path = "/MSR-FrontEnd/Login" element={<LoginPage/>}/>
        <Route path = "/MSR-FrontEnd/Register" element={<RegisterPage/>}/>
        <Route path = "/MSR-FrontEnd/MainView" element={<MainView/>}/>
        <Route path = "/MSR-FrontEnd/Profile" element={<ProfilePage/>}/>
        <Route path = "/MSR-FrontEnd/Reddit" element={<RedditPage/>} />
        <Route path = "/MSR-FrontEnd/Post1" element={<Post1Blog/>} />
        <Route path = "/MSR-FrontEnd/Post2" element={<Post2Blog/>} />
        <Route path = "/MSR-FrontEnd/Post3" element={<Post3Blog/>} />
        <Route path = "/MSR-FrontEnd/Post4" element={<Post4Blog/>} />
        <Route path = "/MSR-FrontEnd/Todo" element={<UsuarioComponent/>} />


      </Routes>
    </BrowserRouter>
  )
}
export default App;