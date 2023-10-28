import React, { useState } from 'react';



export function CreatePost() {
    const ImageForm = () => {
        const [description, setDescription] = useState('');
        const [image, setImage] = useState(null);
        const [preview, setPreview] = useState(null);

        const handleChange = (e: any) => {
            if (e.target.name === 'image') {
                setPreview(URL.createObjectURL(e.target.files[0]));
            }
            setImage(e.target.files[0]);
            setDescription(e.target.value);
        };

        const handleSubmit = (e: any) => {
            e.preventDefault();

            setImage(null);
            setPreview(null);
            setDescription('');
        };

        return (
            <div className="image-form">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        className="border py-2 px-4 mb-2 w-full outline-0"
                        placeholder="Enter description"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                    <input 
                        type="file"
                        name="image"
                        onChange={handleChange}
                    />
                    {preview && <img src={preview} alt="preview" />}
                    <button type="submit">Add image</button>
                </form>
            </div>
        );
    };
}
