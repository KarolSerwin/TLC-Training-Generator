import React, {useState} from "react";


const TrainingFocus = ({updateFocus}) => {

    const [focus, setFocus] = useState("")
    const handleChange = (event) => {
        let valueToSave = event.target.value;
        setFocus(valueToSave)
        updateFocus(valueToSave)
    }


    return (
        <div>
            <label>FOCUS: </label>
            <select name="option" value={focus} onChange={handleChange}>
                <option value="choose">choose</option>
                <option value="technical">Technical</option>
                <option value="jump">Jump</option>
                <option value="endurance">Endurance</option>
            </select>
            <a href="/">
                -- Learn about training focus --
            </a>
        </div>
    )
}

export {TrainingFocus}