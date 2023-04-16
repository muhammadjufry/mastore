import { FormRegistration, ListAvailbleStore } from "./registration.styles";
import PageHeader from "../PageHeader";
import AmazonImg from "../../assets/images/dropship-online-store/amazon.svg";
import AliExpressImg from "../../assets/images/dropship-online-store/aliExpress.svg";
import EbayImg from "../../assets/images/dropship-online-store/ebay.svg";
import WalmartImg from "../../assets/images/dropship-online-store/walmart.svg";
import { FileInput, rem, Input, Textarea, Button } from "@mantine/core";
import { IconUpload } from "@tabler/icons-react";

type Props = {};

function BecomeSellerRegistration({}: Props) {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    window.location.replace("/seller/");
  };

  return (
    <>
      <PageHeader pageName="Seller Registration" withCartIcon={true} />
      <div style={{ padding: "0 20px" }}>
        <div
          className="container pageDefaultStyle"
          style={{ padding: "20px 0" }}
        >
          <FormRegistration method="POST" onSubmit={handleSubmit}>
            <FileInput
              label="Seller picture:"
              placeholder="Seller picture"
              icon={<IconUpload size={rem(14)} />}
            />
            <Input.Wrapper label="Seller Name:">
              <Input
                type="text"
                placeholder="eg. Camera Shop"
                name="sellerName"
              />
            </Input.Wrapper>

            <Textarea
              placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi expedita nesciunt pariatur consectetur labore possimus a, iure veritatis tempora molestiae est voluptatum rerum quam sunt?"
              label="Seller description:"
              autosize
              minRows={2}
            />
            <div>
              <label htmlFor="sellerName">
                Pick from which online store you want to sell dropship:
              </label>
              <ListAvailbleStore>
                <li>
                  <img src={AmazonImg} alt="" />
                </li>
                <li>
                  <img src={AliExpressImg} alt="" />
                </li>
                <li>
                  <img src={EbayImg} alt="" />
                </li>
                <li>
                  <img src={WalmartImg} alt="" />
                </li>
              </ListAvailbleStore>
            </div>
            <p className="note">
              <b>Note: </b>Shipping method will be determine as the product you
              pick
            </p>
            <Button type="submit" color="dark">
              Register now
            </Button>
          </FormRegistration>
        </div>
      </div>
    </>
  );
}

export default BecomeSellerRegistration;
