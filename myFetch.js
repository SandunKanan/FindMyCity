const fs = require('fs');
const path = require('path');

myData = JSON.parse(fs.readFileSync('./public/data/city_seeds.json'));


const readJsonFile = (fileName) => {
  const filePath = path.join('./public/data', fileName);
  return JSON.parse(fs.readFileSync(filePath));
};

const cities = readJsonFile('city_seeds.json');
const citySizes = readJsonFile('citySize_seeds.json');
const images = readJsonFile('updated_image_seeds.json');
const salaries = readJsonFile('salary_seeds.json');
const categories = readJsonFile('category_seeds.json');
const climates = readJsonFile('climate_seeds.json');
const commutes = readJsonFile('commute_seeds.json');
const continents = readJsonFile('continent_seeds.json');
const costsOfLiving = readJsonFile('costOfLiving_seeds.json');
const countries = readJsonFile('country_seeds.json');
const enviroQualities = readJsonFile('enviroQuality_seeds.json');
const healthcare = readJsonFile('healthcare_seeds.json');
const housing = readJsonFile('housing_seeds.json');
const jobs = readJsonFile('job_seeds.json');
const languages = readJsonFile('language_seeds.json');
const percentiles = readJsonFile('percentile_seeds.json');
const safety = readJsonFile('safety_seeds.json');
const scores = readJsonFile('scores_seeds.json');
const summaries = readJsonFile('summary_seeds.json');
const travelConnectivity = readJsonFile('travelConnectivity_seeds.json');

full = {
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
  percentiles,
  safety,
  scores,
  summaries,
  travelConnectivity,
};

console.log(Object.keys(full));
// fs.writeFileSync('allData.json', JSON.stringify(full, null, 2));
