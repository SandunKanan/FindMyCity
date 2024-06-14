import { useState, useEffect } from 'react';

const useFetchData = () => {
  const [data, setData] = useState({
    cities: [],
    citySizes: [],
    images: [],
    salaries: [],
    categories: [],
    climates: [],
    commutes: [],
    continents: [],
    costsOfLiving: [],
    countries: [],
    enviroQualities: [],
    healthcare: [],
    housing: [],
    jobs: [],
    languages: [],
    percetiles: [],
    safety: [],
    scores: [],
    summaries: [],
    travelConnectivity: [],
    // ...add other JSON data arrays here
  });

  useEffect(() => {
    const fetchData = async () => {
      const cities = await fetch('/assets/data/city_seeds.json').then(res => res.json());
      const citySizes = await fetch('/assets/data/citySize_seeds.json').then(res => res.json());
      const images = await fetch('/assets/data/updated_image_seeds.json').then(res => res.json());
      const salaries = await fetch('/assets/data/salary_seeds.json').then(res => res.json());
      const categories = await fetch('/assets/data/category_seeds.json').then(res => res.json());
      const climates = await fetch('/assets/data/climate_seeds.json').then(res => res.json());
      const commutes = await fetch('/assets/data/commute_seeds.json').then(res => res.json());
      const continents = await fetch('/assets/data/continent_seeds.json').then(res => res.json());
      const costsOfLiving = await fetch('/assets/data/costOfLiving_seeds.json').then(res => res.json());
      const countries = await fetch('/assets/data/country_seeds.json').then(res => res.json());
      const enviroQualities = await fetch('/assets/data/enviroQuality_seeds.json').then(res => res.json());
      const healthcare = await fetch('/assets/data/healthcare_seeds.json').then(res => res.json());
      const housing = await fetch('/assets/data/housing_seeds.json').then(res => res.json());
      const jobs = await fetch('/assets/data/job_seeds.json').then(res => res.json());
      const languages = await fetch('/assets/data/language_seeds.json').then(res => res.json());
      const percetiles = await fetch('/assets/data/percetile_seeds.json').then(res => res.json());
      const safety = await fetch('/assets/data/safety_seeds.json').then(res => res.json());
      const scores = await fetch('/assets/data/score_seeds.json').then(res => res.json());
      const summaries = await fetch('/assets/data/summary_seeds.json').then(res => res.json());
      const travelConnectivity = await fetch('/assets/data/travelConnectivity_seeds.json').then(res => res.json());

      setData({
        cities,
        citySizes,
        images,
        salaries,
        categories,
        climates,
        commutes,
        continents,
        costsOfLiving,
        countries,
        enviroQualities,
        healthcare,
        housing,
        jobs,
        languages,
        percetiles,
        safety,
        scores,
        summaries,
        travelConnectivity
      });
    };

    fetchData();
  }, []);

  return data;
};

export default useFetchData;
