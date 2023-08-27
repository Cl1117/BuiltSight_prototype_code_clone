import { TextField } from "@mui/material";
import styles from "./form-input.module.css";
const FormInput = () => {
  return (
    <TextField
      className={styles.contentChild}
      sx={{ width: 264.7508239746094 }}
      color="primary"
      variant="standard"
      type="text"
      label="First Name"
      placeholder="First name"
      size="medium"
      margin="none"
    />
  );
};

export default FormInput;
