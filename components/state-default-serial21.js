import { useMemo } from "react";
import styles from "./state-default-serial21.module.css";
const StateDefaultSerial21 = ({
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
  placeholderColor,
  placeholderFontWeight,
}) => {
  const stateDefaultSerial21Style = useMemo(() => {
    return {
      position: stateDefaultSerial2Position,
      alignSelf: stateDefaultSerial2AlignSelf,
    };
  }, [stateDefaultSerial2Position, stateDefaultSerial2AlignSelf]);

  const textField1Style = useMemo(() => {
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

  const placeholder1Style = useMemo(() => {
    return {
      color: placeholderColor,
      fontWeight: placeholderFontWeight,
    };
  }, [placeholderColor, placeholderFontWeight]);

  return (
    <div
      className={styles.statedefaultSerial2}
      style={stateDefaultSerial21Style}
    >
      <div className={styles.label}>{label}</div>
      <div className={styles.textField} style={textField1Style}>
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
        <div className={styles.placeholder} style={placeholder1Style}>
          {placeholder}
        </div>
      </div>
    </div>
  );
};

export default StateDefaultSerial21;
