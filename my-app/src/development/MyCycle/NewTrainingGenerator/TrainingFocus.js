import React from "react";


const TrainingFocus = ({updateFocus}) => {

    const handleChange = (event) => {
        let valueToSave = event.target.value;
        updateFocus("focus", valueToSave)
    }


    return (
        <div className="trainingGenerator-form-param">
            <div>
                <span>FOCUS: </span>
                <select name="option"   onChange={handleChange}>
                    <option selected disabled value="choose">choose</option>
                    <option value="technical">Technical</option>
                    <option value="jump">Jump</option>
                    <option value="endurance">Endurance</option>
                </select>
            </div>
            <a href="/" >
                -- About training focus --
            </a>
        </div>
    )
}

export {TrainingFocus}