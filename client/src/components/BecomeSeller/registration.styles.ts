import styled from 'styled-components'

const FormRegistration = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  label {
    font-size: 14px;
    font-weight: 500;
  }

  p.note {
    font-size: 14px;
    color: grey;
  }
`

const ListAvailbleStore = styled.ul`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 1px solid #ced4da;
    padding: 15px;
    border-radius: 2px;
    transition: all 0.5s ease-in-out;
    height: 70px;
  }

  li:hover {
    box-shadow: 4px 17px 20px -16px rgba(0, 0, 0, 0.25);
  }

  li img {
    height: 100%;
    max-height: 100%;
    width: 100%;
    object-fit: contain;
  }
`

export { FormRegistration, ListAvailbleStore }
