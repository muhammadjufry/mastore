import SellerPageHeader from "../SellerPageHeader";
import { Text, Button } from "@mantine/core";
import { AndsBody, ListAvailbleStore } from "./index.styles";
import AmazonImg from "../../assets/images/dropship-online-store/amazon.svg";
import AliExpressImg from "../../assets/images/dropship-online-store/aliExpress.svg";
import EbayImg from "../../assets/images/dropship-online-store/ebay.svg";
import WalmartImg from "../../assets/images/dropship-online-store/walmart.svg";

type Props = {};

function index({}: Props) {
  return (
    <>
      <SellerPageHeader pageName="Add another store" />
      <div className="pageDefaultStyle">
        <div className="container">
          <AndsBody>
            <Text>Add more store:</Text>
            <ListAvailbleStore>
              <li>
                <img src={AmazonImg} alt="" />
                <input type="checkbox" name="" id="" />
              </li>
              <li>
                <img src={AliExpressImg} alt="" />
                <input type="checkbox" name="" id="" />
              </li>
              <li>
                <img src={EbayImg} alt="" />
                <input type="checkbox" name="" id="" />
              </li>
              <li>
                <img src={WalmartImg} alt="" />
                <input type="checkbox" name="" id="" />
              </li>
            </ListAvailbleStore>
          </AndsBody>
          <br />
          <Button color="dark">Save changes</Button>
        </div>
      </div>
    </>
  );
}

export default index;
