import { useMemo } from "react";
import TypevLine from "./typev-line";
import styles from "./no-of-lines8-lines.module.css";
const NoOfLines8Lines = ({
  noOfLines8LinesPosition,
  noOfLines8LinesWidth,
  noOfLines8LinesHeight,
  noOfLines8LinesTop,
  noOfLines8LinesRight,
  noOfLines8LinesBottom,
  noOfLines8LinesLeft,
  noOfLines8LinesPadding,
  noOfLines8LinesBoxSizing,
  vLineBackgroundColor,
  vLineBackgroundColor1,
  vLineBackgroundColor2,
  vLineBackgroundColor3,
  vLineBackgroundColor4,
  vLineBackgroundColor5,
  vLineBackgroundColor6,
  vLineBackgroundColor7,
}) => {
  const noOfLines8LinesStyle = useMemo(() => {
    return {
      position: noOfLines8LinesPosition,
      width: noOfLines8LinesWidth,
      height: noOfLines8LinesHeight,
      top: noOfLines8LinesTop,
      right: noOfLines8LinesRight,
      bottom: noOfLines8LinesBottom,
      left: noOfLines8LinesLeft,
      padding: noOfLines8LinesPadding,
      boxSizing: noOfLines8LinesBoxSizing,
    };
  }, [
    noOfLines8LinesPosition,
    noOfLines8LinesWidth,
    noOfLines8LinesHeight,
    noOfLines8LinesTop,
    noOfLines8LinesRight,
    noOfLines8LinesBottom,
    noOfLines8LinesLeft,
    noOfLines8LinesPadding,
    noOfLines8LinesBoxSizing,
  ]);

  const vLineStyle = useMemo(() => {
    return {
      backgroundColor: vLineBackgroundColor,
    };
  }, [vLineBackgroundColor]);

  const vLineStyle1 = useMemo(() => {
    return {
      backgroundColor: vLineBackgroundColor1,
    };
  }, [vLineBackgroundColor1]);

  const vLineStyle2 = useMemo(() => {
    return {
      backgroundColor: vLineBackgroundColor2,
    };
  }, [vLineBackgroundColor2]);

  const vLineStyle3 = useMemo(() => {
    return {
      backgroundColor: vLineBackgroundColor3,
    };
  }, [vLineBackgroundColor3]);

  const vLineStyle4 = useMemo(() => {
    return {
      backgroundColor: vLineBackgroundColor4,
    };
  }, [vLineBackgroundColor4]);

  const vLineStyle5 = useMemo(() => {
    return {
      backgroundColor: vLineBackgroundColor5,
    };
  }, [vLineBackgroundColor5]);

  const vLineStyle6 = useMemo(() => {
    return {
      backgroundColor: vLineBackgroundColor6,
    };
  }, [vLineBackgroundColor6]);

  const vLineStyle7 = useMemo(() => {
    return {
      backgroundColor: vLineBackgroundColor7,
    };
  }, [vLineBackgroundColor7]);

  return (
    <div className={styles.noOfLines8Lines} style={noOfLines8LinesStyle}>
      <TypevLine
        typevLinePosition="unset"
        typevLineHeight="unset"
        typevLineBoxSizing="border-box"
        typevLineAlignSelf="stretch"
        vLineBackgroundColor="#dde3e7"
      />
      <TypevLine
        typevLinePosition="unset"
        typevLineHeight="unset"
        typevLineBoxSizing="border-box"
        typevLineAlignSelf="stretch"
        vLineBackgroundColor="#dde3e7"
      />
      <TypevLine
        typevLinePosition="unset"
        typevLineHeight="unset"
        typevLineBoxSizing="border-box"
        typevLineAlignSelf="stretch"
        vLineBackgroundColor="#dde3e7"
      />
      <TypevLine
        typevLinePosition="unset"
        typevLineHeight="unset"
        typevLineBoxSizing="border-box"
        typevLineAlignSelf="stretch"
        vLineBackgroundColor="#dde3e7"
      />
      <TypevLine
        typevLinePosition="unset"
        typevLineHeight="unset"
        typevLineBoxSizing="border-box"
        typevLineAlignSelf="stretch"
        vLineBackgroundColor="#dde3e7"
      />
      <TypevLine
        typevLinePosition="unset"
        typevLineHeight="unset"
        typevLineBoxSizing="border-box"
        typevLineAlignSelf="stretch"
        vLineBackgroundColor="#dde3e7"
      />
      <TypevLine
        typevLinePosition="unset"
        typevLineHeight="unset"
        typevLineBoxSizing="border-box"
        typevLineAlignSelf="stretch"
        vLineBackgroundColor="#dde3e7"
      />
      <TypevLine
        typevLinePosition="unset"
        typevLineHeight="unset"
        typevLineBoxSizing="border-box"
        typevLineAlignSelf="stretch"
        vLineBackgroundColor="#dde3e7"
      />
    </div>
  );
};

export default NoOfLines8Lines;
