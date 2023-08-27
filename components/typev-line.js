import { useMemo } from "react";
import styles from "./typev-line.module.css";
const TypevLine = ({
  typevLinePosition,
  typevLineHeight,
  typevLineBoxSizing,
  typevLineAlignSelf,
  vLineBackgroundColor,
}) => {
  const typevLineStyle = useMemo(() => {
    return {
      position: typevLinePosition,
      height: typevLineHeight,
      boxSizing: typevLineBoxSizing,
      alignSelf: typevLineAlignSelf,
    };
  }, [
    typevLinePosition,
    typevLineHeight,
    typevLineBoxSizing,
    typevLineAlignSelf,
  ]);

  const vLineStyle = useMemo(() => {
    return {
      backgroundColor: vLineBackgroundColor,
    };
  }, [vLineBackgroundColor]);

  return (
    <div className={styles.typevLine} style={typevLineStyle}>
      <div className={styles.vLine} style={vLineStyle} />
    </div>
  );
};

export default TypevLine;
