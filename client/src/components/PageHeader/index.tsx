import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useNavigate } from "react-router-dom";

import {
  PageItemsHeader,
  PageItemsHeaderSvg,
  PageItemsHeaderText,
  PageHeaderItemsIcon,
  PageHeaderItemsIconCount,
} from "./index.styles";
import Header from "../HomePage/Header";

type Props = {
  pageName?: string;
  withCartIcon: boolean;
};

function Index({ pageName, withCartIcon }: Props) {
  const navigate = useNavigate();
  return (
    <div className="header">
      <PageItemsHeader className="pageHeader" style={{ padding: " 20px" }}>
        <PageItemsHeaderSvg onClick={() => navigate(-1)} />
        {pageName !== undefined && pageName.length > 0 ? (
          <PageItemsHeaderText>{pageName}</PageItemsHeaderText>
        ) : null}
        {withCartIcon === true ? (
          <PageHeaderItemsIcon>
            <ShoppingBagIcon />
            <PageHeaderItemsIconCount>5</PageHeaderItemsIconCount>
          </PageHeaderItemsIcon>
        ) : null}
      </PageItemsHeader>
      <Header />
    </div>
  );
}

export default Index;
