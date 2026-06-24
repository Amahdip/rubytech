// figma node: 1541:818 Input Helper (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "characterCounter=" + __venc(p.characterCounter) + '|' + "helperText=" + __venc(p.helperText) + '|' + "style2=" + __venc(p.style2);

export function InputHelper(_p = {}) {
  const props = { ..._p, characterCounter: _p.characterCounter ?? false, helperText: _p.helperText ?? false, style2: _p.style2 ?? "light" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 535,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 11,
        textAlign: "right",
        lineHeight: "100%",
        color: "rgb(111,114,133)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.text1 ?? "لورم ایپسوم متنی است آزمایشی برای ساخت نمونه اولیه"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 535,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 11,
        textAlign: "right",
        lineHeight: "100%",
        color: "rgb(157,161,177)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.text1 ?? "لورم ایپسوم متنی است آزمایشی برای ساخت نمونه اولیه"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 535,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 11,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(111,114,133)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "۰ از 50"}</span>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 11,
        textAlign: "right",
        lineHeight: "100%",
        color: "rgb(111,114,133)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.text2 ?? "لورم ایپسوم متنی است آزمایشی برای ساخت نمونه اولیه"}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 535,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 11,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(157,161,177)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "۰ از 50"}</span>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 11,
        textAlign: "right",
        lineHeight: "100%",
        color: "rgb(157,161,177)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.text2 ?? "لورم ایپسوم متنی است آزمایشی برای ساخت نمونه اولیه"}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 535,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 11,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(111,114,133)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "۰ از 50"}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 535,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 11,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(157,161,177)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "۰ از 50"}</span>
    </div>
  );
  const __impls = {
    // figma: Character Counter=No, Helper Text=Yes, Style=Light
    "characterCounter=false|helperText=true|style2=light": __body0,
    // figma: Character Counter=No, Helper Text=Yes, Style=Dark
    "characterCounter=false|helperText=true|style2=dark": __body1,
    // figma: Character Counter=Yes, Helper Text=Yes, Style=Light
    "characterCounter=true|helperText=true|style2=light": __body2,
    // figma: Character Counter=Yes, Helper Text=Yes, Style=Dark
    "characterCounter=true|helperText=true|style2=dark": __body3,
    // figma: Character Counter=Yes, Helper Text=No, Style=Light
    "characterCounter=true|helperText=false|style2=light": __body4,
    // figma: Character Counter=Yes, Helper Text=No, Style=Dark
    "characterCounter=true|helperText=false|style2=dark": __body5,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default InputHelper;
