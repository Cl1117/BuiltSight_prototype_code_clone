import { useCallback } from "react";
import { TextField, InputAdornment, Icon, Button } from "@mui/material";
import Property1emailOrPhoneNumb1 from "./property1email-or-phone-numb1";
import TextFieldPw from "./text-field-pw";
import { useRouter } from "next/router";
import SocialFormContainer from "./social-form-container";
import styles from "./container-login-form.module.css";
const ContainerLoginForm = () => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/../pages/desktop-dashboard");
  }, [router]);

  return (
    <div className={styles.formLogindefault}>
      <div className={styles.heading}>
        <div className={styles.title}>welcome back</div>
        <div className={styles.title1}>Let’s get started</div>
      </div>
      <Property1emailOrPhoneNumb1
        property1emailOrPhoneNumbPosition="unset"
        property1emailOrPhoneNumbWidth="424px"
        property1emailOrPhoneNumbHeight="83px"
        textFieldBorderRadius="unset"
        textFieldBackgroundColor="transparent"
        textFieldBorder="none"
        textFieldBoxSizing="unset"
        textFieldHeight="unset"
        textFieldOverflow="unset"
        textFieldFlexShrink="unset"
        textFieldDisplay="unset"
        textFieldFlexDirection="unset"
        textFieldPadding="unset"
        textFieldAlignItems="unset"
        textFieldJustifyContent="unset"
        textFieldGap="unset"
      />
      <TextFieldPw
        textFieldPwPosition="unset"
        textFieldPwWidth="424px"
        textFieldBorderRadius="unset"
        textFieldBackgroundColor="transparent"
        textFieldBorder="none"
        textFieldBoxSizing="unset"
        textFieldHeight="unset"
        textFieldOverflow="unset"
        textFieldFlexShrink="unset"
        textFieldDisplay="unset"
        textFieldFlexDirection="unset"
        textFieldPadding="unset"
        textFieldAlignItems="unset"
        textFieldJustifyContent="unset"
        textFieldGap="unset"
      />
      <Button
        className={styles.button}
        sx={{ width: 424 }}
        variant="contained"
        name="sign in"
        color="primary"
        href="/desktopdashboard"
        onClick={onButtonClick}
      >
        sign in
      </Button>
      <SocialFormContainer dimensionCode="/frame-10181.svg" />
    </div>
  );
};

export default ContainerLoginForm;
