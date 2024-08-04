
import { useEffect } from 'react';
import './App.css'
import Header from './components/Header'
import { useDispatch } from 'react-redux'
import { addUser } from './redux/userSlice';
import Email from './components/Email';
interface UserResponse {
  name: string;
  username: string;
  email: string;
}
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1').then((response) => response.json())
      .then((data: UserResponse)=>dispatch(addUser(data)))
}, []);
return (
  <>
    <Header></Header>
    <Email></Email>
  </>
)
}

export default App
