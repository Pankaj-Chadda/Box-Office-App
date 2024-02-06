import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
import { getShowById } from '../api/tvmaze';
import { useQuery } from '@tanstack/react-query';
// const useShowByID = showId => {
//   const [showData, setShowData] = useState(null);
//   const [showError, setShowError] = useState(null);
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const data = await getShowById(showId);
//         setShowData(data);
//       } catch (err) {
//         setShowError(err);
//       }
//     }
//     fetchData();
//   }, [showId]);
// };
const Show = () => {
  const { showId } = useParams();
  // const { showData, showError } = useShowByID(showId);
  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowById(showId),
  });
  console.log(showData);
  if (showData) {
    return <div>Got show data:{showData.name}</div>;
  }
  if (showError) {
    return <div>We have an error:{showError.message}</div>;
  }

  return <div>Data is loading</div>;
};

export default Show;
