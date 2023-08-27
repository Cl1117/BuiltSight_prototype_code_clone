import { useMemo } from "react";
import styles from "./state-default-serial2.module.css";
const StateDefaultSerial2 = ({
  label = "Label",
  email,
  placeholder = "Placeholder",
  textFrame,
  showEmailIcon,
  stateDefaultSerial2Position,
  stateDefaultSerial2AlignSelf,
  textFieldBackgroundColor,
  textFieldWidth,
  textFieldAlignSelf,
  textFieldBorderRadius,
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
  placeholderLetterSpacing,
  placeholderFontFamily,
  placeholderColor,
  placeholderLineHeight,
  placeholderFontWeight,
}) => {
  const stateDefaultSerial2Style = useMemo(() => {
    return {
      position: stateDefaultSerial2Position,
      alignSelf: stateDefaultSerial2AlignSelf,
    };
  }, [stateDefaultSerial2Position, stateDefaultSerial2AlignSelf]);

  const textFieldStyle = useMemo(() => {
    return {
      backgroundColor: textFieldBackgroundColor,
      width: textFieldWidth,
      alignSelf: textFieldAlignSelf,
      borderRadius: textFieldBorderRadius,
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
    textFieldBackgroundColor,
    textFieldWidth,
    textFieldAlignSelf,
    textFieldBorderRadius,
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

  const placeholderStyle = useMemo(() => {
    return {
      letterSpacing: placeholderLetterSpacing,
      fontFamily: placeholderFontFamily,
      color: placeholderColor,
      lineHeight: placeholderLineHeight,
      fontWeight: placeholderFontWeight,
    };
  }, [
    placeholderLetterSpacing,
    placeholderFontFamily,
    placeholderColor,
    placeholderLineHeight,
    placeholderFontWeight,
  ]);

  return (
    <div
      className={styles.statedefaultSerial2}
      style={stateDefaultSerial2Style}
    >
      <div className={styles.label}>{label}</div>
      <div className={styles.textField} style={textFieldStyle}>
        {!textFrame && (
          <div className={styles.textFrame}>
            <div className={styles.textValue}>First Text Value</div>
            <div className={styles.cursor}>
              <div className={styles.cursorChild} />
            </div>
          </div>
        )}
        {showEmailIcon && (
          <img className={styles.emailIcon} alt="" src={email} />
        )}
        <div className={styles.placeholder} style={placeholderStyle}>
          {placeholder}
        </div>
      </div>
    </div>
  );
};

export default StateDefaultSerial2;
