import React from 'react'
// import { Row, Select, Typography, Col, Card, Avatar } from 'antd'
// import moment from 'moment/moment'
import { useGetCryptoNewsQuery } from '../features/cryptoNewsApi';

// const { Text, Title } = Typography;
// const { Option } = Select;


const News = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count });
  console.log(cryptoNews);
  return (
    <>

    </>
  )
}

export default News