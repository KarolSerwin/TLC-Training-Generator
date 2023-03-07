import React, {useState} from "react";



const TrainingLevel = ({updateLevel}) => {

    const [level, setLevel] = useState("")
    const handleChange = (event) => {
        let valueToSave = event.target.value;
        setLevel(valueToSave)
        updateLevel(valueToSave)
    }


    return (
        <div>
            <label>LEVEL: </label>
            <select name="option" value={level} onChange={handleChange}>
                <option value="choose">choose</option>
                <option value="beginner">BEGINNER</option>
                <option value="intermediate">INTERMEDIATE</option>
                <option value="advanced">ADVANCED</option>

            </select>
            <a href="/">
                -- Verify your level --
            </a>

        </div>
    )
}

export {TrainingLevel}