import './Recommendations.scss';
import { useEffect } from 'react';
import useFetchAllData from '../../hooks/useFetchAllData';

const Recommendations = () => {
  const data = useFetchAllData();

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (!Object.keys(data).length) {
    return <main><h1>Loading...</h1></main>;
  }

  return (
    <main className="rec">
      <h1>Recommendations</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre> {/* Display the data for now */}
    </main>
  );
};

export default Recommendations;
