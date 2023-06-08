import styled from 'styled-components'
import ArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
export const MessageDetailItemsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`
export const MessageDetailItemsHeaderSvg = styled(ArrowLeftIcon)`
  cursor: pointer;
  width: 25px;
  height: 25px;
  fill: black;
`
export const MessageDetailItemsHeaderText = styled.div`
  font-size: 17px;
  font-weight: 600;
`

export const ChatMessageDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0;
`

export const UserProfile = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
  padding: 13px;
  border: 1px solid grey;
  gap: 13px;
`

export const UserProfileImage = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  object-fit: contain;
`

export const UserProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;

  & span {
    font-size: 12px;
  }
`

export const ChatMessageBox = styled.div`
  border-top: none;
  max-height: 100%;

  position: relative;
`

export const MessageChatLists = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px 0;
  overflow: auto;

  & li {
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 10px;

    & img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }
  }

  li.user {
    flex-direction: row-reverse;
  }
`

export const ChatMessageInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  &.user {
    align-items: flex-end;
  }

  & .chatMessageProfileName {
    font-weight: bold;
    font-size: 11.5px;
  }
`

export const MessageLists = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;

  & li {
    display: flex;
    flex-direction: column;
    gap: 5px;

    & span {
      font-size: 10px;
      color: grey;
      margin-left: auto;
    }

    &:first-child .messageInfo::before {
      content: "";
      width: 15px;
      height: 15px;
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
      background-color: black;
      transform: rotate(-48deg);
      top: -4.5px;
      left: -6px;
      position: absolute;
    }

    &:first-child .messageInfo.user::before {
      background-color: #c8e8f3;
      right: -6px;
      left: unset;
      transform: rotate(48deg);
      top: -4.5px;
    }

    & .messageInfo {
      padding: 5px 7px;
      font-size: 9.5px;
      background-color: black;
      color: white;
      border-radius: 5px;
      position: relative;

      &.user {
        background-color: #c8e8f3;
        color: black;
      }
    }
  }
`

export const ChatInput = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  height: 50px;
  z-index: 99;
  width: 100%;
  left: 0;
  div {
    height: 50px;
    border-radius: none !important;
    width: 100%;
  }

  input {
    font-size: 12px;
    height: 50px;
    width: 100%;
    border: 1px solid rgb(220, 220, 220) !important;
    border-radius: none !important;
  }

  button {
    position: absolute;
    cursor: pointer;
    right: 10px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: white;
  }
`
