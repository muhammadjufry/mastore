import SellerDashboard from '../components/Seller'
import React from 'react'

interface Props {
  isUserLoggedIn: boolean
}

function Seller ({ isUserLoggedIn }: Props) {
  return <SellerDashboard />
}

export default Seller
