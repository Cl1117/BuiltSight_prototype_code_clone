import { useMemo } from "react";
import StateDefaultSerial2 from "./state-default-serial21";
import styles from "./text-field-pw.module.css";
const TextFieldPw = ({
  textFieldPwPosition,
  textFieldPwWidth,
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
  const textFieldPwStyle = useMemo(() => {
    return {
      position: textFieldPwPosition,
      width: textFieldPwWidth,
    };
  }, [textFieldPwPosition, textFieldPwWidth]);

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
    <div className={styles.textFieldPw} style={textFieldPwStyle}>
      <StateDefaultSerial2
        label="Password"
        email="/email1.svg"
        placeholder="Type your password"
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
        placeholderColor="#7a828a"
        placeholderFontWeight="500"
      />
    </div>
  );
};

export default TextFieldPw;
