import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './assets/context/UserContextProvider'
import Login from './assets/context/components/Login'
import Profile from './assets/context/components/Profile'

function App() {

  return (
<UserContextProvider>

<div>Sanskar Jaiswal</div>
<Login></Login>
<Profile></Profile>
</UserContextProvider>


   
  )
}

export default App
