import './RecItem.scss'
import parse from 'html-react-parser';
import { useEffect } from 'react';
import PebbleStatic from '../PebbleStatic/PebbleStatic';
import { useNavigate } from 'react-router-dom';

export default function RecItem({data, userData}) {
    const navigate = useNavigate()
    const {city_data, goodCats, badCats} = data
    const mapping = {
        cleanAir: "CLEAN AIR",
        cleanWater: "CLEAN WATER",
        lowCrime: "SAFETY",
        healthCare: "HEALTHCARE",
        enviroQuality: "CLEAN ENVIRONMENT",
        edu: "EDUCATION",
        internet: "INTERNET",
        tolerant: "TOLARANCE",
        carFree: "CAR-FREE LIFE",
        lowTraffic: "LOW TRAFFIC",
        culture: "CULTURE",
        smallCity: "SMALL CITY",
        midSize: "MID-SIZE CITY",
        largeCity: "LARGE CITY",
        costLiving: "COST OF LIVING",
        costRent: "COST OF RENT",
        ratio: "INCOME/COST RATIO",
        lowTaxes: "LOW TAXES",
    }

    useEffect (() => {
        if (!userData) {
            userData = JSON.parse(sessionStorage.getItem("userData"))
        } else {
            console.log(userData)
            console.log(data)
        }
    }, [userData])


    function goToInfo() {
        const url_path = city_data.city_name.toLowerCase().replaceAll(",", "").replaceAll(" ", "-").replaceAll(".", "").replaceAll("galway", "gaillimh")
        navigate(`/info/${url_path}`)
    }


    return (
        <div key={city_data.city_name} className='item'>
            <img onClick={goToInfo} className='item__img' src={city_data.mob_url} alt={`${city_data.city_name} cityscape`} />
            <div className='item__content'>
                <h3 className='item__cityName'>{city_data.city_name}, {city_data.country}</h3>
                <p className='item__text'>{parse(city_data.summary.replaceAll("</p>", "").split("<p>")[1])}</p>
                <p className='item__text'><b>Expected Income: ${city_data.salary} USD/year</b> for <b>{city_data.title}s</b> with 3-7 years experience. </p>
                <p className='item__text'><b>Cost of Living: ${city_data.total_cost ? (city_data.total_cost*12).toFixed(2) : '0'} USD/year</b> on average, giving an <b>income to cost ratio of {city_data.ratio ? city_data.ratio.toFixed(2) : '0'}</b></p>
                <p className='item__text'><b>Why we selected this city (Scores out of 10):</b></p>
                <div className='item__pebbles'>
                    {Object.keys(goodCats).map(key => {
                        return <PebbleStatic good={true} text={`${mapping[key]}: ${Number(goodCats[key]).toFixed(2)}`} />
                    })}
                </div>
                {Object.keys(badCats).length>0 && <p className='item__text'><b>Note: This city rates poorly in the following categories:</b></p>}
                <div className='item__pebbles'>
                    {Object.keys(badCats).map(key => {
                        return <PebbleStatic good={false} text={`${mapping[key]}: ${Number(badCats[key]).toFixed(2)}`} />
                    })}
                </div>
            </div>
        </div>
    )
}
