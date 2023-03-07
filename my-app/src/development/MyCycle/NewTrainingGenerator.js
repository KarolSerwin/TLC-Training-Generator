import React from "react";

import {TrainingTime} from "./TrainingTime";
import {TrainingLevel} from "./TrainingLevel";
import {TrainingFocus} from "./TrainingFocus";
import {ButtonGenerate} from "./ButtonGenerate";

const NewTrainingGenerator = () => {



    return (
        <form>
            <h1>Select options for your Training</h1>
            <TrainingTime/>
            <TrainingLevel/>
            <TrainingFocus/>
            <ButtonGenerate/>
        </form>
    )
}

export {NewTrainingGenerator}