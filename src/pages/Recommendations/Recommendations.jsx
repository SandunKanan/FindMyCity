import './Recommendations.scss'
import { useEffect, useState } from 'react'
import useFetchData from '../hooks/useFetchData';
import { calculateTotalScore } from '../utils/utils';
import RecItem from '../../components/RecItem/RecItem';

const Recommendations = ({ userData }) => {
  const data = useFetchData();
  const [scoreData, setScoreData] = useState(null);

  useEffect(() => {
    if (userData && data.cities.length) {
      const recommendations = runCalculations(userData, data);
      setScoreData(recommendations);
      sessionStorage.setItem("respData", JSON.stringify(recommendations));
      sessionStorage.setItem("userData", JSON.stringify(userData));
    } else if (sessionStorage.getItem("respData")) {
      setScoreData(JSON.parse(sessionStorage.getItem("respData")));
    }
  }, [userData, data]);

  const runCalculations = (userData, data) => {
    const revMapping = {
      "AIR_POLLUTION_TELESCORE": "cleanAir",
      "DRINKING_WATER_QUALITY_TELESCORE": "cleanWater",
      "Healthcare": "healthcare",
      "Travel Connectivity": "carFree",
      "Education": "edu",
      "Internet Access": "internet",
      "Tolerance": "tolerant",
      "smallScore": "smallCity",
      "medScore": "midSize",
      "largeScore": "largeCity",
      "Commute": "lowTraffic",
      "Leisure & Culture": "culture",
      "Cost of Living": "costLiving",
      "Housing": "costRent",
      "ratioScore": "ratio",
      "Environmental Quality": "enviroQuality",
      "Taxation": "lowTaxes",
      "Safety": "lowCrime",
    };

    const cityScores = data.cities.map(city => {
      // Fetch and calculate scores for each city
      const citySize = data.citySizes.find(cs => cs.city_id === city.city_id);
      const cityImage = data.images.find(img => img.city_id === city.city_id);
      const citySalary = data.salaries.find(sal => sal.city_id === city.city_id);

      // Calculate total score using a utility function
      const scores = []; // fetch and calculate scores
      const { total_score, max_score, goodCats, badCats } = calculateTotalScore(scores, userData, revMapping);

      return { city, total_score, max_score, goodCats, badCats, citySize, cityImage, citySalary };
    });

    // Sort and get top recommendations
    const sortedRecommendations = cityScores.sort((a, b) => b.total_score - a.total_score).slice(0, 10);
    return sortedRecommendations;
  };

  if (!userData && !sessionStorage.getItem("respData")) {
    return (
      <main>
        <h3>We do not currently have any recommendations for you. Please go to "Find my city"</h3>
      </main>
    )
  }

  if (!scoreData) {
    return (
      <main>
        <h1>Loading</h1>
      </main>
    );
  }

  return (
    <main className="rec">
      <h1>Recommendations</h1>
      <p>Based on your inputs, here are a few options for you</p>
      {scoreData.map((rec, index) => (
        <RecItem rank={index + 1} data={rec} key={rec.city.city_id} userData={userData} />
      ))}
    </main>
  );
};

export default Recommendations;
