import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Divider,
  Checkbox,
  Anchor,
  Button,
} from "@mantine/core";
import axios from "axios";
import { useState } from "react";
import { Stack, FormLinks } from "./index.styles";
import { useNavigate } from "react-router-dom";

export function GoogleIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 262"
      width="0.9rem"
      height="0.9rem"
      {...props}
    >
      <path
        fill="#4285F4"
        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
      />
      <path
        fill="#34A853"
        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
      />
      <path
        fill="#FBBC05"
        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
      />
      <path
        fill="#EB4335"
        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
      />
    </svg>
  );
}

export default function Index(props: PaperProps) {
  const navigate = useNavigate();
  const [type, toggle] = useToggle(["login", "register"]);
  const [errorMessage, setErrorMessage] = useState("");
  const form = useForm({
    initialValues: {
      email: "",
      username: "",
      name: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      address: "",
      terms: true,
    },
  });

  const register_user = async () => {
    try {
      const url = "http://localhost:8080/api/v1/user/register";
      const body = {
        name: form.values.name,
        username: form.values.username,
        email: form.values.email,
        password: form.values.password,
        confirmPassword: form.values.confirmPassword,
        cartId: `${form.values.username}CartId`,
        orderId: `${form.values.username}OrderId`,
        phoneNumber: form.values.phoneNumber,
        address: form.values.address,
        following: "0",
        follower: "0",
      };
      console.log(url, body);
      const postRequest = await axios.post(url, body);
      alert("A verfication link sent to your email please verify it!");
      console.log(postRequest);
      navigate("/", {
        replace: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const login_user = async () => {
    try {
      const url = "http://localhost:8080/api/v1/user/login";
      const body = {
        email: form.values.email,
        password: form.values.password,
        confirmPassword: form.values.confirmPassword,
      };
      console.log(url, body);
      const postRequest = await axios.post(url, body);
      localStorage.setItem("user-token-login", postRequest.data.userTokenLogin);
      console.log(postRequest);
      navigate("/", {
        replace: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Paper radius="md" p="xs" {...props}>
      <Text
        size="lg"
        weight={500}
        style={{
          textAlign: "center",
          fontFamily: "Poppins, sans-serif",
          fontWeight: "600",
        }}
      >
        MA-STORE - {upperFirst(type)}
      </Text>

      <Group mb="md" mt="md" position="center">
        <Button
          leftIcon={<GoogleIcon />}
          variant="default"
          color="gray"
          styles={() => ({
            root: {
              width: "300px",
            },
          })}
          radius="md"
        >
          {type === "register" ? "Sign Up with Google" : "Sign In with Google"}
        </Button>
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      <form onSubmit={form.onSubmit(() => {})}>
        <Stack>
          {type === "register" && (
            <>
              <TextInput
                label="Name"
                placeholder="Your name"
                value={form.values.name}
                onChange={(event) =>
                  form.setFieldValue("name", event.currentTarget.value)
                }
                radius="md"
                size="xs"
              />
              <TextInput
                label="Username"
                placeholder="your-name-332"
                value={form.values.username}
                onChange={(event) =>
                  form.setFieldValue("username", event.currentTarget.value)
                }
                radius="md"
                size="xs"
              />
            </>
          )}

          <TextInput
            required
            label="Email"
            placeholder="hello@mantine.dev"
            value={form.values.email}
            onChange={(event) =>
              form.setFieldValue("email", event.currentTarget.value)
            }
            error={form.errors.email && "Invalid email"}
            radius="md"
            size="xs"
          />

          {type === "register" && (
            <>
              <TextInput
                label="Phone number"
                placeholder="000 XXX XXXX"
                value={form.values.phoneNumber}
                onChange={(event) =>
                  form.setFieldValue("phoneNumber", event.currentTarget.value)
                }
                radius="md"
                size="xs"
              />
              <TextInput
                label="Address"
                placeholder="Street 023 USA"
                value={form.values.address}
                onChange={(event) =>
                  form.setFieldValue("address", event.currentTarget.value)
                }
                radius="md"
                size="xs"
              />
            </>
          )}

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue("password", event.currentTarget.value)
            }
            error={
              form.errors.password &&
              "Password should include at least 6 characters"
            }
            radius="md"
            size="xs"
          />

          <PasswordInput
            required
            label="Confirm Password"
            placeholder="Confirm Password"
            value={form.values.confirmPassword}
            onChange={(event) =>
              form.setFieldValue("confirmPassword", event.currentTarget.value)
            }
            error={errorMessage}
            radius="md"
            size="xs"
          />

          {type === "register" && (
            <Checkbox
              size="xs"
              label="I accept terms and conditions"
              checked={form.values.terms}
              styles={() => ({
                root: {
                  marginTop: "7px",
                },
              })}
              onChange={(event) =>
                form.setFieldValue("terms", event.currentTarget.checked)
              }
            />
          )}
        </Stack>

        <Group position="apart" mt="xl">
          <FormLinks>
            <Anchor
              component="button"
              type="button"
              color="dimmed"
              onClick={() => toggle()}
              size="xs"
            >
              {type === "register"
                ? "Already have an account? Login"
                : "Don't have an account? Register"}
            </Anchor>
            <Anchor component="button" type="button" color="dimmed" size="xs">
              {type === "login" ? "Forgot password? Recover your password" : ""}
            </Anchor>
          </FormLinks>
        </Group>
        {type === "register" ? (
          <Button
            type="submit"
            radius="md"
            size="xs"
            styles={() => ({
              root: {
                marginTop: "15px",
              },
            })}
            onClick={() => register_user()}
          >
            Register
          </Button>
        ) : (
          <Button
            type="submit"
            radius="md"
            size="xs"
            styles={() => ({
              root: {
                marginTop: "15px",
              },
            })}
            onClick={() => login_user()}
          >
            Login
          </Button>
        )}
      </form>
    </Paper>
  );
}
