import styled from "styled-components";

export const Chat = styled.div`
  padding: 20px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const ChatType = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const ChatTypeItem = styled.li`
  width: 100%;
  border: 1px solid rgb(200, 200, 200);
  font-size: 13px;
  padding: 5px;
  display: flex;
  justify-content: center;

  &:first-child {
    border-right: none;
  }
`;

export const ChatMessage = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  border-top: none;
  flex-direction: column;
  height: 100%;

  a {
    width: 100%;
  }
`;

export const ChatMessageItem = styled.li`
  display: flex;
  gap: 10px;
  background-color: rgb(245, 245, 245);
  padding: 12px 10px;
  width: 100%;
`;

export const ChatMessageImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
`;

export const ChatProfileAndMessageInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2px;
`;

export const ChatMessageHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ChatMessageStatus = styled.span`
  background-color: black;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 6px;
  margin-bottom: 2px;
  color: white;
  border-radius: 50px;
`;

export const ChatProfileName = styled.div`
  font-size: 12px;
`;

export const ChatProfileDescription = styled.div`
  line-height: 15px;
  font-size: 10px;
  color: grey;
`;
