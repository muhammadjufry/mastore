import ForgotPasswordForm from '../components/ForgotPassword'

interface Props {
  isUserLoggedIn: boolean
}

function ForgotPassword ({ isUserLoggedIn }: Props) {
  return (
    <div className="pageDefaultStyle">
      <ForgotPasswordForm />
    </div>
  )
}

export default ForgotPassword
