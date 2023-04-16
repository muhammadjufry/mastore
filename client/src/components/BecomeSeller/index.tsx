import { Image, Description } from "./index.styles";
import PageHeader from "../PageHeader";
import BecomeSellerImg from "../../assets/images/become-seller/becomeSeller.svg";
import { Link } from "react-router-dom";
import { Button } from "@mantine/core";

type Props = {};

function Index({}: Props) {
  return (
    <>
      <PageHeader pageName="Become Seller" withCartIcon={true} />
      <div style={{ padding: "0 20px" }}>
        <div
          className="container pageDefaultStyle"
          style={{ padding: "20px 0" }}
        >
          <Image src={BecomeSellerImg} alt="" />
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            laboriosam? Ratione eius.
          </Description>
          <Link
            to="/user/become-seller/registration"
            style={{ width: "fit-content", margin: "0 auto" }}
          >
            <Button
              styles={() => ({
                root: {
                  width: "fit-content",
                },
              })}
              color="teal"
            >
              Become Seller
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Index;
