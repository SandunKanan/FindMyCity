import './Button.scss'

export default function Button({text, size}) {
    return (
        <button className='btn btn--large'>{text}</button>
    )
}