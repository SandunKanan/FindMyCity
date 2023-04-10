import axios from 'axios'
import Input from '../../components/Input/Input'
import Select from '../../components/Select/Select'
import './FindMyCity.scss'
import { useNavigate } from 'react-router-dom'
import Pebble from '../../components/Pebble/Pebble'
import { useState, useEffect } from 'react'

export default function FindMyCity({setUserData}) {

    const URL = 'http://localhost:8080'

    const navigate = useNavigate()

    const [cleanAir, setCleanAir] = useState(false)
    const [cleanWater, setCleanWater] = useState(false)
    const [healthCare, setHealthCare] = useState(false)
    const [lowCrime, setLowCrime] = useState(false)
    const [carFree, setCarFree] = useState(false)
    const [edu, setEdu] = useState(false)
    const [internet, setInternet] = useState(false)
    const [tolerant, setTolerant] = useState(false)
    const [smallCity, setSmallCity] = useState(false)
    const [midSize, setMidSize] = useState(false)
    const [largeCity, setLargeCity] = useState(false)
    const [lowTraffic, setLowTraffic] = useState(false)
    const [culture, setCulture] = useState(false)
    const [costLiving, setCostLiving] = useState(false)
    const [costRent, setCostRent] = useState(false)
    const [ratio, setRatio] = useState(false)
    const [enviroQuality, setEnviroQuality] = useState(false)
    const [lowTaxes, setLowTaxes] = useState(false)

    // const [budget, setBudget] = useState("")
    // const [job, setJob] = useState("")
    // const [exp, setExp] = useState("")

    const [jobsList, setJobsList] = useState(null)

    const expList = [
        {text: "Please Select", value: ""},
        {text: "0-3 years", value: "percentile_25"},
        {text: "3-7 years", value: "percentile_50"},
        {text: "7+ years", value: "percentile_75"},
    ]

    // get list of jobs to populate as options
    useEffect(() => {
        axios.get(`${URL}/jobs`)
            .then(resp => {
                const list = resp.data
                const jobs_options = list.map(job => {
                    return {text: job, value: job}
                })
                jobs_options.unshift({text: "Please Select", value: ""})
                setJobsList(jobs_options)
            })
    }, [])


//     {"color": "#f1351b","name": "Outdoors","score_out_of_10": 4.13}
//        cleanAir,
//        cleanWater,
//        costRent,
//        salaryToCostOfLiving,
//        salary,

    function createPost(data) {

        return {
            carFree,
            cleanAir,
            cleanWater,
            costLiving,
            costRent,
            healthCare,
            smallCity,
            midSize,
            largeCity,
            lowCrime,
            lowTraffic,
            ratio,
            edu,
            culture,
            internet,
            tolerant,
            enviroQuality,
            role: data.role.value,
            exp: data.exp.value
        }
    }

    function wait(time) {
        return new Promise(resolve => {
        setTimeout(resolve, time);
        });
    }

    // wait 0.5sec before returning home for better UX
    async function goToRecs() {
        await wait(250);
        navigate('/recommendations');
    }

    function handleSubmit(e) {
        e.preventDefault()
        const post = createPost(e.target)
        setUserData(post)
        goToRecs()
    }

    const pebbles = [
        {
            category: "Quality of Life",
            data: [
                {text: 'CLEAN AIR', state: cleanAir, setState: setCleanAir},
                {text: 'CLEAN WATER', state: cleanWater, setState: setCleanWater},
                {text: 'LOW CRIME', state: lowCrime, setState: setLowCrime},
                {text: 'HEALTHCARE', state: healthCare, setState: setHealthCare},
                {text: 'CLEAN ENVIRONNEMT', state: enviroQuality, setState: setEnviroQuality},
                {text: 'GOOD EDUCATION', state: edu, setState: setEdu},
                {text: 'GOOD INTERNET', state: internet, setState: setInternet},
                {text: 'TOLERANT SOCIETY', state: tolerant, setState: setTolerant},
            ]
        },
        {
            category: "Lifestyle",
            data: [
                {text: 'CAR-FREE LIFE', state: carFree, setState: setCarFree},
                {text: 'LOW TRAFFIC', state: lowTraffic, setState: setLowTraffic},
                {text: 'LEISURE & CULTURE', state: culture, setState: setCulture},
            ]
        },
        {
            category: "City Size",
            data: [
                {text: 'SMALL CITY/ TOWN', state: smallCity, setState: setSmallCity},
                {text: 'MID-SIZE CITY', state: midSize, setState: setMidSize},
                {text: 'LARGE CITY/ METROPOL', state: largeCity, setState: setLargeCity}
            ]
        },
        {
            category: "Living Costs",
            data: [
                {text: 'LOW COST OF LIVING', state: costLiving, setState: setCostLiving},
                {text: 'LOW RENT', state: costRent, setState: setCostRent},
                {text: 'HIGH SALARY/COST OF LIVING RATIO', state: ratio, setState: setRatio},
                {text: 'LOW TAXES', state: lowTaxes, setState: setLowTaxes}
            ]
        }
    ]

    if (!jobsList) {
        return (
            <h1>Loading</h1>
        )
    }

    return (
        <main className='find'>
            <h1 className='find__title'>Find my City</h1>
            <h2 className='find__subtitle'>What are you looking for in a home city?</h2>
            <form className='form' onSubmit={handleSubmit}>
                {pebbles.map(pebble_cat => {
                    return (
                        <section key={pebble_cat.category} className='form__pebble-div'>
                            <h3 className='form__pebble-label'>{pebble_cat.category}</h3>
                            <div className='form__pebble-box'>
                                {pebble_cat.data.map((pebble) => <Pebble key={pebble.text} text={pebble.text} isActive={pebble.state} setIsActive={pebble.setState} />)}
                            </div>
                        </section>
                    )
                })}

                <h2 className='find__subtitle'>Your current situation</h2>
                {/* <Input  name='budget' label="What is your budget? (USD per month)" placeholder={'Monthly Budget'} /> */}
                <Select name='role' label="What is your current role?" options={jobsList}/>
                <Select name='exp' label="How many years experience do you have?" options={expList}/>

                {/* Submit Button */}
                <button className='form__btn'>Submit</button>
            </form>
        </main>
    )
}
