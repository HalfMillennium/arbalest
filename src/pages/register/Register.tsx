import { Button, Input, Typography, OutlinedInput } from "@mui/material";
import React from "react";
import { EMPTY_USER_DETAILS } from "./utils";
import { useState } from "react";

export function Register() {
  const [userDetails, setUserDetails] = useState(EMPTY_USER_DETAILS);
  const [password, setPassword] = useState("");

  const handleChange =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const updatedUserDetails = userDetails;
      updatedUserDetails[field] = event.target.value;
      setUserDetails(updatedUserDetails);
    };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen mt-4rem">
      <div className="flex flex-col mb-16 xl:-mt-8rem">
        <Typography variant="h2">Hi. Welcome to Arbalest.</Typography>
        <div className="text-soft-black/75">
          <Typography variant="h5" color="inherit">
            Let's get to know each other.
          </Typography>
        </div>
      </div>
      <form
        noValidate
        autoComplete="off"
        className="flex flex-col justify-center w-3/4"
      >
        <div>
          <div className="mb-5">
            <Typography
              variant="button"
              fontWeight={500}
              fontFamily={"Radio Canada Big"}
            >
              First Name
            </Typography>
            <Input
              id="firstName"
              placeholder="John"
              onChange={handleChange("firstName")}
              className="mb-4"
              style={{ fontFamily: "Source Sans 3" }}
              fullWidth
            />
          </div>
          <div className="mb-5">
            <Typography
              variant="button"
              fontWeight={500}
              fontFamily={"Radio Canada Big"}
            >
              Last Name
            </Typography>
            <Input
              id="lastName"
              placeholder="Doe"
              onChange={handleChange("lastName")}
              className="mb-4"
              style={{ fontFamily: "Source Sans 3" }}
              fullWidth
            />
          </div>
          <div className="mb-5">
            <Typography
              variant="button"
              fontWeight={500}
              fontFamily={"Radio Canada Big"}
            >
              Date of Birth
            </Typography>
            <Input
              id="dateOfBirth"
              type="string"
              placeholder="Yesterday"
              onChange={handleChange("dateOfBirth")}
              className="mb-4"
              style={{ fontFamily: "Source Sans 3" }}
              fullWidth
            />
          </div>
          <div className="mb-5">
            <Typography
              variant="button"
              fontWeight={500}
              fontFamily={"Radio Canada Big"}
            >
              Username
            </Typography>
            <Input
              id="username"
              placeholder="SomethingCool99"
              onChange={handleChange("username")}
              className="mb-4"
              style={{ fontFamily: "Source Sans 3" }}
              fullWidth
            />
          </div>
          <div className="mb-5">
            <Typography
              variant="button"
              fontWeight={500}
              fontFamily={"Radio Canada Big"}
            >
              Email address
            </Typography>
            <Input
              id="email"
              type="email"
              placeholder="email@address.com"
              onChange={handleChange("email")}
              className="mb-4"
              style={{ fontFamily: "Source Sans 3" }}
              fullWidth
            />
          </div>
          <div className="mb-5">
            <Typography
              variant="button"
              fontWeight={500}
              fontFamily={"Radio Canada Big"}
            >
              Password
            </Typography>
            <Input
              id="password"
              type="password"
              onChange={handlePasswordChange}
              className="mb-4"
              style={{ fontFamily: "Source Sans 3" }}
              fullWidth
            />
          </div>
          <div className="mb-5">
            <Typography
              variant="button"
              fontWeight={500}
              fontFamily={"Radio Canada Big"}
            >
              Confirm Password
            </Typography>
            <Input
              id="confPassword"
              type="password"
              onChange={handleConfPasswordChange}
              className="mb-4"
              style={{ fontFamily: "Source Sans 3" }}
              fullWidth
            />
          </div>
        </div>
        <div className="flex justify-center px-5 pb-5 text-black mb-20">
          <Button variant="outlined" color="inherit" type="submit">
            <Typography variant="button" fontFamily="Helvetica Neue">
              Join
            </Typography>
          </Button>
        </div>
      </form>
    </div>
  );
}
