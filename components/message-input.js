import { TextField } from "@mui/material";
import styles from "./message-input.module.css";
const MessageInput = () => {
  return (
    <TextField
      className={styles.contentChild}
      sx={{ width: 566.6430053710938 }}
      color="primary"
      variant="standard"
      defaultValue="Write your message.."
      type="text"
      label="Message"
      placeholder="Write your message"
      size="medium"
      margin="none"
    />
  );
};

export default MessageInput;
