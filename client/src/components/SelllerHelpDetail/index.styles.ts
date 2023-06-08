import styled from 'styled-components'

export const PeopleQuestionDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  h4 {
    font-weight: 600;
    font-size: 16px;
    text-shadow: 0 5px 5px rgb(0, 0, 0, 0.1);
  }
`

export const HelpAnswer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  .useranswered {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    color: grey;
    font-size: 11px;
  }

  p {
    font-size: 11.5px;
    line-height: 28px;
  }
`
