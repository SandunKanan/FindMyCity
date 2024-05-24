// import Select from '../Select/Select'
import './SubNav.scss'

export default function SubNav({section, setSection}) {
    return (
        <article className='sub'>
            <h3 onClick={() => {setSection('summary')}} className={section==='summary' ? `sub__nav-text sub__nav-text--active` : 'sub__nav-text'}>Summary</h3>
            <h3 onClick={() => {setSection('climate')}} className={section==='climate' ? `sub__nav-text sub__nav-text--active` : 'sub__nav-text'}>Climate</h3>
            {/* <h3 onClick={() => {setSection('costs')}} className={section==='costs' ? `sub__nav-text sub__nav-text--active` : 'sub__nav-text'}>Costs</h3> */}
            {/* <h3 onClick={() => {setSection('salaries')}} className={section==='salaries' ? `sub__nav-text sub__nav-text--active` : 'sub__nav-text'}>Salaries</h3> */}
            <h3 onClick={() => {setSection('healthcare')}} className={section==='healthcare' ? `sub__nav-text sub__nav-text--active` : 'sub__nav-text'}>Healthcare</h3>
            <h3 onClick={() => {setSection('safety')}} className={section==='safety' ? `sub__nav-text sub__nav-text--active` : 'sub__nav-text'}>Safety</h3>
            <h3 onClick={() => {setSection('environment')}} className={section==='environment' ? `sub__nav-text sub__nav-text--active` : 'sub__nav-text'}>Environment</h3>
            {/* <h3 onClick={() => {setSection('travel')}} className={section==='travel' ? `sub__nav-text sub__nav-text--active` : 'sub__nav-text'}>Travel</h3> */}
            <h3 onClick={() => {setSection('language')}} className={section==='language' ? `sub__nav-text sub__nav-text--active` : 'sub__nav-text'}>Languages</h3>
            {/* <Select /> */}
        </article>
    )
}
