import './Input.scss'

export default function Input({name, label, placeholder}) {

    return (
        <div className='input'>
            <label className='input__label'>{label}</label>
            <input className='input__input' name={name} type="text" placeholder={placeholder} required/>
        </div>
    )
}