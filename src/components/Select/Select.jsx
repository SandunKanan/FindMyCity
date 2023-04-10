import './Select.scss'
import { useState, useEffect } from 'react'

export default function Select({name, label, options}) {

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
    }, [selectOptions])

    if (!selectOptions) {
        return (
            <h1>Loading</h1>
        )
    }

    return (
        <div className='select'>
            <label className='select__label'>{label}</label>
            <select className="select__field" name={name} required>
                {selectOptions.map(option => <option key={option.value} value={option.value}>{option.text}</option>)}
            </select>
        </div>
    )
}