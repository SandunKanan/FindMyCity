import './PebbleStatic.scss'

export default function PebbleStatic({text, good}) {
    return (
        <article className={good ? 'pebble-s pebble-s--active' : 'pebble-s pebble-s--bad'}>
            <h4>{text}</h4>
        </article>
    )
}