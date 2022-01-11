import React from "react";

const UserAvatar = (props) => {
    return (
        <div className="simple-img">
            <img src={props.url} />
        </div>
    );
};

export default UserAvatar;