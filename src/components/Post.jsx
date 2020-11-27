import React from "react";

const Post = (props) => {

    return (
        <div>
            <img src={props.url} />
            <h2>{props.description}</h2>
        </div>
    )
}

export default Post;