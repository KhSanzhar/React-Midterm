import React, { useState } from "react"
import { Post } from "../models"


interface CreatePostProps {
    onCreate: (post: Post) => void
}
export function CreatePost({ onCreate }: CreatePostProps) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    
    return (
        <form onSubmit={ submitHandler }>
            <input 
                type="text"
                className="border py-2 px-4 mb-2 w-full outline-0"
                placeholder="Enter title for post..."
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <input 
                type="text"
                className="border py-2 px-4 mb-2 w-full outline-0"
                placeholder="Enter description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <input
                type="text" 
                
            />
        </form>
    )

}