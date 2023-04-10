import './RecItem.scss'
import parse from 'html-react-parser';
import { useEffect } from 'react';
import PebbleStatic from '../PebbleStatic/PebbleStatic';

export default function RecItem({data, userData}) {
    const {city_data} = data

    useEffect (() => {
        if (!userData) {
            userData = JSON.parse(sessionStorage.getItem("respData"))
        }
    }, [userData])

    return (
        <div className='item'>
            <img className='item__img' src={city_data.mob_url} alt={`${city_data.city_name} cityscape`} />
            <div className='item__content'>
                <h3 className='item__cityName'>{city_data.city_name}, {city_data.country}</h3>
                <p className='item__text'>{parse(city_data.summary.replaceAll("</p>", "").split("<p>")[1])}</p>
                <p className='item__text'><b>Expected Income: ${city_data.salary} USD/year</b> for <b>{city_data.title}s</b> with 3-7 years experience. </p>
                <p className='item__text'><b>Cost of Living: ${city_data.total_cost ? (city_data.total_cost*12).toFixed(2) : '0'} USD/year</b> on average, giving an <b>income to cost ratio of {city_data.ratio ? city_data.ratio.toFixed(2) : '0'}</b></p>
                <p><b>Why we selected this city:</b></p>
                <div class='item__pebbles'>
                    <PebbleStatic text='Cost of Living' />
                </div>
            </div>
        </div>
    )
}

// city_name
// : 
// "Singapore"
// continent
// : 
// "Asia"
// country
// : 
// "Singapore"
// mob_url
// : 
// "https://d13k13wj6adfdf.cloudfront.net/urban_areas/singapore-ec606a40aa.jpg"
// percentile
// : 
// "percentile_25"
// ratio
// : 
// 0.6755000472073355
// ratio_score
// : 
// 1.6226415094339623
// salary
// : 
// "28904.62"
// summary
// : 
// "<p> Singapore is the <b>futuristic bridge</b> between East and West. It is an attractive site for <b>startups</b>, offering access to capital and a highly qualified workforce. When it comes to culture, the city is a dense mix of Chinese, Indian and Malay as well as Western influences. Despite Singapore’s high urban density, it remains as one of the <b>greenest cities</b> in the world—nearly half of its compact land area is filled with lush greenery.</p> <p>Singapore is one of the top ten city matches for 42.0% of FindMyCity users.</p>"
// title
// : 
// "Web Developer"
// total_cost
// : 
// "3565.83"