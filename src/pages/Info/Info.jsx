import './Info.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Info() {

    const URL = 'http://localhost:8080'
    const [info, setInfo] = useState(null)
    const [cityName, setCityName] = useState(null)

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
            <img className="info__img" src={info.city_info.web_url}/>
            <h1>Info Page</h1>
            {Object.keys(info).map(cat => {
                return (
                    <div className='info__cat' key={cat}>
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
            })}
        </main>
    )
}