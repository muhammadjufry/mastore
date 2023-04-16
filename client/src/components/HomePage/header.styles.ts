import styled from "styled-components";
import SearchIconSVG from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { Burger as BurgerIcon } from "@mantine/core";

const Header = styled.header`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 25px 20px;
  gap: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  position: sticky;
  z-index: 99;
  width: 100%;
  top: 0;
`;

const Row1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Center = styled.div`
  width: 100%;
  display: none;
  align-items: center;
  gap: 10px;

  input {
    height: 30px;
    min-height: 30px;
    padding-left: 20px;
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;

const MenuToggle = styled(MenuIcon)`
  width: 25px;
  height: 25px;
  fill: black;
  color: black;
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 18px;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  a {
    width: 25px;
    height: 25px;
  }

  svg {
    width: 25px;
    height: 25px;
  }
`;

const Row2 = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Search = styled.div`
  width: 100%;
`;

const FormSearch = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 3px;
  outline: none;
  border: 1px solid grey;
`;

const SearchIcon = styled(SearchIconSVG)`
  position: absolute;
  fill: grey;
  right: 30px;
`;

const Burger = styled(BurgerIcon)`
  @media (min-width: 768px) {
    display: none;
  }
`;

export {
  Header,
  Row1,
  Left,
  Center,
  MenuToggle,
  Logo,
  Right,
  Icons,
  Row2,
  Search,
  FormSearch,
  SearchInput,
  SearchIcon,
  Burger,
};
