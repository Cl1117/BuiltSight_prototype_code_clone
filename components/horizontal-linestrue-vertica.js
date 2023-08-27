import { useMemo } from "react";
import NoOfLines8Lines from "./no-of-lines8-lines";
import TypehLineValue from "./typeh-line-value";
import TypetimeIntervalNumberOf from "./typetime-interval-number-of";
import styles from "./horizontal-linestrue-vertica.module.css";
const HorizontalLinestrueVertica = ({
  leftValue,
  leftValue1,
  leftValue2,
  leftValue3,
  leftValue4,
  leftValue5,
  jan,
  feb,
  mar,
  apr,
  may,
  jun,
  jul,
  aug,
  horizontalLine,
  horizontalLine1,
  horizontalLinestrueVerticPosition,
  horizontalLinestrueVerticWidth,
  horizontalLinestrueVerticHeight,
  horizontalLinestrueVerticTop,
  horizontalLinestrueVerticRight,
  horizontalLinestrueVerticBottom,
  horizontalLinestrueVerticLeft,
  hLinesValuesMixBlendMode,
  hLineFlex,
  hLinePosition,
  hLineBackgroundColor,
  hLineHeight,
  hLineLineBreak,
  hLineWidth,
  horizontalLineAlignSelf,
  horizontalLineFlexDirection,
  horizontalLineAlignItems,
  horizontalLineJustifyContent,
  horizontalLineGap,
  leftValuePosition,
  leftValueFontSize,
  leftValueLineHeight,
  leftValueFontFamily,
  leftValueColor,
  leftValueTextAlign,
  leftValueDisplay,
  leftValueAlignItems,
  leftValueWidth,
  leftValueFlexShrink,
  leftValueLetterSpacing,
  hLineFlex1,
  hLinePosition1,
  hLineBackgroundColor1,
  hLineHeight1,
  horizontalLineAlignSelf1,
  horizontalLineDisplay,
  horizontalLineFlexDirection1,
  horizontalLineAlignItems1,
  horizontalLineJustifyContent1,
  horizontalLineGap1,
  horizontalLineFlex,
  horizontalLinePosition,
  horizontalLineBackgroundColor,
  horizontalLineHeight,
  leftValuePosition1,
  leftValueFontSize1,
  leftValueLineHeight1,
  leftValueFontFamily1,
  leftValueColor1,
  leftValueTextAlign1,
  leftValueWidth1,
  leftValueFlexShrink1,
  leftValueAlignSelf,
  leftValueFlexDirection,
  leftValueJustifyContent,
  leftValueGap,
  hLineFlex2,
  hLineBackgroundColor2,
  hLineHeight2,
  hLineFontSize,
  hLineLetterSpacing,
  hLineLineHeight,
  hLineFontFamily,
  hLineColor,
  hLineTextAlign,
  hLineDisplay,
  hLineAlignItems,
  hLineWidth1,
  hLineFlexShrink,
  horizontalLineAlignSelf2,
  horizontalLineDisplay1,
  horizontalLineFlexDirection2,
  horizontalLineAlignItems2,
  horizontalLineJustifyContent2,
  horizontalLineGap2,
  horizontalLineFlex1,
  horizontalLinePosition1,
  horizontalLineBackgroundColor1,
  horizontalLineHeight1,
  leftValuePosition2,
  leftValueFontSize2,
  leftValueLineHeight2,
  leftValueFontFamily2,
  leftValueColor2,
  leftValueTextAlign2,
  leftValueWidth2,
  leftValueFlexShrink2,
  leftValueAlignSelf1,
  leftValueFlexDirection1,
  leftValueJustifyContent1,
  leftValueGap1,
  hLineFlex3,
  hLineBackgroundColor3,
  hLineHeight3,
  hLineFontSize1,
  hLineLetterSpacing1,
  hLineLineHeight1,
  hLineFontFamily1,
  hLineColor1,
  hLineTextAlign1,
  hLineDisplay1,
  hLineAlignItems1,
  hLineWidth2,
  hLineFlexShrink1,
  horizontalLineAlignSelf3,
  horizontalLineDisplay2,
  horizontalLineFlexDirection3,
  horizontalLineAlignItems3,
  horizontalLineJustifyContent3,
  horizontalLineGap3,
  horizontalLineFlex2,
  horizontalLinePosition2,
  horizontalLineBackgroundColor2,
  horizontalLineHeight2,
  leftValuePosition3,
  leftValueFontSize3,
  leftValueLineHeight3,
  leftValueFontFamily3,
  leftValueColor3,
  leftValueTextAlign3,
  leftValueWidth3,
  leftValueFlexShrink3,
  leftValueAlignSelf2,
  leftValueFlexDirection2,
  leftValueJustifyContent2,
  leftValueGap2,
  hLineFlex4,
  hLineBackgroundColor4,
  hLineHeight4,
  hLineFontSize2,
  hLineLineHeight2,
  hLineFontFamily2,
  hLineColor2,
  hLineTextAlign2,
  hLineDisplay2,
  hLineAlignItems2,
  hLineWidth3,
  hLineFlexShrink2,
  horizontalLineAlignSelf4,
  horizontalLineDisplay3,
  horizontalLineFlexDirection4,
  horizontalLineAlignItems4,
  horizontalLineJustifyContent4,
  horizontalLineGap4,
  horizontalLineFlex3,
  horizontalLinePosition3,
  horizontalLineBackgroundColor3,
  horizontalLineHeight3,
  leftValuePosition4,
  leftValueFontSize4,
  leftValueLineHeight4,
  leftValueFontFamily4,
  leftValueColor4,
  leftValueTextAlign4,
  leftValueWidth4,
  leftValueFlexShrink4,
  leftValueAlignSelf3,
  leftValueFlexDirection3,
  leftValueJustifyContent3,
  leftValueGap3,
  hLineFlex5,
  hLineBackgroundColor5,
  hLineHeight5,
  hLineFontSize3,
  hLineLineHeight3,
  hLineFontFamily3,
  hLineColor3,
  hLineTextAlign3,
  hLineDisplay3,
  hLineAlignItems3,
  hLineWidth4,
  hLineFlexShrink3,
  xAxisValuesDarkModeAlignSelf,
  xAxisValuesDarkModeDisplay,
  xAxisValuesDarkModeFlexDirection,
  xAxisValuesDarkModePadding,
  xAxisValuesDarkModeBoxSizing,
  xAxisValuesDarkModeAlignItems,
  xAxisValuesDarkModeJustifyContent,
  xAxisValuesDarkModeFlex,
  xAxisValuesDarkModePosition,
  xAxisValuesDarkModeBackgroundColor,
  xAxisValuesDarkModeHeight,
  janPosition,
  janFontSize,
  janLineHeight,
  janFontFamily,
  janColor,
  janTextAlign,
  janDisplay,
  janWidth,
  janHeight,
  janFlexShrink,
  janAlignSelf,
  janFlexDirection,
  janAlignItems,
  janJustifyContent,
  janGap,
  febTextAlign,
  febDisplay,
  febWidth,
  febHeight,
  febAlignItems,
  marFontSize,
  marLineHeight,
  marFontFamily,
  marColor,
  marTextAlign,
  marDisplay,
  marWidth,
  marHeight,
  marFlexShrink,
  marFlex,
  marBackgroundColor,
  aprPosition,
  aprFontSize,
  aprLineHeight,
  aprFontFamily,
  aprColor,
  aprTextAlign,
  aprDisplay,
  aprWidth,
  aprHeight,
  aprFlexShrink,
  aprAlignSelf,
  aprFlexDirection,
  aprPadding,
  aprBoxSizing,
  aprAlignItems,
  aprJustifyContent,
}) => {
  const horizontalLinestrueVerticaStyle = useMemo(() => {
    return {
      position: horizontalLinestrueVerticPosition,
      width: horizontalLinestrueVerticWidth,
      height: horizontalLinestrueVerticHeight,
      top: horizontalLinestrueVerticTop,
      right: horizontalLinestrueVerticRight,
      bottom: horizontalLinestrueVerticBottom,
      left: horizontalLinestrueVerticLeft,
    };
  }, [
    horizontalLinestrueVerticPosition,
    horizontalLinestrueVerticWidth,
    horizontalLinestrueVerticHeight,
    horizontalLinestrueVerticTop,
    horizontalLinestrueVerticRight,
    horizontalLinestrueVerticBottom,
    horizontalLinestrueVerticLeft,
  ]);

  const hLinesValuesStyle = useMemo(() => {
    return {
      mixBlendMode: hLinesValuesMixBlendMode,
    };
  }, [hLinesValuesMixBlendMode]);

  const hLineStyle = useMemo(() => {
    return {
      flex: hLineFlex,
      position: hLinePosition,
      backgroundColor: hLineBackgroundColor,
      height: hLineHeight,
      lineBreak: hLineLineBreak,
      width: hLineWidth,
    };
  }, [
    hLineFlex,
    hLinePosition,
    hLineBackgroundColor,
    hLineHeight,
    hLineLineBreak,
    hLineWidth,
  ]);

  const horizontalLineStyle = useMemo(() => {
    return {
      alignSelf: horizontalLineAlignSelf,
      flexDirection: horizontalLineFlexDirection,
      alignItems: horizontalLineAlignItems,
      justifyContent: horizontalLineJustifyContent,
      gap: horizontalLineGap,
    };
  }, [
    horizontalLineAlignSelf,
    horizontalLineFlexDirection,
    horizontalLineAlignItems,
    horizontalLineJustifyContent,
    horizontalLineGap,
  ]);

  const leftValueStyle = useMemo(() => {
    return {
      position: leftValuePosition,
      fontSize: leftValueFontSize,
      lineHeight: leftValueLineHeight,
      fontFamily: leftValueFontFamily,
      color: leftValueColor,
      textAlign: leftValueTextAlign,
      display: leftValueDisplay,
      alignItems: leftValueAlignItems,
      width: leftValueWidth,
      flexShrink: leftValueFlexShrink,
      letterSpacing: leftValueLetterSpacing,
    };
  }, [
    leftValuePosition,
    leftValueFontSize,
    leftValueLineHeight,
    leftValueFontFamily,
    leftValueColor,
    leftValueTextAlign,
    leftValueDisplay,
    leftValueAlignItems,
    leftValueWidth,
    leftValueFlexShrink,
    leftValueLetterSpacing,
  ]);

  const hLine1Style = useMemo(() => {
    return {
      flex: hLineFlex1,
      position: hLinePosition1,
      backgroundColor: hLineBackgroundColor1,
      height: hLineHeight1,
    };
  }, [hLineFlex1, hLinePosition1, hLineBackgroundColor1, hLineHeight1]);

  const typehLineValueStyle = useMemo(() => {
    return {
      alignSelf: horizontalLineAlignSelf1,
      display: horizontalLineDisplay,
      flexDirection: horizontalLineFlexDirection1,
      alignItems: horizontalLineAlignItems1,
      justifyContent: horizontalLineJustifyContent1,
      gap: horizontalLineGap1,
      flex: horizontalLineFlex,
      position: horizontalLinePosition,
      backgroundColor: horizontalLineBackgroundColor,
      height: horizontalLineHeight,
    };
  }, [
    horizontalLineAlignSelf1,
    horizontalLineDisplay,
    horizontalLineFlexDirection1,
    horizontalLineAlignItems1,
    horizontalLineJustifyContent1,
    horizontalLineGap1,
    horizontalLineFlex,
    horizontalLinePosition,
    horizontalLineBackgroundColor,
    horizontalLineHeight,
  ]);

  const leftValue1Style = useMemo(() => {
    return {
      position: leftValuePosition1,
      fontSize: leftValueFontSize1,
      lineHeight: leftValueLineHeight1,
      fontFamily: leftValueFontFamily1,
      color: leftValueColor1,
      textAlign: leftValueTextAlign1,
      width: leftValueWidth1,
      flexShrink: leftValueFlexShrink1,
      alignSelf: leftValueAlignSelf,
      flexDirection: leftValueFlexDirection,
      justifyContent: leftValueJustifyContent,
      gap: leftValueGap,
    };
  }, [
    leftValuePosition1,
    leftValueFontSize1,
    leftValueLineHeight1,
    leftValueFontFamily1,
    leftValueColor1,
    leftValueTextAlign1,
    leftValueWidth1,
    leftValueFlexShrink1,
    leftValueAlignSelf,
    leftValueFlexDirection,
    leftValueJustifyContent,
    leftValueGap,
  ]);

  const hLine2Style = useMemo(() => {
    return {
      flex: hLineFlex2,
      backgroundColor: hLineBackgroundColor2,
      height: hLineHeight2,
      fontSize: hLineFontSize,
      letterSpacing: hLineLetterSpacing,
      lineHeight: hLineLineHeight,
      fontFamily: hLineFontFamily,
      color: hLineColor,
      textAlign: hLineTextAlign,
      display: hLineDisplay,
      alignItems: hLineAlignItems,
      width: hLineWidth1,
      flexShrink: hLineFlexShrink,
    };
  }, [
    hLineFlex2,
    hLineBackgroundColor2,
    hLineHeight2,
    hLineFontSize,
    hLineLetterSpacing,
    hLineLineHeight,
    hLineFontFamily,
    hLineColor,
    hLineTextAlign,
    hLineDisplay,
    hLineAlignItems,
    hLineWidth1,
    hLineFlexShrink,
  ]);

  const typehLineValueStyle1 = useMemo(() => {
    return {
      alignSelf: horizontalLineAlignSelf2,
      display: horizontalLineDisplay1,
      flexDirection: horizontalLineFlexDirection2,
      alignItems: horizontalLineAlignItems2,
      justifyContent: horizontalLineJustifyContent2,
      gap: horizontalLineGap2,
      flex: horizontalLineFlex1,
      position: horizontalLinePosition1,
      backgroundColor: horizontalLineBackgroundColor1,
      height: horizontalLineHeight1,
    };
  }, [
    horizontalLineAlignSelf2,
    horizontalLineDisplay1,
    horizontalLineFlexDirection2,
    horizontalLineAlignItems2,
    horizontalLineJustifyContent2,
    horizontalLineGap2,
    horizontalLineFlex1,
    horizontalLinePosition1,
    horizontalLineBackgroundColor1,
    horizontalLineHeight1,
  ]);

  const leftValue1Style1 = useMemo(() => {
    return {
      position: leftValuePosition2,
      fontSize: leftValueFontSize2,
      lineHeight: leftValueLineHeight2,
      fontFamily: leftValueFontFamily2,
      color: leftValueColor2,
      textAlign: leftValueTextAlign2,
      width: leftValueWidth2,
      flexShrink: leftValueFlexShrink2,
      alignSelf: leftValueAlignSelf1,
      flexDirection: leftValueFlexDirection1,
      justifyContent: leftValueJustifyContent1,
      gap: leftValueGap1,
    };
  }, [
    leftValuePosition2,
    leftValueFontSize2,
    leftValueLineHeight2,
    leftValueFontFamily2,
    leftValueColor2,
    leftValueTextAlign2,
    leftValueWidth2,
    leftValueFlexShrink2,
    leftValueAlignSelf1,
    leftValueFlexDirection1,
    leftValueJustifyContent1,
    leftValueGap1,
  ]);

  const hLine2Style1 = useMemo(() => {
    return {
      flex: hLineFlex3,
      backgroundColor: hLineBackgroundColor3,
      height: hLineHeight3,
      fontSize: hLineFontSize1,
      letterSpacing: hLineLetterSpacing1,
      lineHeight: hLineLineHeight1,
      fontFamily: hLineFontFamily1,
      color: hLineColor1,
      textAlign: hLineTextAlign1,
      display: hLineDisplay1,
      alignItems: hLineAlignItems1,
      width: hLineWidth2,
      flexShrink: hLineFlexShrink1,
    };
  }, [
    hLineFlex3,
    hLineBackgroundColor3,
    hLineHeight3,
    hLineFontSize1,
    hLineLetterSpacing1,
    hLineLineHeight1,
    hLineFontFamily1,
    hLineColor1,
    hLineTextAlign1,
    hLineDisplay1,
    hLineAlignItems1,
    hLineWidth2,
    hLineFlexShrink1,
  ]);

  const typehLineValueStyle2 = useMemo(() => {
    return {
      alignSelf: horizontalLineAlignSelf3,
      display: horizontalLineDisplay2,
      flexDirection: horizontalLineFlexDirection3,
      alignItems: horizontalLineAlignItems3,
      justifyContent: horizontalLineJustifyContent3,
      gap: horizontalLineGap3,
      flex: horizontalLineFlex2,
      position: horizontalLinePosition2,
      backgroundColor: horizontalLineBackgroundColor2,
      height: horizontalLineHeight2,
    };
  }, [
    horizontalLineAlignSelf3,
    horizontalLineDisplay2,
    horizontalLineFlexDirection3,
    horizontalLineAlignItems3,
    horizontalLineJustifyContent3,
    horizontalLineGap3,
    horizontalLineFlex2,
    horizontalLinePosition2,
    horizontalLineBackgroundColor2,
    horizontalLineHeight2,
  ]);

  const leftValue1Style2 = useMemo(() => {
    return {
      position: leftValuePosition3,
      fontSize: leftValueFontSize3,
      lineHeight: leftValueLineHeight3,
      fontFamily: leftValueFontFamily3,
      color: leftValueColor3,
      textAlign: leftValueTextAlign3,
      width: leftValueWidth3,
      flexShrink: leftValueFlexShrink3,
      alignSelf: leftValueAlignSelf2,
      flexDirection: leftValueFlexDirection2,
      justifyContent: leftValueJustifyContent2,
      gap: leftValueGap2,
    };
  }, [
    leftValuePosition3,
    leftValueFontSize3,
    leftValueLineHeight3,
    leftValueFontFamily3,
    leftValueColor3,
    leftValueTextAlign3,
    leftValueWidth3,
    leftValueFlexShrink3,
    leftValueAlignSelf2,
    leftValueFlexDirection2,
    leftValueJustifyContent2,
    leftValueGap2,
  ]);

  const hLine2Style2 = useMemo(() => {
    return {
      flex: hLineFlex4,
      backgroundColor: hLineBackgroundColor4,
      height: hLineHeight4,
      fontSize: hLineFontSize2,
      lineHeight: hLineLineHeight2,
      fontFamily: hLineFontFamily2,
      color: hLineColor2,
      textAlign: hLineTextAlign2,
      display: hLineDisplay2,
      alignItems: hLineAlignItems2,
      width: hLineWidth3,
      flexShrink: hLineFlexShrink2,
    };
  }, [
    hLineFlex4,
    hLineBackgroundColor4,
    hLineHeight4,
    hLineFontSize2,
    hLineLineHeight2,
    hLineFontFamily2,
    hLineColor2,
    hLineTextAlign2,
    hLineDisplay2,
    hLineAlignItems2,
    hLineWidth3,
    hLineFlexShrink2,
  ]);

  const typehLineValueStyle3 = useMemo(() => {
    return {
      alignSelf: horizontalLineAlignSelf4,
      display: horizontalLineDisplay3,
      flexDirection: horizontalLineFlexDirection4,
      alignItems: horizontalLineAlignItems4,
      justifyContent: horizontalLineJustifyContent4,
      gap: horizontalLineGap4,
      flex: horizontalLineFlex3,
      position: horizontalLinePosition3,
      backgroundColor: horizontalLineBackgroundColor3,
      height: horizontalLineHeight3,
    };
  }, [
    horizontalLineAlignSelf4,
    horizontalLineDisplay3,
    horizontalLineFlexDirection4,
    horizontalLineAlignItems4,
    horizontalLineJustifyContent4,
    horizontalLineGap4,
    horizontalLineFlex3,
    horizontalLinePosition3,
    horizontalLineBackgroundColor3,
    horizontalLineHeight3,
  ]);

  const leftValue1Style3 = useMemo(() => {
    return {
      position: leftValuePosition4,
      fontSize: leftValueFontSize4,
      lineHeight: leftValueLineHeight4,
      fontFamily: leftValueFontFamily4,
      color: leftValueColor4,
      textAlign: leftValueTextAlign4,
      width: leftValueWidth4,
      flexShrink: leftValueFlexShrink4,
      alignSelf: leftValueAlignSelf3,
      flexDirection: leftValueFlexDirection3,
      justifyContent: leftValueJustifyContent3,
      gap: leftValueGap3,
    };
  }, [
    leftValuePosition4,
    leftValueFontSize4,
    leftValueLineHeight4,
    leftValueFontFamily4,
    leftValueColor4,
    leftValueTextAlign4,
    leftValueWidth4,
    leftValueFlexShrink4,
    leftValueAlignSelf3,
    leftValueFlexDirection3,
    leftValueJustifyContent3,
    leftValueGap3,
  ]);

  const hLine2Style3 = useMemo(() => {
    return {
      flex: hLineFlex5,
      backgroundColor: hLineBackgroundColor5,
      height: hLineHeight5,
      fontSize: hLineFontSize3,
      lineHeight: hLineLineHeight3,
      fontFamily: hLineFontFamily3,
      color: hLineColor3,
      textAlign: hLineTextAlign3,
      display: hLineDisplay3,
      alignItems: hLineAlignItems3,
      width: hLineWidth4,
      flexShrink: hLineFlexShrink3,
    };
  }, [
    hLineFlex5,
    hLineBackgroundColor5,
    hLineHeight5,
    hLineFontSize3,
    hLineLineHeight3,
    hLineFontFamily3,
    hLineColor3,
    hLineTextAlign3,
    hLineDisplay3,
    hLineAlignItems3,
    hLineWidth4,
    hLineFlexShrink3,
  ]);

  const typetimeIntervalNumberOfStyle = useMemo(() => {
    return {
      alignSelf: xAxisValuesDarkModeAlignSelf,
      display: xAxisValuesDarkModeDisplay,
      flexDirection: xAxisValuesDarkModeFlexDirection,
      padding: xAxisValuesDarkModePadding,
      boxSizing: xAxisValuesDarkModeBoxSizing,
      alignItems: xAxisValuesDarkModeAlignItems,
      justifyContent: xAxisValuesDarkModeJustifyContent,
      flex: xAxisValuesDarkModeFlex,
      position: xAxisValuesDarkModePosition,
      backgroundColor: xAxisValuesDarkModeBackgroundColor,
      height: xAxisValuesDarkModeHeight,
    };
  }, [
    xAxisValuesDarkModeAlignSelf,
    xAxisValuesDarkModeDisplay,
    xAxisValuesDarkModeFlexDirection,
    xAxisValuesDarkModePadding,
    xAxisValuesDarkModeBoxSizing,
    xAxisValuesDarkModeAlignItems,
    xAxisValuesDarkModeJustifyContent,
    xAxisValuesDarkModeFlex,
    xAxisValuesDarkModePosition,
    xAxisValuesDarkModeBackgroundColor,
    xAxisValuesDarkModeHeight,
  ]);

  const janStyle = useMemo(() => {
    return {
      position: janPosition,
      fontSize: janFontSize,
      lineHeight: janLineHeight,
      fontFamily: janFontFamily,
      color: janColor,
      textAlign: janTextAlign,
      display: janDisplay,
      width: janWidth,
      height: janHeight,
      flexShrink: janFlexShrink,
      alignSelf: janAlignSelf,
      flexDirection: janFlexDirection,
      alignItems: janAlignItems,
      justifyContent: janJustifyContent,
      gap: janGap,
    };
  }, [
    janPosition,
    janFontSize,
    janLineHeight,
    janFontFamily,
    janColor,
    janTextAlign,
    janDisplay,
    janWidth,
    janHeight,
    janFlexShrink,
    janAlignSelf,
    janFlexDirection,
    janAlignItems,
    janJustifyContent,
    janGap,
  ]);

  const febStyle = useMemo(() => {
    return {
      textAlign: febTextAlign,
      display: febDisplay,
      width: febWidth,
      height: febHeight,
      alignItems: febAlignItems,
    };
  }, [febTextAlign, febDisplay, febWidth, febHeight, febAlignItems]);

  const marStyle = useMemo(() => {
    return {
      fontSize: marFontSize,
      lineHeight: marLineHeight,
      fontFamily: marFontFamily,
      color: marColor,
      textAlign: marTextAlign,
      display: marDisplay,
      width: marWidth,
      height: marHeight,
      flexShrink: marFlexShrink,
      flex: marFlex,
      backgroundColor: marBackgroundColor,
    };
  }, [
    marFontSize,
    marLineHeight,
    marFontFamily,
    marColor,
    marTextAlign,
    marDisplay,
    marWidth,
    marHeight,
    marFlexShrink,
    marFlex,
    marBackgroundColor,
  ]);

  const aprStyle = useMemo(() => {
    return {
      position: aprPosition,
      fontSize: aprFontSize,
      lineHeight: aprLineHeight,
      fontFamily: aprFontFamily,
      color: aprColor,
      textAlign: aprTextAlign,
      display: aprDisplay,
      width: aprWidth,
      height: aprHeight,
      flexShrink: aprFlexShrink,
      alignSelf: aprAlignSelf,
      flexDirection: aprFlexDirection,
      padding: aprPadding,
      boxSizing: aprBoxSizing,
      alignItems: aprAlignItems,
      justifyContent: aprJustifyContent,
    };
  }, [
    aprPosition,
    aprFontSize,
    aprLineHeight,
    aprFontFamily,
    aprColor,
    aprTextAlign,
    aprDisplay,
    aprWidth,
    aprHeight,
    aprFlexShrink,
    aprAlignSelf,
    aprFlexDirection,
    aprPadding,
    aprBoxSizing,
    aprAlignItems,
    aprJustifyContent,
  ]);

  return (
    <div
      className={styles.horizontalLinestrueVertica}
      style={horizontalLinestrueVerticaStyle}
    >
      <NoOfLines8Lines
        noOfLines8LinesPosition="absolute"
        noOfLines8LinesWidth="100%"
        noOfLines8LinesHeight="100%"
        noOfLines8LinesTop="0px"
        noOfLines8LinesRight="0px"
        noOfLines8LinesBottom="0px"
        noOfLines8LinesLeft="0px"
        noOfLines8LinesPadding="var(--padding-2xs) 0px var(--padding-9xl) var(--padding-lgi)"
        noOfLines8LinesBoxSizing="border-box"
        vLineBackgroundColor="#363840"
        vLineBackgroundColor1="#363840"
        vLineBackgroundColor2="#363840"
        vLineBackgroundColor3="#363840"
        vLineBackgroundColor4="#363840"
        vLineBackgroundColor5="#363840"
        vLineBackgroundColor6="#363840"
        vLineBackgroundColor7="#363840"
      />
      <div className={styles.defaultGrid}>
        <div className={styles.hLinesValues} style={hLinesValuesStyle}>
          {!horizontalLine && (
            <div className={styles.horizontalLine}>
              <div className={styles.leftValue}>{leftValue}</div>
              <div className={styles.hLine} style={hLineStyle} />
            </div>
          )}
          {!horizontalLine1 && (
            <div className={styles.horizontalLine} style={horizontalLineStyle}>
              <div className={styles.leftValue} style={leftValueStyle}>
                {leftValue1}
              </div>
              <div className={styles.hLine} style={hLine1Style} />
            </div>
          )}
          <TypehLineValue
            leftValue="75M"
            typehLineValuePosition="unset"
            typehLineValueWidth="unset"
            typehLineValueAlignItems="center"
            typehLineValueAlignSelf="stretch"
            leftValueColor="#9b9eab"
            leftValueLetterSpacing="unset"
            hLineBackgroundColor="#363840"
            hLineFlex="1"
            hLinePosition="relative"
            hLineHeight="1px"
            hLineLineBreak="unset"
            hLineWidth="unset"
          />
          <TypehLineValue
            leftValue="50M"
            typehLineValuePosition="unset"
            typehLineValueWidth="unset"
            typehLineValueAlignItems="center"
            typehLineValueAlignSelf="stretch"
            leftValueColor="#9b9eab"
            leftValueLetterSpacing="unset"
            hLineBackgroundColor="#363840"
            hLineFlex="1"
            hLinePosition="relative"
            hLineHeight="1px"
            hLineLineBreak="unset"
            hLineWidth="unset"
          />
          <TypehLineValue
            leftValue="25M"
            typehLineValuePosition="unset"
            typehLineValueWidth="unset"
            typehLineValueAlignItems="center"
            typehLineValueAlignSelf="stretch"
            leftValueColor="#9b9eab"
            leftValueLetterSpacing="unset"
            hLineBackgroundColor="#363840"
            hLineFlex="1"
            hLinePosition="relative"
            hLineHeight="1px"
            hLineLineBreak="unset"
            hLineWidth="unset"
          />
          <TypehLineValue
            leftValue="0"
            typehLineValuePosition="unset"
            typehLineValueWidth="unset"
            typehLineValueAlignItems="flex-end"
            typehLineValueAlignSelf="stretch"
            leftValueColor="#9b9eab"
            leftValueLetterSpacing="unset"
            hLineBackgroundColor="#41434d"
            hLineFlex="1"
            hLinePosition="relative"
            hLineHeight="1px"
            hLineLineBreak="unset"
            hLineWidth="unset"
          />
        </div>
        <TypetimeIntervalNumberOf
          typetimeIntervalNumberOfPosition="unset"
          typetimeIntervalNumberOfWidth="unset"
          typetimeIntervalNumberOfAlignSelf="stretch"
          typetimeIntervalNumberOfPadding="0px 0px 0px var(--padding-lg)"
          typetimeIntervalNumberOfBoxSizing="border-box"
        />
      </div>
    </div>
  );
};

export default HorizontalLinestrueVertica;
