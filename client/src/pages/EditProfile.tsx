import EditUserProfile from "../components/EditProfile";

type Props = {
  isUserLoggedIn: boolean;
};

function EditProfile({ isUserLoggedIn }: Props) {
  return <EditUserProfile isUserLoggedIn={isUserLoggedIn} />;
}

export default EditProfile;
