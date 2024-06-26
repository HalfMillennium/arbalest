import { Typography, Modal, Input } from "@mui/material";
import { useState } from "react";

export function SignInModal(props: {
  open: boolean;
  handleClose: (open: boolean) => {};
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { open, handleClose } = props;
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="flex flex-col">
        <div>
          <Typography id="modal-modal-title" variant="h4">
            Welcome back.
          </Typography>
        </div>
        <div className="flex flex-col">
          <div>
            <Typography id="modal-modal-title" variant="button">
              Username
            </Typography>
          </div>
          <div>
            <Input
              id="username"
              placeholder="John"
              onChange={handleUsernameChange}
              className="mb-4"
              style={{ fontFamily: "Source Sans 3" }}
              fullWidth
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <Typography id="modal-modal-title" variant="button">
              Password
            </Typography>
          </div>
          <div>
            <Input
              id="firstName"
              placeholder="John"
              onChange={handlePasswordChange}
              className="mb-4"
              style={{ fontFamily: "Source Sans 3" }}
              fullWidth
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}
