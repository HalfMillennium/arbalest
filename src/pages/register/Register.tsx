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
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col mb-16 mt-16">
        <Typography variant="h2">Hi. Welcome to Arbalest.</Typography>
        <Typography variant="h5">Let's get to know each other.</Typography>
      </div>
      <form
        noValidate
        autoComplete="off"
        className="flex flex-col justify-center w-1/4"
      >
        <div>
          <div className="mb-5">
            <Typography>First Name</Typography>
            <Input
              id="firstName"
              placeholder="John"
              onChange={handleChange("firstName")}
              className="mb-4"
              fullWidth
            />
          </div>
          <div className="mb-5">
            <Typography>Last Name</Typography>
            <Input
              id="lastName"
              placeholder="Doe"
              onChange={handleChange("lastName")}
              className="mb-4"
              fullWidth
            />
          </div>
          <div className="mb-5">
            <Typography>Date of Birth</Typography>
            <Input
              id="dateOfBirth"
              type="string"
              placeholder="Yesterday"
              onChange={handleChange("dateOfBirth")}
              className="mb-4"
              fullWidth
            />
          </div>
          <div className="mb-5">
            <Typography>Username</Typography>
            <Input
              id="username"
              placeholder="SomethingCool99"
              onChange={handleChange("username")}
              className="mb-4"
              fullWidth
            />
          </div>
          <div className="mb-5">
            <Typography>Email address</Typography>
            <Input
              id="email"
              type="email"
              placeholder="email@address.com"
              onChange={handleChange("email")}
              className="mb-4"
              fullWidth
            />
          </div>
          <div className="mb-5">
            <Typography>Password</Typography>
            <Input
              id="password"
              type="password"
              onChange={handlePasswordChange}
              className="mb-4"
              fullWidth
            />
          </div>
          <div className="mb-5">
            <Typography>Confirm Password</Typography>
            <Input
              id="confPassword"
              type="password"
              onChange={handleConfPasswordChange}
              className="mb-4"
              fullWidth
            />
          </div>
        </div>
        <div className="flex justify-center px-5 pb-5">
          <Button variant="contained" color="primary" type="submit">
            Register
          </Button>
        </div>
      </form>
    </div>
  );
}
