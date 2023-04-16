import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import { Autocomplete } from "@mantine/core";
import { Link } from "react-router-dom";
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Header as HeaderComponent,
  Row1,
  Left,
  Center,
  Logo,
  Right,
  Icons,
  Row2,
  Search,
  FormSearch,
  Burger,
} from "./header.styles";
type Props = {};

function Header({}: Props) {
  const [value, setValue] = useState("");
  const [opened, { toggle }] = useDisclosure(false);
  const searchListdata = ["laptop", "macbook"];
  const label = opened ? "Close navigation" : "Open navigation";
  return (
    <HeaderComponent>
      <div className="container">
        <Row1>
          <Left>
            <Burger
              size="sm"
              opened={opened}
              onClick={toggle}
              aria-label={label}
            />
            <Link to="/">
              <Logo>MASTORE</Logo>
            </Link>
          </Left>
          <Center>
            <Search>
              <FormSearch method="get">
                <Autocomplete
                  style={{ width: "100%" }}
                  value={value}
                  icon={
                    <IconSearch size="1rem" style={{ marginLeft: "3px" }} />
                  }
                  onChange={setValue}
                  placeholder="Search product name..."
                  data={searchListdata}
                  size="xs"
                />
              </FormSearch>
            </Search>
          </Center>
          <Right>
            <Icons>
              <Link to="/user">
                <AccountCircleIcon />
              </Link>
              <Link to="/user/cart">
                <ShoppingCartIcon />
              </Link>
            </Icons>
          </Right>
        </Row1>
      </div>
      <Row2>
        <Search>
          <FormSearch method="get">
            <Autocomplete
              style={{ width: "100%" }}
              value={value}
              icon={<IconSearch size="1rem" />}
              onChange={setValue}
              placeholder="Search product name..."
              data={searchListdata}
            />
          </FormSearch>
        </Search>
      </Row2>
    </HeaderComponent>
  );
}

export default Header;
