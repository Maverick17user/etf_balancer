
/* eslint-disable default-case */
import React, { useEffect, useRef, useState } from "react"

export default function Autocomplete({options, value, onChange}) {
    const [showOptions, setShowOptions] = useState(false)
    const [cursor, setCursor] = useState(-1)
    const ref = useRef();

    const select = option => {
        onChange(option)
        setShowOptions(false)
    }

    const handleChange = text => {
        onChange(text);
        setCursor(-1);
        if (!showOptions) {
            setShowOptions(true)
        }
    }

    const filteredOptions = options.filter(option => option.includes(value))

    const moveCursorDown = () => {
        if (cursor < filteredOptions.length - 1) {
            setCursor(c => c + 1)
        }
    }

    const moveCursorUp = () => {
        if (cursor > 0) {
            setCursor(c => c - 1)
        }
    }

    const handleNav = (e) => {
        switch (e.key) {
            case "ArrowUp":
                moveCursorUp();
                break;
            case "ArrowDown":
                moveCursorDown();
                break;
            case "Enter":
                if(cursor >= 0 && cursor < filteredOptions.length) {
                    select(filteredOptions[cursor]);
                }
                break;
        }
    }

    useEffect(() => {
        const listener = e => {
            if(!ref.current.contains(e.target)) {
                setShowOptions(false)
                setCursor(-1)
            }
        };
        
        document.addEventListener('click', listener)
        document.addEventListener('focusin', listener)
        return () => { 
            document.removeEventListener('click', listener); 
            document.removeEventListener('focusin', listener); 
        }
    },[]);

    // TODO: Refactor this ... beauty
    return (<div className="relative w-30 text-base" ref={ref} >
        <input type="text" className="w-full text-gray-700 border-2 px-4 py-2 outline-none rounded-lg" 
            value={value}
            onChange={e => handleChange(e.target.value)}
            onFocus={()=> setShowOptions(true)} 
            onKeyDown={handleNav}
        />
        <ul className={`z-50 text-gray-700 bg-white absolute w-full rounded-lg shadow-lg ${!showOptions && 'hidden'} select-none`}>
            {filteredOptions.length > 0 ? filteredOptions.map((option, i, arr) => {
                let className = "px-4 hover:bg-red-700"

                if(i === 0)
                    className += "pt-2 pb-1 rounded-t-lg"
                else if(i === arr.length)
                    className += "pt-1 pb-2 rounded-b-lg"
                else if(i ===0 && arr.length === 1)
                    className += "py-2 rounded-lg"
                else 
                    className += "py-1"

                if(cursor === i) {
                    className += "bg-gray-100"
                }

                return <li className={className} 
                    key={option}
                    onClick={() => select(option)}
                    >{option}</li>
            }) : <li className="px-4 py-2 text-gray-700">No results</li>}
            
        </ul>
    </div>)
}