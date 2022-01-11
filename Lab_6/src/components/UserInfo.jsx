import React from "react";

const UserInfo = (props) => {

    const user = props.user;

    return (
        <div className="card-info">
            <p>{'fullname: '+ user.fullname}</p>
            <p>{'adress: '+ user.address}</p>
            <p>{'gender: '+ user.gender}</p>
            <p>{'birth: '+ user.birth}</p>
            <p>{'age: '+ user.age}</p>
            <p>{'email: '+ user.email}</p>
            <p>{'number: '+ user.phone}</p>
        </div>
    )
}

export default UserInfo;