import './Pebble.scss'

export default function Pebble({text, isActive, setIsActive}) {

    function setActive() {
        if (!isActive) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }

    return (
        <article onClick={setActive} className={isActive ? 'pebble pebble--active' : 'pebble'}>
            <h4>{text}</h4>
        </article>
    )
}