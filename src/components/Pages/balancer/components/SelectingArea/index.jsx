import React, { useState } from 'react'
import Autocomplete from '../../../../core/Autocomplete';

export default function SelectingArea() {
    const [selectedOption, setSelectedOption] = useState("");

    return (
        <div>
            <p>Select ETFs</p>
            <Autocomplete
                value={selectedOption}
                onChange={setSelectedOption}
                options={["SCHD", "VYM", "DGRO", "VTI", "VIG"]}
            />
        </div>
    )
}
