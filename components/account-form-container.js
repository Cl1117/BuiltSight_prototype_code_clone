import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import Property1emailOrPhoneNumb from "./property1email-or-phone-numb";
import Property1emailOrPhoneNumb1 from "./property1email-or-phone-numb1";
import Property1emailOrPhoneNumb2 from "./property1email-or-phone-numb2";
import { useRouter } from "next/router";
import SocialFormContainer from "./social-form-container";
import styles from "./account-form-container.module.css";
const AccountFormContainer = () => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onFrameContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.main}>
      <div className={styles.formRegisterdefault}>
        <div className={styles.heading}>
          <div className={styles.title}>create your account</div>
          <div className={styles.title1}>It’s free and easy</div>
        </div>
        <div className={styles.form}>
          <Property1emailOrPhoneNumb
            property1emailOrPhoneNumbPosition="unset"
            property1emailOrPhoneNumbWidth="424px"
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
          <Property1emailOrPhoneNumb1
            property1emailOrPhoneNumbPosition="unset"
            property1emailOrPhoneNumbWidth="424px"
            property1emailOrPhoneNumbHeight="77px"
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
          <Property1emailOrPhoneNumb2
            property1emailOrPhoneNumbPosition="unset"
            property1emailOrPhoneNumbWidth="424px"
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
          <div className={styles.check}>
            <FormControlLabel
              className={styles.checkboxsingledefault}
              label=""
              control={<Checkbox color="primary" size="medium" />}
            />
            <div className={styles.text}>
              <span>{`By creating an account means you agree to the `}</span>
              <b>Terms</b>
              <span>{` `}</span>
              <b>and</b>
              <span>{` `}</span>
              <b>Conditions</b>
              <span>{`, and our `}</span>
              <b>Privacy Policy</b>
            </div>
          </div>
          <div className={styles.xButton}>
            <div className={styles.btnsolidlarge}>
              <div className={styles.btnlarge}>
                <div className={styles.elements}>
                  <img className={styles.icon} alt="" src="/icon.svg" />
                  <div className={styles.textButton}>Sign Up</div>
                  <img
                    className={styles.chevronRightIcon}
                    alt=""
                    src="/chevronright.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.social}>
          <div className={styles.delimiter}>
            <div className={styles.delimiterChild} />
            <div className={styles.checkboxsingledefault}>
              or do it via other accounts
            </div>
            <div className={styles.delimiterChild} />
          </div>
          <div className={styles.social1}>
            <img className={styles.socialChild} alt="" src="/group-344.svg" />
            <div className={styles.socialChild}>
              <div className={styles.groupChild} />
              <img
                className={styles.appleLogoBlack1Icon}
                alt=""
                src="/apple-logo-black-1.svg"
              />
            </div>
            <div className={styles.socialChild}>
              <div className={styles.groupItem} />
              <b className={styles.f}>f</b>
            </div>
          </div>
        </div>
      </div>
      <Button
        className={styles.button}
        sx={{ width: 424 }}
        variant="contained"
        color="primary"
        href="/desktopdashboard"
        onClick={onButtonClick}
      >
        sign up
      </Button>
      <SocialFormContainer dimensionCode="/frame-1018.svg" />
      <div className={styles.labelWrapper} onClick={onFrameContainerClick}>
        <div className={styles.label}>
          <span>Aldready have an account?</span>
          <span className={styles.span}>{` `}</span>
          <span className={styles.signIn}>Sign In</span>
        </div>
      </div>
    </div>
  );
};

export default AccountFormContainer;
