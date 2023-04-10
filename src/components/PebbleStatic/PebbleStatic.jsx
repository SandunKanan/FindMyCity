import './PebbleStatic.scss'

export default function PebbleStatic({text}) {
    return (
        <article className='pebble-s pebble-s--active'>
            <h4>{text}</h4>
        </article>
    )
}