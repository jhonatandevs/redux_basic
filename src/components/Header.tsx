import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
const Header = () => {
    const user = useSelector((state: RootState) => state.user)
  return (
    <header>
      <h1>Redux ToolKit Example</h1>
      <ul>
        <li>Name:  {user.name}</li>
        <li>Email: {user.email} </li>
        <li>Username {user.username}</li>
      </ul>
    </header>
  )
}

export default Header
