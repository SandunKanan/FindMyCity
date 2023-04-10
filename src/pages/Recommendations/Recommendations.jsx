import './Recommendations.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'
import RecItem from '../../components/RecItem/RecItem';


export default function Recommendations({userData}) {
    
    const URL = 'http://localhost:8080'
    const [scoreData, setScoreData] = useState(null)

    useEffect(() => {
        if (userData) {
            axios.post(`${URL}/findmycity`, userData)
                .then(resp => {
                console.log(resp.data)
                setScoreData(resp.data)
                sessionStorage.setItem("respData", JSON.stringify(resp.data));
                sessionStorage.setItem("userData", JSON.stringify(userData));
            }).catch(error => console.log(error))
        } else if (sessionStorage.getItem("respData")) {
            setScoreData(JSON.parse(sessionStorage.getItem("respData")))
        }
    }, [userData])

    if (!userData && !sessionStorage.getItem("respData")) {
        return (
            <main>
                <h3>We do not currently have any recommendations for you. Please go to "Find my city"</h3>
            </main>
        )
    }

    if (!scoreData) {
        console.log()
        return <main>
            <h1>Loading</h1>
        </main>
    }

    return (
        <main className="rec">
            <h1>Recommendations</h1>
            <h2>Salary data</h2>
            <p>Based on your inputs, here are a few options for you</p>
            {scoreData.map(rec => <RecItem data={rec} key={rec.city_name} userData={userData} />)}
        </main>
    )
}