import './Info.scss'
import parse from 'html-react-parser';
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import SubNav from '../../components/SubNav/SubNav';

export default function Info() {

    const URL = 'http://localhost:8080'
    const [info, setInfo] = useState(null)
    const [cityName, setCityName] = useState(null)

    const [section, setSection] = useState('summary')

    const params = useParams()

    useEffect(() => {
        if (params.city) {
            setCityName(params.city)
        } else {
            setCityName('toronto')
        }
    }, [])

    useEffect(() => {
        if (cityName) {
            axios.get(`${URL}/info/${cityName}`)
            .then(resp => {
                setInfo(resp.data)
            })
        }
    }, [cityName])

    if (!info) {
        return (
            <main>
                <h1>Loading</h1>
            </main>
        )
    }

    return (
        <main className="info">
            <div className='info__img' style={{ backgroundImage: `url(${info.city_info.web_url})` }}>
                <div className='info__title-box'>
                    <h1 className='info__title'>{info.city_info.city_name}</h1>
                </div>
            </div>
            <SubNav section={section} setSection={setSection} />
            <section className="info__content">

            {/* Summary section */}
            {section==='summary' && <>
                <h2 className='info__sec-title'>Summary</h2>
                <p className='info__text info__text--big'><b>Location: </b>{info.city_info.country}, {info.city_info.continent}</p>
                <p className='info__text'>{parse(info.city_info.summary)}</p>
                {/* {Object.keys(info.city_info).map(item => {
                                return (
                                    <div className='info__item' key={item}>
                                        <h3>{item}</h3>
                                        <p>{info.city_info[item]}</p>
                                    </div>
                                )
                            })} */}
                </>
            }

            {/* Climate */}
            {section==='climate' && <>
                <h2 className='info__sec-title'>Climate</h2>
                <p className='info__text info__text--big'><b>Average day length: </b>{Number(info.climate.WEATHER_AV_DAY_LENGTH).toFixed(1)} hours</p>
                <p className='info__text info__text--big'><b>Average Temperatures</b></p>
                <p className='info__text info__text--big'><b>High: </b>{Number(info.climate.WEATHER_AVERAGE_HIGH).toFixed(1)} <span>&#8451;</span> <b> Low: </b>{Number(info.climate.WEATHER_AVERAGE_LOW).toFixed(1)} <span>&#8451;</span></p>
                {/* {Object.keys(info.climate).map(item => {
                                return (
                                    <div className='info__item' key={item}>
                                        <h3>{item}</h3>
                                        <p>{info.climate[item]}</p>
                                    </div>
                                )
                            })} */}
            </>}

            {/* Healthcare */}
            {section==='healthcare' && <>
                <h2 className='info__sec-title'>Healthcare</h2>
                <p className='info__text info__text--big'><b>Healthcare Cost score: </b>{info.healthcare.HEALTHCARE_COST_TELESCORE*100}%</p>
                <p className='info__text info__text--big'><b>Healthcare Quality score: </b>{info.healthcare.HEALTHCARE_QUALITY_TELESCORE*100}%</p>
                <p className='info__text info__text--big'><b>Life Expectancy: </b>{info.healthcare.HEALTHCARE_LIFE_EXPECTANCY} years</p>
                <p className='info__text info__text--big'><b>Life Expectancy score: </b>{info.healthcare.HEALTHCARE_LIFE_EXPECTANCY_TELESCORE*100}%</p>
            </>}



            {/* Safety */}
            {section==='safety' && <>
                <h2 className='info__sec-title'>Safety</h2>
                <p className='info__text info__text--big'><b>Crime rate: </b>{100-info.safety.CRIME_RATE_TELESCORE*100}%</p>
                <p className='info__text info__text--big'><b>Gun death rate: </b>{info.safety.GUN_DEATH_RATE}%</p>
                <p className='info__text info__text--big'><b>Gun ownership rate: </b>{info.safety.GUN_OWNERSHIP}%</p>
            </>}

            {/* Environment */}
            {section==='environment' && <>
                <h2 className='info__sec-title'>Environment</h2>
                <p className='info__text info__text--big'><b>Air quality score: </b>{info.enviro.AIR_POLLUTION_TELESCORE*100}%</p>
                <p className='info__text info__text--big'><b>Drinking water quality score: </b>{info.enviro.DRINKING_WATER_QUALITY_TELESCORE*100}%</p>
                <p className='info__text info__text--big'><b>Cleanliness score: </b>{info.enviro.CLEANLINESS_TELESCORE*100}%</p>
                <p className='info__text info__text--big'><b>Urban greenery score: </b>{(Number(info.enviro.URBAN_GREENERY_TELESCORE).toFixed(1))*100}%</p>
            </>}

            {/* Language */}
            {section==='language' && <>
                <h2 className='info__sec-title'>Languages</h2>
            <p className='info__text info__text--big'><b>Main Spoken Languages: </b>{info.language.SPOKEN_LANGUAGES}</p>
            <p className='info__text info__text--big'><b>English Skills Score: </b>{info.language.ENGLISH_SKILLS_DETAIL}%</p>
            </>}
            </section>
                {/* {Object.keys(info).map(cat => {
                    return (
                        <div className='info__category-box' key={cat}>
                            <h2>{cat}</h2>
                            {Object.keys((info[cat])).map(item => {
                                return (
                                    <div className='info__item' key={item}>
                                        <h3>{item}</h3>
                                        <p>{info[cat][item]}</p>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })} */}
        </main>
    )
}
