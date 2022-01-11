import React from "react";
import UserAvatar from "./UserAvatar";
import UserInfo from "./UserInfo";

const UserCard = (props) => {
    return (
        <div className="simple">
            <UserAvatar url={props.user[0].avaUrl} />
            <UserInfo user={props.user[0]} />
        </div>
    );
};

export default UserCard;