import './Recommendations.scss'
// import { useState, useEffect } from 'react'

export default function Recommendations() {

    // const [barcelonaPic, setBarcelonaPic] = useState(null)
    // const [ZurichPic, setZurichPic] = useState(null)
    // const [SydneyPic, setSydneyPic] = useState(null)

    const barcPic = "https://d13k13wj6adfdf.cloudfront.net/urban_areas/barcelona_web-8ce54f1421.jpg"
    const zuriPic = "https://d13k13wj6adfdf.cloudfront.net/urban_areas/zurich_web-f08acd93ea.jpg"
    const sydPic = "https://d13k13wj6adfdf.cloudfront.net/urban_areas/sydney_web-b47b8df85c.jpg"


    return (
        <main class="rec">
            <h1>Recommendations</h1>
            <p>Based on your inputs, here are a few options for you</p>
            <div className='rec__item'>
                <h3>Barcelona, Spain: 85% match</h3>
                <img className='rec__img' src={barcPic} alt='Barcelona' />
            </div>
            <div className='rec__item'>
                <h3>Zurich, Switzerland: 79% match</h3>
                <img className='rec__img' src={zuriPic} alt='Barcelona' />
            </div>
            <div className='rec__item'>
                <h3>Sydney, Australia: 75% match</h3>
                <img className='rec__img' src={sydPic} alt='Barcelona' />
                </div>
        </main>
    )
}