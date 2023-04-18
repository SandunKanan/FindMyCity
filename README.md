# FindMyCity

### Formerly MyGlobalHome
This project is the frontend implementation of FindMyCity, a platform that helps people make informed decisions about which city to move to. The frontend is built with React and utilizes Axios for making API requests to the backend.

Backend: https://github.com/SandunKanan/FindMyCity-server

## Tech Stack
- React
- Axios

## Pages:
#### Home
The home page is the landing page of the website. It includes a brief description of the platform and some visuals to grab the user's attention.

#### Find My City
The Find My City page allows the user to enter their preferences for their ideal city, such as budget constraints, area of work, and desired lifestyle type. Once the user submits their preferences, they will be taken to the Recommendations page.

#### Recommendations
The Recommendations page displays the top 5 suggested cities based on the user's preferences. For each city, there is a summary, information about salary and cost of living, and an explanation of why the city was selected. The backend calculates scores for each city based on the user's preferences.

#### City Info
The City Info page displays detailed information about a particular city, such as rental prices, cost of living, employment opportunities based on demand, lifestyle, and barriers to moving there.

## Installation
To install and run the frontend locally, follow these steps:

#### Clone the repository

Copy code
git clone https://github.com/your-username/FindMyCity.git

cd FindMyCity

npm i 
npm start
