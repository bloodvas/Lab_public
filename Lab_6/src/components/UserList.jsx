import React, { useState } from "react";
import UserCard from "./UserCard";
import './UserList.css';

const UserList = (props) =>
{
    const [flag, setFlag] = useState(false)
    const [user, setUser] = useState([])

    console.log(user)

    let nextUser = (i) => {
        setUser([props.users[0][i]])
        setFlag({flag: true})
      }
      if (flag) {
          return(
            <div>
                <UserCard user={user}/>
                <div className="userList">
                    <button className="userBtn" onClick={() => nextUser(0)}>1</button>
                    <button className="userBtn" onClick={() => nextUser(1)}>2</button>
                    <button className="userBtn" onClick={() => nextUser(2)}>3</button>
                    <button className="userBtn" onClick={() => nextUser(3)}>4</button>
                    <button className="userBtn" onClick={() => nextUser(4)}>5</button>
                    <button className="userBtn" onClick={() => nextUser(5)}>6</button>
                    <button className="userBtn" onClick={() => nextUser(6)}>7</button>
                    <button className="userBtn" onClick={() => nextUser(7)}>8</button>
                    <button className="userBtn" onClick={() => nextUser(8)}>9</button>
                    <button className="userBtn" onClick={() => nextUser(9)}>10</button>
                </div>
            </div>)
      }else
        return (
            <div className="userList">
                <button className="userBtn" onClick={() => nextUser(0)}>1</button>
                <button className="userBtn" onClick={() => nextUser(1)}>2</button>
                <button className="userBtn" onClick={() => nextUser(2)}>3</button>
                <button className="userBtn" onClick={() => nextUser(3)}>4</button>
                <button className="userBtn" onClick={() => nextUser(4)}>5</button>
                <button className="userBtn" onClick={() => nextUser(5)}>6</button>
                <button className="userBtn" onClick={() => nextUser(6)}>7</button>
                <button className="userBtn" onClick={() => nextUser(7)}>8</button>
                <button className="userBtn" onClick={() => nextUser(8)}>9</button>
                <button className="userBtn" onClick={() => nextUser(9)}>10</button>
            </div>
        );
}

export default UserList;