import React from 'react'
import { useGetExchangesQuery } from '../features/cryptoApi'
import Loader from './Loader';
import { useParams } from 'react-router-dom';

const Exchanges = () => {
  const { coinId } = useParams();
  const { data: exchanges, isFetching } = useGetExchangesQuery(coinId);

  if (isFetching) {
    return <Loader />
  }

  console.log(exchanges);
  return (
    <div>Exchanges</div>
  )
}

export default Exchanges