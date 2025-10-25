import './App.css';
import Users from "./components/Users/Users.jsx";
import { useState, useEffect } from "react";  
import {Success} from './components/Success/Success.jsx';


function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [isInvites, setIsInvites] = useState([]);
  const [success, setSuccess] = useState(false);

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  }

  const onClickInvites = (id) => {
    if (isInvites.includes(id)) {
        setIsInvites(prev => prev.filter(_id => _id !== id))
    } 
    else {
        setIsInvites(prev => [...prev, id]);
    }
  }

  const onClickSendInvites = () => {
    setSuccess(true);
  }

  useEffect(() => {
    try{
      fetch('https://reqres.in/api/users', {
        headers: {
          'x-api-key': 'reqres-free-v1'
        }
      })
      .then(res => res.json())
      .then(json => {
        setUsers(json.data);
      })
      .catch((err) => {
        console.log(err); 
      })
    }
    finally {  
        setIsLoading(false);
    } 
  }, []);

  return (
    <div className="App">
      {success ? <Success count={isInvites.length} /> : <Users items={users} isLoading={isLoading} searchValue={searchValue} onChangeSearchValue={onChangeSearchValue} onClickInvites={onClickInvites} isInvites={isInvites} onClickSendInvites={onClickSendInvites} />}
    </div>
  );
}

export default App;
