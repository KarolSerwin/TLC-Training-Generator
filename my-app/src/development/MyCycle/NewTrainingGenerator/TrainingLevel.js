import React from "react";


const TrainingLevel = ({updateLevel}) => {

    const handleChange = (event) => {
        let valueToSave = event.target.value;
        updateLevel("level", valueToSave)
    }

    return (
        <div className="trainingGenerator-form-param">
            <div>
                <span>LEVEL: </span>
                <select name="option"  onChange={handleChange}>
                    <option selected disabled value="choose">choose</option>
                    <option value="beginner">BEGINNER</option>
                    <option value="intermediate">INTERMEDIATE</option>
                    <option value="advanced">ADVANCED</option>

                </select>
            </div>
            <a href="/">
                -- Verify your level --
            </a>

        </div>
    )
}

export {TrainingLevel}