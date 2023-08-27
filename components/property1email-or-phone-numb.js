import { useMemo } from "react";
import StateDefaultSerial2 from "./state-default-serial2";
import styles from "./property1email-or-phone-numb.module.css";
const Property1emailOrPhoneNumb = ({
  property1emailOrPhoneNumbPosition,
  property1emailOrPhoneNumbWidth,
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
  const property1emailOrPhoneNumbStyle = useMemo(() => {
    return {
      position: property1emailOrPhoneNumbPosition,
      width: property1emailOrPhoneNumbWidth,
    };
  }, [property1emailOrPhoneNumbPosition, property1emailOrPhoneNumbWidth]);

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
      style={property1emailOrPhoneNumbStyle}
    >
      <StateDefaultSerial2
        label="Full name"
        email="/-user-rounded.svg"
        placeholder="Enter your name"
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
        placeholderFontFamily="Rubik"
        placeholderColor="#7a828a"
        placeholderLineHeight="15px"
        placeholderFontWeight="500"
      />
    </div>
  );
};

export default Property1emailOrPhoneNumb;