import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { searchForShows, searchForPeople } from './../api/tvmaze';
import SearchForm from '../components/SearchForm';
import ShowsGrid from '../components/shows/ShowsGrid';
import ActorsGrid from '../components/actors/ActorsGrid';
const Home = () => {
  const [filter, setFilter] = useState(null);
  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ['search', filter],
    queryFn: () =>
      filter.searchOption === 'shows'
        ? searchForShows(filter.q)
        : searchForPeople(filter.q),
    //disabled as long as the filter  is empty
    enabled: !!filter,
    refetchOnWindowFocus: false,
  });
  // const [apiDataError, setApiDataError] = useState(null);
  // const [apiData, setApiData] = useState(null);

  const onSearch = async ({ q, searchOption }) => {
    setFilter({ q, searchOption });
    //   try {
    //     setApiDataError(null);
    //     if (searchOption === 'shows') {
    //       const result = await searchForShows(q);
    //       setApiData(result);
    //     } else {
    //       const result = await searchForPeople(q);
    //       setApiData(result);
    //     }
    //   } catch (error) {
    //     setApiDataError(error);
    //   }
  };
  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error Occurred:{apiDataError.message}</div>;
    }
    // // Optional Chaining
    if (apiData?.length === 0) {
      return <div>No results</div>;
    }
    if (apiData) {
      return apiData[0].show ? (
        <ShowsGrid shows={apiData} />
      ) : (
        <ActorsGrid actors={apiData} />
      );
    }
    return null;
  };

  return (
    <div>
      <SearchForm onSearch={onSearch} />
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
