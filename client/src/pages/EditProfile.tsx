import EditUserProfile from '../components/EditProfile'

interface Props {
  isUserLoggedIn: boolean
}

function EditProfile ({ isUserLoggedIn }: Props) {
  return <EditUserProfile isUserLoggedIn={isUserLoggedIn} />
}

export default EditProfile
