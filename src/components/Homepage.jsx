import React from 'react'
import { Typography, Row, Col, Statistic } from 'antd'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Cryptocurrencies} from '../components'

import { useGetCryptosQuery } from '../features/cryptoApi'
import Loader from './Loader'

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) {
    return <Loader />
  }

  return (
    <>
      <Typography.Title level={2} className="heading">
        Global Crypto Stats
      </Typography.Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title="Total 24h volume" value={millify(globalStats.total24hVolume)} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
      </Row>
      <div className="home-heading-container">
        <Typography.Title level={3} className="home-title">
          Top 10 cryptocurrencies in the world
        </Typography.Title>
        <Typography.Title level={4} className="show-more">
          <Link to="/cryptocurrencies">Show more</Link>
        </Typography.Title>
      </div>
      <Cryptocurrencies simplified={true} />
    </>
  )
}

export default Homepage