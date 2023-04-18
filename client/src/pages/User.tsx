import React from "react";
import UserDashboard from "../components/User";

type Props = {
  isUserLoggedIn: boolean;
};

function User({ isUserLoggedIn }: Props) {
  return <UserDashboard isUserLoggedIn={isUserLoggedIn} />;
}

export default User;
