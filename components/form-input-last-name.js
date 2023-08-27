import { TextField } from "@mui/material";
import styles from "./form-input-last-name.module.css";
const FormInputLastName = () => {
  return (
    <TextField
      className={styles.contentChild}
      sx={{ width: 264.7508239746094 }}
      color="primary"
      variant="standard"
      type="text"
      label="Last Name"
      placeholder="Last name"
      size="medium"
      margin="none"
    />
  );
};

export default FormInputLastName;
