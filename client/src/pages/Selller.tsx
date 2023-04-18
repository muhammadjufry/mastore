import SellerDashboard from "../components/Seller";
import React from "react";

type Props = {
  isUserLoggedIn: boolean;
};

function Seller({ isUserLoggedIn }: Props) {
  return <SellerDashboard />;
}

export default Seller;
