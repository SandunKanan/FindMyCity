import './Input.scss'

export default function Input({name, label, placeholder}) {

    return (
        <div className='input'>
            <label>{label}</label>
            <input name={name} type="text" placeholder={placeholder} />
        </div>
    )
}