import { SellerHelpBody, PeopleQuestions } from "./index.styles";
import SellerPageHeader from "../SellerPageHeader";
import { Text, Input } from "@mantine/core";
import { SpotlightProvider, spotlight } from "@mantine/spotlight";
import type { SpotlightAction } from "@mantine/spotlight";
import {
  IconHome,
  IconDashboard,
  IconFileText,
  IconSearch,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

type Props = {};

function Help({}: Props) {
  return (
    <>
      <SellerPageHeader pageName="Help" />
      <div className="pageDefaultStyle">
        <div className="container">
          <SellerHelpBody>
            <h3>Need answer for question search here?</h3>
            <Input
              size="xs"
              placeholder="Search question here..."
              onClick={() => spotlight.open}
              readOnly
              icon={<IconSearch size={15} />}
              styles={() => ({
                input: {
                  border: "0.0625rem solid #ced4da !important",
                },
              })}
            />
            <Text fw={600}>Some's people ask:</Text>
            <PeopleQuestions>
              <Link to="/seller/help/question-detail/how-to-add-bank">
                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
              </Link>
              <Link to="/seller/help/question-detail/how-to-add-bank">
                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
              </Link>
              <Link to="/seller/help/question-detail/how-to-add-bank">
                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
              </Link>
              <Link to="/seller/help/question-detail/how-to-add-bank">
                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
              </Link>
            </PeopleQuestions>
          </SellerHelpBody>
        </div>
      </div>
    </>
  );
}

const actions: SpotlightAction[] = [
  {
    title: "Home",
    description: "Get to home page",
    onTrigger: () => console.log("Home"),
    icon: <IconHome size="1.2rem" />,
  },
  {
    title: "Dashboard",
    description: "Get full information about current system status",
    onTrigger: () => console.log("Dashboard"),
    icon: <IconDashboard size="1.2rem" />,
  },
  {
    title: "Documentation",
    description: "Visit documentation to lean more about all features",
    onTrigger: () => console.log("Documentation"),
    icon: <IconFileText size="1.2rem" />,
  },
];

function index() {
  return (
    <SpotlightProvider
      actions={actions}
      searchIcon={<IconSearch size="1.2rem" />}
      searchPlaceholder="Search..."
      shortcut="mod + shift + 1"
      nothingFoundMessage="Nothing found..."
    >
      <Help />
    </SpotlightProvider>
  );
}

export default index;
