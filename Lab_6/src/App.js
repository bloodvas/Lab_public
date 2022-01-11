import React, {useState } from 'react';
import UserList from './components/UserList';
import './styles/App.css';

function App() {

 const [users, setUsers] = useState([])
 const [flag, setFlag] = useState(false)

     const Fetch = () => {
      const numbers = 10;
          const url = `https://randomuser.me/api/?results=${numbers}`;
          fetch(url)
              .then((result) => result.json())
              .then((result) => {
                let stateClone = users.slice();
                  result.results.map((user, i) => {
                      stateClone[i] = {
                          Id: i,
                          avaUrl: user.picture.large,
                          fullname: `${user.name.first} ${user.name.last}`,
                          address: `${user.location.city} ${user.location.street.name} ${user.location.street.number}`,
                          gender: user.gender,
                          birth: user.dob.date, 
                          age: user.dob.age,
                          email: user.email,
                          phone: user.phone,
                      };
                    })
                    setUsers([...users, stateClone])
                  setFlag({flag: true})
              })
    }


      if (!flag) {
        return (
          <div className="main-card">
            <button className="btn" onClick={() => Fetch()}>LESGO</button>
          </div>
        )
      } else {
        return (
            <div className="main-card">
              <UserList users={users}/>
            </div>
        )
      }
}

export default App;


