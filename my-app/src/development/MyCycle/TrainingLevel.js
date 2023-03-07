import React from "react";



const TrainingLevel = () => {


    return (
        <div>
            <label>LEVEL: </label>
            <select>
                <option>BEGINNER</option>
                <option>INTERMEDIATE</option>
                <option>ADVANCED</option>

            </select>
            <a href="/">
                -- Verify your level --
            </a>

        </div>
    )
}

export {TrainingLevel}