import { HelpIcon } from './HelpIcon.jsx';

// figma node: 1541:621 Input Assets (16 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size) + '|' + "requiredField=" + __venc(p.requiredField) + '|' + "tooltip=" + __venc(p.tooltip) + '|' + "style2=" + __venc(p.style2);

export function InputAssets(_p = {}) {
  const props = { ..._p, size: _p.size ?? "sm", requiredField: _p.requiredField ?? true, tooltip: _p.tooltip ?? false, style2: _p.style2 ?? "light" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(111,114,133)",
        flexShrink: 0,
      }}>{props.text1 ?? "(اﺟﺒﺎری)"}</span>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(72,75,98)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "ﻟﯿﻨﮏ وﯾﺪﯾﻮ ﺷﻤﺎ"}</span>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(255,66,66)",
        flexShrink: 0,
      }}>{props.text3 ?? "*"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(157,161,177)",
        flexShrink: 0,
      }}>{props.text1 ?? "(اﺟﺒﺎری)"}</span>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(245,245,249)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "ﻟﯿﻨﮏ وﯾﺪﯾﻮ ﺷﻤﺎ"}</span>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(255,66,66)",
        flexShrink: 0,
      }}>{props.text3 ?? "*"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
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
      }}>{props.text1 ?? "(اﺟﺒﺎری)"}</span>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 15,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(72,75,98)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "ﻟﯿﻨﮏ وﯾﺪﯾﻮ ﺷﻤﺎ"}</span>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(255,66,66)",
        flexShrink: 0,
      }}>{props.text3 ?? "*"}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
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
      }}>{props.text1 ?? "(اﺟﺒﺎری)"}</span>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 15,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(245,245,249)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "ﻟﯿﻨﮏ وﯾﺪﯾﻮ ﺷﻤﺎ"}</span>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(255,66,66)",
        flexShrink: 0,
      }}>{props.text3 ?? "*"}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.icon1 ?? <HelpIcon style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(111,114,133)",
        flexShrink: 0,
      }}>{props.text1 ?? "(اﺟﺒﺎری)"}</span>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(72,75,98)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "ﻟﯿﻨﮏ وﯾﺪﯾﻮ ﺷﻤﺎ"}</span>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(255,66,66)",
        flexShrink: 0,
      }}>{props.text3 ?? "*"}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.icon1 ?? <HelpIcon style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(157,161,177)",
        flexShrink: 0,
      }}>{props.text1 ?? "(اﺟﺒﺎری)"}</span>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(245,245,249)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "ﻟﯿﻨﮏ وﯾﺪﯾﻮ ﺷﻤﺎ"}</span>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(255,66,66)",
        flexShrink: 0,
      }}>{props.text3 ?? "*"}</span>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.icon1 ?? <HelpIcon style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(111,114,133)",
        flexShrink: 0,
      }}>{props.text1 ?? "(اﺟﺒﺎری)"}</span>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 15,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(72,75,98)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "ﻟﯿﻨﮏ وﯾﺪﯾﻮ ﺷﻤﺎ"}</span>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(255,66,66)",
        flexShrink: 0,
      }}>{props.text3 ?? "*"}</span>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.icon1 ?? <HelpIcon style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(157,161,177)",
        flexShrink: 0,
      }}>{props.text1 ?? "(اﺟﺒﺎری)"}</span>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 15,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(245,245,249)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "ﻟﯿﻨﮏ وﯾﺪﯾﻮ ﺷﻤﺎ"}</span>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(255,66,66)",
        flexShrink: 0,
      }}>{props.text3 ?? "*"}</span>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(72,75,98)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "ﻟﯿﻨﮏ وﯾﺪﯾﻮ ﺷﻤﺎ"}</span>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(245,245,249)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "ﻟﯿﻨﮏ وﯾﺪﯾﻮ ﺷﻤﺎ"}</span>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 15,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(72,75,98)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "ﻟﯿﻨﮏ وﯾﺪﯾﻮ ﺷﻤﺎ"}</span>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 15,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(245,245,249)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "ﻟﯿﻨﮏ وﯾﺪﯾﻮ ﺷﻤﺎ"}</span>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.icon1 ?? <HelpIcon style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(72,75,98)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "ﻟﯿﻨﮏ وﯾﺪﯾﻮ ﺷﻤﺎ"}</span>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.icon1 ?? <HelpIcon style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(245,245,249)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "ﻟﯿﻨﮏ وﯾﺪﯾﻮ ﺷﻤﺎ"}</span>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.icon1 ?? <HelpIcon style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 15,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(72,75,98)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "ﻟﯿﻨﮏ وﯾﺪﯾﻮ ﺷﻤﺎ"}</span>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.icon1 ?? <HelpIcon style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 15,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(245,245,249)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "ﻟﯿﻨﮏ وﯾﺪﯾﻮ ﺷﻤﺎ"}</span>
    </div>
  );
  const __impls = {
    // figma: Size=Small, Required Field=Yes, Tooltip=No, Style=Light
    "size=sm|requiredField=true|tooltip=false|style2=light": __body0,
    // figma: Size=Small, Required Field=Yes, Tooltip=No, Style=Dark
    "size=sm|requiredField=true|tooltip=false|style2=dark": __body1,
    // figma: Size=Medium, Required Field=Yes, Tooltip=No, Style=Light
    "size=md|requiredField=true|tooltip=false|style2=light": __body2,
    // figma: Size=Medium, Required Field=Yes, Tooltip=No, Style=Dark
    "size=md|requiredField=true|tooltip=false|style2=dark": __body3,
    // figma: Size=Small, Required Field=Yes, Tooltip=Yes, Style=Light
    "size=sm|requiredField=true|tooltip=true|style2=light": __body4,
    // figma: Size=Small, Required Field=Yes, Tooltip=Yes, Style=Dark
    "size=sm|requiredField=true|tooltip=true|style2=dark": __body5,
    // figma: Size=Medium, Required Field=Yes, Tooltip=Yes, Style=Light
    "size=md|requiredField=true|tooltip=true|style2=light": __body6,
    // figma: Size=Medium, Required Field=Yes, Tooltip=Yes, Style=Dark
    "size=md|requiredField=true|tooltip=true|style2=dark": __body7,
    // figma: Size=Small, Required Field=No, Tooltip=No, Style=Light
    "size=sm|requiredField=false|tooltip=false|style2=light": __body8,
    // figma: Size=Small, Required Field=No, Tooltip=No, Style=Dark
    "size=sm|requiredField=false|tooltip=false|style2=dark": __body9,
    // figma: Size=Medium, Required Field=No, Tooltip=No, Style=Light
    "size=md|requiredField=false|tooltip=false|style2=light": __body10,
    // figma: Size=Medium, Required Field=No, Tooltip=No, Style=Dark
    "size=md|requiredField=false|tooltip=false|style2=dark": __body11,
    // figma: Size=Small, Required Field=No, Tooltip=Yes, Style=Light
    "size=sm|requiredField=false|tooltip=true|style2=light": __body12,
    // figma: Size=Small, Required Field=No, Tooltip=Yes, Style=Dark
    "size=sm|requiredField=false|tooltip=true|style2=dark": __body13,
    // figma: Size=Medium, Required Field=No, Tooltip=Yes, Style=Light
    "size=md|requiredField=false|tooltip=true|style2=light": __body14,
    // figma: Size=Medium, Required Field=No, Tooltip=Yes, Style=Dark
    "size=md|requiredField=false|tooltip=true|style2=dark": __body15,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default InputAssets;
