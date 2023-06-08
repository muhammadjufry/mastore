import UserDashboard from '../components/User'

interface Props {
  isUserLoggedIn: boolean
}

function User ({ isUserLoggedIn }: Props) {
  console.log(isUserLoggedIn)
  if (!isUserLoggedIn) {
    window.location.href = '/'
    return <p>Please login first</p>
  }
  return <UserDashboard isUserLoggedIn={isUserLoggedIn} />
}

export default User
