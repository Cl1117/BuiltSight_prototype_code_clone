import { TextField } from "@mui/material";
import styles from "./phone-number-input.module.css";
const PhoneNumberInput = () => {
  return (
    <TextField
      className={styles.contentChild}
      sx={{ width: 264.7508239746094 }}
      color="primary"
      variant="standard"
      type="text"
      label="Phone Number"
      placeholder="Phone number"
      size="medium"
      margin="none"
    />
  );
};

export default PhoneNumberInput;
