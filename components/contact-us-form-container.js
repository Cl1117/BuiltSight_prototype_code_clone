import { Button } from "@mui/material";
import PhoneFormContainer from "./phone-form-container";
import FormInput from "./form-input";
import EmailInput from "./email-input";
import FormInputLastName from "./form-input-last-name";
import MessageInput from "./message-input";
import PhoneNumberInput from "./phone-number-input";
import styles from "./contact-us-form-container.module.css";
const ContactUsFormContainer = () => {
  return (
    <div className={styles.content}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.vectorParent}>
          <img className={styles.frameChild} alt="" src="/rectangle-3841.svg" />
          <div className={styles.contactUs}>contact us</div>
          <PhoneFormContainer />
          <div className={styles.saySomethingTo}>
            Say something to start a live chat!
          </div>
        </div>
      </div>
      <FormInput />
      <EmailInput />
      <FormInputLastName />
      <MessageInput />
      <PhoneNumberInput />
      <Button
        className={styles.button}
        sx={{ width: 403.7926330566406 }}
        variant="contained"
        color="primary"
      >
        submit
      </Button>
    </div>
  );
};

export default ContactUsFormContainer;
