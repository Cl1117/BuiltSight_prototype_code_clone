import { useMemo } from "react";
import StateDefaultSerial2 from "./state-default-serial2";
import styles from "./property1email-or-phone-numb1.module.css";
const Property1emailOrPhoneNumb1 = ({
  property1emailOrPhoneNumbPosition,
  property1emailOrPhoneNumbWidth,
  property1emailOrPhoneNumbHeight,
  textFieldBorderRadius,
  textFieldBackgroundColor,
  textFieldBorder,
  textFieldBoxSizing,
  textFieldHeight,
  textFieldOverflow,
  textFieldFlexShrink,
  textFieldDisplay,
  textFieldFlexDirection,
  textFieldPadding,
  textFieldAlignItems,
  textFieldJustifyContent,
  textFieldGap,
}) => {
  const property1emailOrPhoneNumb1Style = useMemo(() => {
    return {
      position: property1emailOrPhoneNumbPosition,
      width: property1emailOrPhoneNumbWidth,
      height: property1emailOrPhoneNumbHeight,
    };
  }, [
    property1emailOrPhoneNumbPosition,
    property1emailOrPhoneNumbWidth,
    property1emailOrPhoneNumbHeight,
  ]);

  const textFieldStyle = useMemo(() => {
    return {
      borderRadius: textFieldBorderRadius,
      backgroundColor: textFieldBackgroundColor,
      border: textFieldBorder,
      boxSizing: textFieldBoxSizing,
      height: textFieldHeight,
      overflow: textFieldOverflow,
      flexShrink: textFieldFlexShrink,
      display: textFieldDisplay,
      flexDirection: textFieldFlexDirection,
      padding: textFieldPadding,
      alignItems: textFieldAlignItems,
      justifyContent: textFieldJustifyContent,
      gap: textFieldGap,
    };
  }, [
    textFieldBorderRadius,
    textFieldBackgroundColor,
    textFieldBorder,
    textFieldBoxSizing,
    textFieldHeight,
    textFieldOverflow,
    textFieldFlexShrink,
    textFieldDisplay,
    textFieldFlexDirection,
    textFieldPadding,
    textFieldAlignItems,
    textFieldJustifyContent,
    textFieldGap,
  ]);

  return (
    <div
      className={styles.property1emailOrPhoneNumb}
      style={property1emailOrPhoneNumb1Style}
    >
      <StateDefaultSerial2
        label="Email or phone number"
        email="/-user-rounded1.svg"
        placeholder="Type your e-mail or phone number"
        textFrame={false}
        showEmailIcon={false}
        stateDefaultSerial2Position="unset"
        stateDefaultSerial2AlignSelf="stretch"
        textFieldBackgroundColor="#fafafa"
        textFieldWidth="unset"
        textFieldAlignSelf="stretch"
        textFieldBorderRadius="8px"
        textFieldBorder="1px solid var(--color-gray-700)"
        textFieldBoxSizing="border-box"
        textFieldHeight="48px"
        textFieldOverflow="hidden"
        textFieldFlexShrink="0"
        textFieldDisplay="flex"
        textFieldFlexDirection="row"
        textFieldPadding="var(--padding-5xs) var(--padding-5xs) var(--padding-5xs) var(--padding-base)"
        textFieldAlignItems="center"
        textFieldJustifyContent="flex-start"
        textFieldGap="8px"
        placeholderLetterSpacing="unset"
        placeholderFontFamily="Inter"
        placeholderColor="#7a828a"
        placeholderLineHeight="15px"
        placeholderFontWeight="500"
      />
    </div>
  );
};

export default Property1emailOrPhoneNumb1;
