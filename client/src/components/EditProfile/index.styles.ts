import styled from 'styled-components'

export const UserProfile = styled.div`
  display: flex;
  gap: 13px;

  img {
    width: 60px;
    height: 60px;
    object-fit: contain;
    border-radius: 50%;
  }
`

export const UserProfileInfo = styled.div`
  position: relative;
  top: 2px;
  display: flex;
  flex-direction: column;
  font-size: 14px;

  span {
    font-size: 12px;
  }
`

export const EditProfileInput = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`
