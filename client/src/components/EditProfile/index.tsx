import { Input, PasswordInput, Button } from "@mantine/core";
import PageHeader from "../PageHeader";
import { UserProfile, UserProfileInfo, EditProfileInput } from "./index.styles";
import BlankProfilePic from "../../assets/images/user-profile-images/empty-profile-picture.jpg";
type Props = {};

function Index({}: Props) {
  return (
    <>
      <PageHeader pageName="Edit Profile" withCartIcon={true} />
      <div style={{ padding: "0 20px" }}>
        <div
          className="container pageDefaultStyle"
          style={{ padding: "20px 0" }}
        >
          <UserProfile>
            <img
              src={BlankProfilePic}
              alt="empty-profile-picture"
              className="userProfileImg"
            />
            <UserProfileInfo>
              <h4 className="userProfileName">Profile name</h4>
              <span>youremail@domain.com</span>
            </UserProfileInfo>
          </UserProfile>
          <EditProfileInput method="POST">
            <Input.Wrapper label="Full Name:">
              <Input placeholder="Your Name" value="User123" />
            </Input.Wrapper>
            <Input.Wrapper label="Username:">
              <Input placeholder="Your Username" value="user-123" />
            </Input.Wrapper>
            <Input.Wrapper label="Email:">
              <Input
                readOnly
                value="youremail@email.com"
                styles={(theme) => ({
                  input: {
                    "&": {
                      backgroundColor: "rgb(240, 240, 240)",
                      border: "1px solid rgb(240, 240, 240) !important",
                    },
                  },
                })}
              />
            </Input.Wrapper>
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
          </EditProfileInput>
        </div>
      </div>
    </>
  );
}

export default Index;
