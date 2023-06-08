import React from 'react'
import Payment from '../components/Payment'

interface Props {
  isUserLoggedIn: boolean
}

function Index ({ isUserLoggedIn }: Props) {
  return <Payment />
}

export default Index
