import ForgotPasswordForm from "../components/ForgotPassword";

type Props = {
  isUserLoggedIn: boolean;
};

function ForgotPassword({ isUserLoggedIn }: Props) {
  return (
    <div className="pageDefaultStyle">
      <ForgotPasswordForm />
    </div>
  );
}

export default ForgotPassword;
