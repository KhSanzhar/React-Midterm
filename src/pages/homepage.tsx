import React, { useState } from "react"

export function Homepage() {

    const [find, setFind] = useState('')

    return(
        <div className="container mx-auto max-w-2xl pt-10 pb-16 px-6">
            <div className="border rounded">
                <input type="text" placeholder="Post..." onChange={(event) => setFind(event.target.value)}/>
            </div>


            

        </div>
    )
}