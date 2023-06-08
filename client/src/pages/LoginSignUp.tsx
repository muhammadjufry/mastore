import Header from '../components/HomePage/Header'
import LoginSignUpForm from '../components/LoginSignUp'

interface Props {
  isUserLoggedIn: boolean
}

function Login ({ isUserLoggedIn }: Props) {
  return (
    <>
      <Header isUserLoggedIn={isUserLoggedIn} />
      <div className="pageDefaultStyle">
        <div className="container">
          <LoginSignUpForm />
        </div>
      </div>
    </>
  )
}

export default Login
