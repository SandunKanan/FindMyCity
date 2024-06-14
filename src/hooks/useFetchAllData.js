import { useState, useEffect } from 'react';

const useFetchAllData = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const allData = await fetch('/allData.json').then(res => res.json());

      setData(allData);
    }

    fetchData();
  }, [])

  return data;
};

export default useFetchAllData;
