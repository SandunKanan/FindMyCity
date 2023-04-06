import './MultiSelect.scss'
import { useState, useEffect } from 'react'

export default function MulitSelect({label, options}) {

    const [selectOptions, setSelectOptions] = useState(options)

    useEffect (() => {
        if (!selectOptions) {
            setSelectOptions([
                {text: "Please Select", value: ""},
                {text: "Not Important", value: "Not"},
                {text: "Somewhat Important", value: "Some"},
                {text: "Very Important", value: "Very"},
            ])
        }
    }, [])

    if (!selectOptions) {
        return (
            <h1>Loading</h1>
        )
    }

    return (
        <div className='mSelect'>
            <label>{label}</label>
            <div className='mSelect__options-box'>
                {selectOptions.map(option => {
                    return (
                    <div className='mSelect__option'>
                        <label htmlFor={option.value}>{option.text}</label>
                        <input type="checkbox" value={option.value} name={option.text}/>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}