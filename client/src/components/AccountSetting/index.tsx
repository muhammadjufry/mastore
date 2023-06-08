import PageHeader from '../PageHeader'
import { UserSettingLists } from './index.styles'

interface Props {}

function Index ({}: Props) {
  return (
    <>
      <PageHeader pageName="Setting" withCartIcon={true} />
      <div style={{ padding: '0 20px' }}>
        <div
          className="container pageDefaultStyle"
          style={{ padding: '20px 0' }}
        >
          <UserSettingLists>
            <li>Account info</li>
            <li>Edit profile</li>
            <li>Change phone number</li>
            <li>Change address</li>
            <li>Update payment info</li>
            <li>Chat notification</li>
            <li>Delete account</li>
            <li>Logout</li>
          </UserSettingLists>
        </div>
      </div>
    </>
  )
}

export default Index
