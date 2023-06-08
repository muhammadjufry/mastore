import { Input, PasswordInput, Button } from '@mantine/core'
import PageHeader from '../PageHeader'
import { UserProfile, UserProfileInfo, EditProfileInput } from './index.styles'
import BlankProfilePic from '../../assets/images/user-profile-images/empty-profile-picture.jpg'
import { useState } from 'react'
import axios from 'axios'
interface Props {
  isUserLoggedIn: boolean
}

function Index ({ isUserLoggedIn }: Props) {
  const { name, username, email, address } = JSON.parse(
    localStorage.getItem('userInfo')!
  )[0]
  const phoneNumber = JSON.parse(localStorage.getItem('userInfo')!)[0][
    'phone-number'
  ]
  const [form, setForm] = useState({
    name,
    username,
    email,
    address,
    phoneNumber
  })
  console.log(form)

  const onChange = (e: any) => {
    setForm({ ...form, [e.name]: e.value })
  }

  const updateUserProfile = async (e: any) => {
    e.preventDefault()
    try {
      const url = `http://localhost:8080/api/v1/user/updateUser/${email}`
      const updateRequest = await axios.put(url, form)
      console.log(updateRequest)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <PageHeader
        pageName="Edit Profile"
        withCartIcon={true}
        isUserLoggedIn={isUserLoggedIn}
      />
      <div style={{ padding: '0 20px' }}>
        <div
          className="container pageDefaultStyle"
          style={{ padding: '20px 0' }}
        >
          <UserProfile>
            <img
              src={BlankProfilePic}
              alt="empty-profile-picture"
              className="userProfileImg"
            />
            <UserProfileInfo>
              <h4 className="userProfileName">{name}</h4>
              <span>{email}</span>
            </UserProfileInfo>
          </UserProfile>
          <EditProfileInput onSubmit={updateUserProfile}>
            <Input.Wrapper label="Full Name:">
              <Input
                placeholder="Your Name"
                name="name"
                value={form.name}
                onChange={(e) => { onChange(e.target) }}
              />
            </Input.Wrapper>
            <Input.Wrapper label="Username:">
              <Input
                placeholder="Your Username"
                name="username"
                value={form.username}
                onChange={(e) => { onChange(e.target) }}
              />
            </Input.Wrapper>
            <Input.Wrapper label="Address:">
              <Input
                placeholder="You address"
                name="address"
                value={form.address}
                onChange={(e) => { onChange(e.target) }}
              />
            </Input.Wrapper>
            <Input.Wrapper label="Phone number:">
              <Input
                placeholder="000 XXXX XXX"
                name="phoneNumber"
                value={form.phoneNumber}
                onChange={(e) => { onChange(e.target) }}
              />
            </Input.Wrapper>
            <Input.Wrapper label="Email:">
              <Input
                readOnly
                name="email"
                value={form.email}
                styles={() => ({
                  input: {
                    '&': {
                      backgroundColor: 'rgb(240, 240, 240)',
                      border: '1px solid rgb(240, 240, 240) !important'
                    }
                  }
                })}
              />
            </Input.Wrapper>
            <Button
              styles={(theme) => ({
                root: {
                  width: 'fit-content'
                }
              })}
              color="dark"
              radius="sm"
              type="submit"
            >
              Save changes
            </Button>
          </EditProfileInput>
        </div>
      </div>
    </>
  )
}

export default Index
