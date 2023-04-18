import SellerPageHeader from "../SellerPageHeader";
import {
  Input,
  PasswordInput,
  Button,
  Textarea,
  Avatar,
  FileInput,
  rem,
} from "@mantine/core";
import { IconUpload } from "@tabler/icons-react";
import { EditSellerProfile, SellerPic } from "./index.styles";

type Props = {
  isUserLoggedIn: boolean;
};

function index({ isUserLoggedIn }: Props) {
  return (
    <>
      <SellerPageHeader pageName="Edit seller profile" />
      <div className="pageDefaultStyle">
        <div className="container">
          <EditSellerProfile method="POST">
            <div>
              <label htmlFor="Seller Picture:">Seller Picture:</label>
              <SellerPic>
                <Avatar
                  size={55}
                  color="green"
                  styles={() => ({
                    root: {
                      cursor: "pointer",
                    },
                  })}
                >
                  TQ
                </Avatar>
                <FileInput
                  styles={() => ({
                    root: {
                      width: "fit-content",
                    },
                  })}
                  placeholder="Seller picture"
                  icon={<IconUpload size={rem(14)} />}
                />
              </SellerPic>
            </div>
            <Input.Wrapper label="Seller name:">
              <Input placeholder="eg. Camera shop" value="User123" />
            </Input.Wrapper>
            <Input.Wrapper label="Username:">
              <Input placeholder="Your Username" value="user-123" />
            </Input.Wrapper>
            <Input.Wrapper label="Email:">
              <Input
                readOnly
                value="youremail@email.com"
                styles={() => ({
                  input: {
                    "&": {
                      backgroundColor: "rgb(240, 240, 240)",
                      border: "1px solid rgb(240, 240, 240) !important",
                    },
                  },
                })}
              />
            </Input.Wrapper>
            <Textarea
              value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi expedita nesciunt pariatur consectetur labore possimus a, iure veritatis tempora molestiae est voluptatum rerum quam sunt?"
              placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi expedita nesciunt pariatur consectetur labore possimus a, iure veritatis tempora molestiae est voluptatum rerum quam sunt?"
              label="Seller description:"
              autosize
              minRows={2}
            />
            <Input.Wrapper label="Password:">
              <PasswordInput placeholder="Your password" value="secret123" />
            </Input.Wrapper>
            <Button
              styles={(theme) => ({
                root: {
                  width: "fit-content",
                },
              })}
              color="dark"
              radius="sm"
              type="submit"
            >
              Save changes
            </Button>
          </EditSellerProfile>
        </div>
      </div>
    </>
  );
}

export default index;
