import React from "react";

function Child(props) {
    return (
        <div>
            <h1>{props.fullName}</h1>
            <h1>{props.profession}</h1>
            <h1>{props.bio}</h1>
            <img src={props.imgSrc} alt="myprofile" />
        </div>
    );
}

export default Child;
