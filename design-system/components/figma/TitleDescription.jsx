import { InputAssets } from './InputAssets.jsx';

// figma node: 1541:811 Title & Description (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "style2=" + __venc(p.style2);

export function TitleDescription(_p = {}) {
  const props = { ..._p, style2: _p.style2 ?? "light" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 327,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "0px 0px 4px 0px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <InputAssets
        style={{ position: "relative", flexShrink: 0 }}
        text1={"ﻟﯿﻨﮏ وﯾﺪﯾﻮ ﺷﻤﺎ"}
        size={"md"}
        requiredField={false}
        tooltip={false}
        style2={"light"}
      />
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 13,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(111,114,133)",
        flexShrink: 0,
      }}>{props.text1 ?? "لورم ایپسوم متنی است آزمایشی برای ساخت در صنعت چاپ."}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 340,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "0px 0px 4px 0px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <InputAssets
        style={{ position: "relative", flexShrink: 0 }}
        text1={"ﻟﯿﻨﮏ وﯾﺪﯾﻮ ﺷﻤﺎ"}
        size={"md"}
        requiredField={false}
        tooltip={false}
        style2={"dark"}
      />
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 13,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(157,161,177)",
        flexShrink: 0,
      }}>{props.text1 ?? "لورم ایپسوم متنی است آزمایشی برای ساخت در صنعت چاپ."}</span>
    </div>
  );
  const __impls = {
    // figma: Style=Light
    "style2=light": __body0,
    // figma: Style=Dark
    "style2=dark": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default TitleDescription;
