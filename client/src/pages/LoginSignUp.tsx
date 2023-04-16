import Header from "../components/HomePage/Header";
import LoginSignUpForm from "../components/LoginSignUp";

type Props = {};

function Login({}: Props) {
  return (
    <>
      <Header />
      <div className="pageDefaultStyle">
        <LoginSignUpForm />
      </div>
    </>
  );
}

export default Login;
