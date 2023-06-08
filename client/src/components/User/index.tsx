import { Link, redirect } from 'react-router-dom'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import HelpIcon from '@mui/icons-material/Help'
import ChatIcon from '@mui/icons-material/Chat'
import PaymentsIcon from '@mui/icons-material/Payments'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout'
import BlankProfilePic from '../../assets/images/user-profile-images/empty-profile-picture.jpg'
import {
  UserDashboardHeader,
  UserProfileInfo,
  UserDashboardBody
} from './index.styles'

import PageHeader from '../PageHeader'
interface Props {
  isUserLoggedIn: boolean
}

function Index ({ isUserLoggedIn }: Props) {
  const { name, following, follower } = JSON.parse(
    localStorage.getItem('userInfo')!
  )[0]

  const logout = () => {
    localStorage.removeItem('userInfo')
    localStorage.removeItem('user-token-login')

    redirect('/')
  }

  return (
    <>
      <PageHeader withCartIcon={false} isUserLoggedIn={isUserLoggedIn} />
      <div style={{ padding: '0 20px' }}>
        <div className="container">
          <UserDashboardHeader>
            <div className="row2">
              <div className="userProfile">
                <img
                  src={BlankProfilePic}
                  alt="empty-profile-picture"
                  className="userProfileImg"
                />
                <UserProfileInfo>
                  <h4 className="userProfileName">{name}</h4>
                  <span>
                    {follower} Followers | {following} Following
                  </span>
                </UserProfileInfo>
              </div>
              <ModeEditIcon />
            </div>
          </UserDashboardHeader>
          <UserDashboardBody>
            <ul className="links">
              <li>
                <Link to="/user/setting">
                  Account setting <SettingsIcon />
                </Link>
              </li>
              <li>
                <Link to="/user/edit-profile">
                  Edit profile <ModeEditIcon />
                </Link>
              </li>
              <li>
                <Link to="/user/order">Orders</Link>
              </li>
              <li>
                <Link to="/user/cart">
                  Cart <ShoppingCartIcon />
                </Link>
              </li>
              <li>
                <Link to="/user/payment">
                  Payment <PaymentsIcon />
                </Link>
              </li>
              <li>
                <Link to="/user/message">
                  Chat <ChatIcon />
                </Link>
              </li>
              <li>
                <Link to="/user/become-seller">Become seller</Link>
              </li>
              <li>
                <Link to="/user/help">
                  Help <HelpIcon />
                </Link>
              </li>
              <li onClick={() => { logout() }}>
                <Link to="/">
                  Logout <LogoutIcon />
                </Link>
              </li>
            </ul>
          </UserDashboardBody>
        </div>
      </div>
    </>
  )
}

export default Index
