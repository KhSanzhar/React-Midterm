import React from "react";
import { Post } from "../models";

interface PostProps {
    post: Post
}
export function Post({ post }: PostProps) {
    
    return(
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img src={ post.image }></img>
            <p>{ post.description }</p>
        </div>
    )
}