import { TextField } from "@mui/material";
import styles from "./email-input.module.css";
const EmailInput = () => {
  return (
    <TextField
      className={styles.contentChild}
      sx={{ width: 264.7508239746094 }}
      color="primary"
      variant="standard"
      type="text"
      label="Email"
      placeholder="Email"
      size="medium"
      margin="none"
    />
  );
};

export default EmailInput;
