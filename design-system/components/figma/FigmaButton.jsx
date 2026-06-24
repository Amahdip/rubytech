import { AddIcon } from './AddIcon.jsx';

// figma node: 1539:1020 Button (120 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size) + '|' + "icon=" + __venc(p.icon) + '|' + "state=" + __venc(p.state) + '|' + "type=" + __venc(p.type) + '|' + "style2=" + __venc(p.style2);

export function FigmaButton(_p = {}) {
  const props = { ..._p, size: _p.size ?? "big", icon: _p.icon ?? "left", state: _p.state ?? "normal", type: _p.type ?? "primary", style2: _p.style2 ?? "light", text: _p.text ?? "دنبال کردن" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      backgroundColor: "rgb(223,15,80)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 12px 6px 16px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <AddIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      backgroundColor: "rgb(223,15,80)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 16px 6px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <AddIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 12px 6px 16px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <AddIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 16px 6px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <AddIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      backgroundColor: "rgb(251,251,252)",
      boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 12px 6px 16px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <AddIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      backgroundColor: "rgb(251,251,252)",
      boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 16px 6px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <AddIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      backgroundColor: "rgb(5,163,232)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 12px 6px 16px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <AddIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      backgroundColor: "rgb(5,163,232)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 16px 6px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <AddIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      backgroundColor: "rgb(5,163,232)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 16px 6px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      backgroundColor: "rgb(223,15,80)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 16px 6px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 16px 6px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 16px 6px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 12px 6px 16px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <AddIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 16px 6px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <AddIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      backgroundColor: "rgb(251,251,252)",
      boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 16px 6px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      backgroundColor: "rgb(223,15,80)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "5px 10px 5px 14px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.icon1 ?? <AddIcon style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      backgroundColor: "rgb(223,15,80)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "5px 14px 5px 10px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.icon1 ?? <AddIcon style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "5px 10px 5px 14px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.icon1 ?? <AddIcon style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "5px 14px 5px 10px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.icon1 ?? <AddIcon style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      backgroundColor: "rgb(251,251,252)",
      boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "5px 10px 5px 14px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.icon1 ?? <AddIcon style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      backgroundColor: "rgb(251,251,252)",
      boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "5px 14px 5px 10px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.icon1 ?? <AddIcon style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      backgroundColor: "rgb(5,163,232)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "5px 10px 5px 14px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.icon1 ?? <AddIcon style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      backgroundColor: "rgb(5,163,232)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "5px 14px 5px 10px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.icon1 ?? <AddIcon style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      backgroundColor: "rgb(5,163,232)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "5px 14px 5px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      backgroundColor: "rgb(223,15,80)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "5px 14px 5px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "5px 14px 5px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "5px 14px 5px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "5px 10px 5px 14px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.icon1 ?? <AddIcon style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "5px 14px 5px 10px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.icon1 ?? <AddIcon style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      backgroundColor: "rgb(251,251,252)",
      boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "5px 14px 5px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      backgroundColor: "rgb(223,15,80)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "6px 8px 6px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 11,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "دنبال کردن"}</span>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AddIcon />}</div>
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      backgroundColor: "rgb(223,15,80)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "6px 12px 6px 8px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AddIcon />}</div>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 11,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "دنبال کردن"}</span>
    </div>
  );
  const __body32 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "6px 8px 6px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 11,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(111,114,133)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "دنبال کردن"}</span>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AddIcon />}</div>
    </div>
  );
  const __body33 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "6px 12px 6px 8px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AddIcon />}</div>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 11,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(111,114,133)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "دنبال کردن"}</span>
    </div>
  );
  const __body34 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      backgroundColor: "rgb(251,251,252)",
      boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "6px 8px 6px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 11,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(111,114,133)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "دنبال کردن"}</span>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AddIcon />}</div>
    </div>
  );
  const __body35 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      backgroundColor: "rgb(251,251,252)",
      boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "6px 12px 6px 8px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AddIcon />}</div>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 11,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(111,114,133)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "دنبال کردن"}</span>
    </div>
  );
  const __body36 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      backgroundColor: "rgb(5,163,232)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "6px 8px 6px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 11,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "دنبال کردن"}</span>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AddIcon />}</div>
    </div>
  );
  const __body37 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      backgroundColor: "rgb(5,163,232)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "6px 12px 6px 8px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AddIcon />}</div>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 11,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "دنبال کردن"}</span>
    </div>
  );
  const __body38 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      backgroundColor: "rgb(5,163,232)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 11,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "دنبال کردن"}</span>
    </div>
  );
  const __body39 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      backgroundColor: "rgb(223,15,80)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 11,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "دنبال کردن"}</span>
    </div>
  );
  const __body40 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 11,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(111,114,133)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "دنبال کردن"}</span>
    </div>
  );
  const __body41 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 11,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(111,114,133)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "دنبال کردن"}</span>
    </div>
  );
  const __body42 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "6px 8px 6px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 11,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(111,114,133)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "دنبال کردن"}</span>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AddIcon />}</div>
    </div>
  );
  const __body43 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "6px 12px 6px 8px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AddIcon />}</div>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 11,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(111,114,133)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "دنبال کردن"}</span>
    </div>
  );
  const __body44 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      backgroundColor: "rgb(251,251,252)",
      boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 11,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(111,114,133)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "دنبال کردن"}</span>
    </div>
  );
  const __body45 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 22,
      backgroundColor: "rgb(223,15,80)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "9px 16px 9px 20px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 1px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AddIcon />}</div>
    </div>
  );
  const __body46 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 22,
      backgroundColor: "rgb(223,15,80)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "9px 20px 9px 16px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AddIcon />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 1px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body47 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 22,
      boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "9px 16px 9px 20px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 1px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AddIcon />}</div>
    </div>
  );
  const __body48 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 22,
      boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "9px 20px 9px 16px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AddIcon />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 1px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body49 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 22,
      backgroundColor: "rgb(251,251,252)",
      boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "9px 16px 9px 20px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 1px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AddIcon />}</div>
    </div>
  );
  const __body50 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 22,
      backgroundColor: "rgb(251,251,252)",
      boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "9px 20px 9px 16px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AddIcon />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 1px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body51 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 22,
      backgroundColor: "rgb(5,163,232)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "9px 16px 9px 20px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 1px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text}</span>
      </div>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AddIcon />}</div>
    </div>
  );
  const __body52 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 22,
      backgroundColor: "rgb(5,163,232)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "9px 20px 9px 16px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AddIcon />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 1px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body53 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 22,
      backgroundColor: "rgb(5,163,232)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "9px 20px 9px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 1px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body54 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 22,
      backgroundColor: "rgb(223,15,80)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "9px 20px 9px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 1px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body55 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 22,
      boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "9px 20px 9px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 1px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body56 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 22,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "9px 20px 9px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 1px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body57 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 22,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "9px 16px 9px 20px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 1px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AddIcon />}</div>
    </div>
  );
  const __body58 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 22,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "9px 20px 9px 16px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AddIcon />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 1px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body59 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 22,
      backgroundColor: "rgb(251,251,252)",
      boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "9px 20px 9px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 1px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body60 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 12px 6px 16px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(230,231,239)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <AddIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body61 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      backgroundColor: "rgba(255,255,255,0.1)",
      boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 12px 6px 16px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(230,231,239)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <AddIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body62 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "5px 10px 5px 14px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(230,231,239)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.icon1 ?? <AddIcon style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body63 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      backgroundColor: "rgba(255,255,255,0.1)",
      boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "5px 10px 5px 14px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(230,231,239)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.icon1 ?? <AddIcon style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body64 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "6px 8px 6px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 11,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(230,231,239)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "دنبال کردن"}</span>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AddIcon />}</div>
    </div>
  );
  const __body65 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      backgroundColor: "rgba(255,255,255,0.1)",
      boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "6px 8px 6px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 11,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(230,231,239)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "دنبال کردن"}</span>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AddIcon />}</div>
    </div>
  );
  const __body66 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 22,
      boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "9px 16px 9px 20px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 1px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(230,231,239)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AddIcon />}</div>
    </div>
  );
  const __body67 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 22,
      backgroundColor: "rgba(255,255,255,0.1)",
      boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "9px 16px 9px 20px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 1px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(230,231,239)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AddIcon />}</div>
    </div>
  );
  const __body68 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 16px 6px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <AddIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(230,231,239)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body69 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      backgroundColor: "rgba(255,255,255,0.1)",
      boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 16px 6px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <AddIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(230,231,239)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body70 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "5px 14px 5px 10px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.icon1 ?? <AddIcon style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(230,231,239)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body71 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      backgroundColor: "rgba(255,255,255,0.1)",
      boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "5px 14px 5px 10px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.icon1 ?? <AddIcon style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(230,231,239)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body72 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "6px 12px 6px 8px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AddIcon />}</div>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 11,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(230,231,239)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "دنبال کردن"}</span>
    </div>
  );
  const __body73 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      backgroundColor: "rgba(255,255,255,0.1)",
      boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "6px 12px 6px 8px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AddIcon />}</div>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 11,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(230,231,239)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "دنبال کردن"}</span>
    </div>
  );
  const __body74 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 22,
      boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "9px 20px 9px 16px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AddIcon />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 1px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(230,231,239)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body75 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 22,
      backgroundColor: "rgba(255,255,255,0.1)",
      boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "9px 20px 9px 16px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AddIcon />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 1px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(230,231,239)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body76 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 16px 6px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(230,231,239)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body77 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      backgroundColor: "rgba(255,255,255,0.1)",
      boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 16px 6px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(230,231,239)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body78 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "5px 14px 5px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(230,231,239)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body79 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      backgroundColor: "rgba(255,255,255,0.1)",
      boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "5px 14px 5px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(230,231,239)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body80 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 11,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(230,231,239)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "دنبال کردن"}</span>
    </div>
  );
  const __body81 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      backgroundColor: "rgba(255,255,255,0.1)",
      boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 11,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(230,231,239)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "دنبال کردن"}</span>
    </div>
  );
  const __body82 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 22,
      boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "9px 20px 9px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 1px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(230,231,239)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body83 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 22,
      backgroundColor: "rgba(255,255,255,0.1)",
      boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "9px 20px 9px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 1px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(230,231,239)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body84 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 12px 6px 16px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(230,231,239)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <AddIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body85 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "5px 10px 5px 14px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(230,231,239)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.icon1 ?? <AddIcon style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body86 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "6px 8px 6px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 11,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(230,231,239)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "دنبال کردن"}</span>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AddIcon />}</div>
    </div>
  );
  const __body87 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 22,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "9px 16px 9px 20px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 1px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(230,231,239)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AddIcon />}</div>
    </div>
  );
  const __body88 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 16px 6px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <AddIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(230,231,239)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body89 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "5px 14px 5px 10px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.icon1 ?? <AddIcon style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(230,231,239)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body90 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "6px 12px 6px 8px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AddIcon />}</div>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 11,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(230,231,239)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "دنبال کردن"}</span>
    </div>
  );
  const __body91 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 22,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "9px 20px 9px 16px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AddIcon />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 1px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(230,231,239)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body92 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 16px 6px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(230,231,239)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body93 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "5px 14px 5px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 2px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(230,231,239)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __body94 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 11,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(230,231,239)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "دنبال کردن"}</span>
    </div>
  );
  const __body95 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 22,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "9px 20px 9px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 1px 0px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(230,231,239)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "دنبال کردن"}</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: Size=Medium, Icon=Right, State=Normal, Type=Primary, Style=Light
    "size=md|icon=right|state=normal|type=primary|style2=light": __body0,
    // figma: Size=Medium, Icon=Left, State=Normal, Type=Primary, Style=Light
    "size=md|icon=left|state=normal|type=primary|style2=light": __body1,
    // figma: Size=Medium, Icon=Right, State=Normal, Type=Seconadary, Style=Light
    "size=md|icon=right|state=normal|type=seconadary|style2=light": __body2,
    // figma: Size=Medium, Icon=Left, State=Normal, Type=Seconadary, Style=Light
    "size=md|icon=left|state=normal|type=seconadary|style2=light": __body3,
    // figma: Size=Medium, Icon=Right, State=Hover, Type=Seconadary, Style=Light
    "size=md|icon=right|state=hover|type=seconadary|style2=light": __body4,
    // figma: Size=Medium, Icon=Left, State=Hover, Type=Seconadary, Style=Light
    "size=md|icon=left|state=hover|type=seconadary|style2=light": __body5,
    // figma: Size=Medium, Icon=Right, State=Normal, Type=Confirm Blue, Style=Light
    "size=md|icon=right|state=normal|type=confirm blue|style2=light": __body6,
    // figma: Size=Medium, Icon=Left, State=Normal, Type=Confirm Blue, Style=Light
    "size=md|icon=left|state=normal|type=confirm blue|style2=light": __body7,
    // figma: Size=Medium, Icon=No, State=Normal, Type=Confirm Blue, Style=Light
    "size=md|icon=no|state=normal|type=confirm blue|style2=light": __body8,
    // figma: Size=Medium, Icon=No, State=Normal, Type=Primary, Style=Light
    "size=md|icon=no|state=normal|type=primary|style2=light": __body9,
    // figma: Size=Medium, Icon=No, State=Normal, Type=Seconadary, Style=Light
    "size=md|icon=no|state=normal|type=seconadary|style2=light": __body10,
    // figma: Size=Medium, Icon=No, State=Normal, Type=Just Text, Style=Light
    "size=md|icon=no|state=normal|type=just text|style2=light": __body11,
    // figma: Size=Medium, Icon=Right, State=Normal, Type=Just Text, Style=Light
    "size=md|icon=right|state=normal|type=just text|style2=light": __body12,
    // figma: Size=Medium, Icon=Left, State=Normal, Type=Just Text, Style=Light
    "size=md|icon=left|state=normal|type=just text|style2=light": __body13,
    // figma: Size=Medium, Icon=No, State=Hover, Type=Seconadary, Style=Light
    "size=md|icon=no|state=hover|type=seconadary|style2=light": __body14,
    // figma: Size=Small, Icon=Right, State=Normal, Type=Primary, Style=Light
    "size=sm|icon=right|state=normal|type=primary|style2=light": __body15,
    // figma: Size=Small, Icon=Left, State=Normal, Type=Primary, Style=Light
    "size=sm|icon=left|state=normal|type=primary|style2=light": __body16,
    // figma: Size=Small, Icon=Right, State=Normal, Type=Seconadary, Style=Light
    "size=sm|icon=right|state=normal|type=seconadary|style2=light": __body17,
    // figma: Size=Small, Icon=Left, State=Normal, Type=Seconadary, Style=Light
    "size=sm|icon=left|state=normal|type=seconadary|style2=light": __body18,
    // figma: Size=Small, Icon=Right, State=Hover, Type=Seconadary, Style=Light
    "size=sm|icon=right|state=hover|type=seconadary|style2=light": __body19,
    // figma: Size=Small, Icon=Left, State=Hover, Type=Seconadary, Style=Light
    "size=sm|icon=left|state=hover|type=seconadary|style2=light": __body20,
    // figma: Size=Small, Icon=Right, State=Normal, Type=Confirm Blue, Style=Light
    "size=sm|icon=right|state=normal|type=confirm blue|style2=light": __body21,
    // figma: Size=Small, Icon=Left, State=Normal, Type=Confirm Blue, Style=Light
    "size=sm|icon=left|state=normal|type=confirm blue|style2=light": __body22,
    // figma: Size=Small, Icon=No, State=Normal, Type=Confirm Blue, Style=Light
    "size=sm|icon=no|state=normal|type=confirm blue|style2=light": __body23,
    // figma: Size=Small, Icon=No, State=Normal, Type=Primary, Style=Light
    "size=sm|icon=no|state=normal|type=primary|style2=light": __body24,
    // figma: Size=Small, Icon=No, State=Normal, Type=Seconadary, Style=Light
    "size=sm|icon=no|state=normal|type=seconadary|style2=light": __body25,
    // figma: Size=Small, Icon=No, State=Normal, Type=Just Text, Style=Light
    "size=sm|icon=no|state=normal|type=just text|style2=light": __body26,
    // figma: Size=Small, Icon=Right, State=Normal, Type=Just Text, Style=Light
    "size=sm|icon=right|state=normal|type=just text|style2=light": __body27,
    // figma: Size=Small, Icon=Left, State=Normal, Type=Just Text, Style=Light
    "size=sm|icon=left|state=normal|type=just text|style2=light": __body28,
    // figma: Size=Small, Icon=No, State=Hover, Type=Seconadary, Style=Light
    "size=sm|icon=no|state=hover|type=seconadary|style2=light": __body29,
    // figma: Size=Tiny, Icon=Right, State=Normal, Type=Primary, Style=Light
    "size=tiny|icon=right|state=normal|type=primary|style2=light": __body30,
    // figma: Size=Tiny, Icon=Left, State=Normal, Type=Primary, Style=Light
    "size=tiny|icon=left|state=normal|type=primary|style2=light": __body31,
    // figma: Size=Tiny, Icon=Right, State=Normal, Type=Seconadary, Style=Light
    "size=tiny|icon=right|state=normal|type=seconadary|style2=light": __body32,
    // figma: Size=Tiny, Icon=Left, State=Normal, Type=Seconadary, Style=Light
    "size=tiny|icon=left|state=normal|type=seconadary|style2=light": __body33,
    // figma: Size=Tiny, Icon=Right, State=Hover, Type=Seconadary, Style=Light
    "size=tiny|icon=right|state=hover|type=seconadary|style2=light": __body34,
    // figma: Size=Tiny, Icon=Left, State=Hover, Type=Seconadary, Style=Light
    "size=tiny|icon=left|state=hover|type=seconadary|style2=light": __body35,
    // figma: Size=Tiny, Icon=Right, State=Normal, Type=Confirm Blue, Style=Light
    "size=tiny|icon=right|state=normal|type=confirm blue|style2=light": __body36,
    // figma: Size=Tiny, Icon=Left, State=Normal, Type=Confirm Blue, Style=Light
    "size=tiny|icon=left|state=normal|type=confirm blue|style2=light": __body37,
    // figma: Size=Tiny, Icon=No, State=Normal, Type=Confirm Blue, Style=Light
    "size=tiny|icon=no|state=normal|type=confirm blue|style2=light": __body38,
    // figma: Size=Tiny, Icon=No, State=Normal, Type=Primary, Style=Light
    "size=tiny|icon=no|state=normal|type=primary|style2=light": __body39,
    // figma: Size=Tiny, Icon=No, State=Normal, Type=Seconadary, Style=Light
    "size=tiny|icon=no|state=normal|type=seconadary|style2=light": __body40,
    // figma: Size=Tiny, Icon=No, State=Normal, Type=Just Text, Style=Light
    "size=tiny|icon=no|state=normal|type=just text|style2=light": __body41,
    // figma: Size=Tiny, Icon=Right, State=Normal, Type=Just Text, Style=Light
    "size=tiny|icon=right|state=normal|type=just text|style2=light": __body42,
    // figma: Size=Tiny, Icon=Left, State=Normal, Type=Just Text, Style=Light
    "size=tiny|icon=left|state=normal|type=just text|style2=light": __body43,
    // figma: Size=Tiny, Icon=No, State=Hover, Type=Seconadary, Style=Light
    "size=tiny|icon=no|state=hover|type=seconadary|style2=light": __body44,
    // figma: Size=Big, Icon=Right, State=Normal, Type=Primary, Style=Light
    "size=big|icon=right|state=normal|type=primary|style2=light": __body45,
    // figma: Size=Big, Icon=Left, State=Normal, Type=Primary, Style=Light
    "size=big|icon=left|state=normal|type=primary|style2=light": __body46,
    // figma: Size=Big, Icon=Right, State=Normal, Type=Seconadary, Style=Light
    "size=big|icon=right|state=normal|type=seconadary|style2=light": __body47,
    // figma: Size=Big, Icon=Left, State=Normal, Type=Seconadary, Style=Light
    "size=big|icon=left|state=normal|type=seconadary|style2=light": __body48,
    // figma: Size=Big, Icon=Right, State=Hover, Type=Seconadary, Style=Light
    "size=big|icon=right|state=hover|type=seconadary|style2=light": __body49,
    // figma: Size=Big, Icon=Left, State=Hover, Type=Seconadary, Style=Light
    "size=big|icon=left|state=hover|type=seconadary|style2=light": __body50,
    // figma: Size=Big, Icon=Right, State=Normal, Type=Confirm Blue, Style=Light
    "size=big|icon=right|state=normal|type=confirm blue|style2=light": __body51,
    // figma: Size=Big, Icon=Left, State=Normal, Type=Confirm Blue, Style=Light
    "size=big|icon=left|state=normal|type=confirm blue|style2=light": __body52,
    // figma: Size=Big, Icon=No, State=Normal, Type=Confirm Blue, Style=Light
    "size=big|icon=no|state=normal|type=confirm blue|style2=light": __body53,
    // figma: Size=Big, Icon=No, State=Normal, Type=Primary, Style=Light
    "size=big|icon=no|state=normal|type=primary|style2=light": __body54,
    // figma: Size=Big, Icon=No, State=Normal, Type=Seconadary, Style=Light
    "size=big|icon=no|state=normal|type=seconadary|style2=light": __body55,
    // figma: Size=Big, Icon=No, State=Normal, Type=Just Text, Style=Light
    "size=big|icon=no|state=normal|type=just text|style2=light": __body56,
    // figma: Size=Big, Icon=Right, State=Normal, Type=Just Text, Style=Light
    "size=big|icon=right|state=normal|type=just text|style2=light": __body57,
    // figma: Size=Big, Icon=Left, State=Normal, Type=Just Text, Style=Light
    "size=big|icon=left|state=normal|type=just text|style2=light": __body58,
    // figma: Size=Big, Icon=No, State=Hover, Type=Seconadary, Style=Light
    "size=big|icon=no|state=hover|type=seconadary|style2=light": __body59,
    // figma: Size=Medium, Icon=Right, State=Normal, Type=Primary, Style=Dark
    "size=md|icon=right|state=normal|type=primary|style2=dark": __body0,
    // figma: Size=Small, Icon=Right, State=Normal, Type=Primary, Style=Dark
    "size=sm|icon=right|state=normal|type=primary|style2=dark": __body15,
    // figma: Size=Tiny, Icon=Right, State=Normal, Type=Primary, Style=Dark
    "size=tiny|icon=right|state=normal|type=primary|style2=dark": __body30,
    // figma: Size=Big, Icon=Right, State=Normal, Type=Primary, Style=Dark
    "size=big|icon=right|state=normal|type=primary|style2=dark": __body45,
    // figma: Size=Medium, Icon=Left, State=Normal, Type=Primary, Style=Dark
    "size=md|icon=left|state=normal|type=primary|style2=dark": __body1,
    // figma: Size=Small, Icon=Left, State=Normal, Type=Primary, Style=Dark
    "size=sm|icon=left|state=normal|type=primary|style2=dark": __body16,
    // figma: Size=Tiny, Icon=Left, State=Normal, Type=Primary, Style=Dark
    "size=tiny|icon=left|state=normal|type=primary|style2=dark": __body31,
    // figma: Size=Big, Icon=Left, State=Normal, Type=Primary, Style=Dark
    "size=big|icon=left|state=normal|type=primary|style2=dark": __body46,
    // figma: Size=Medium, Icon=No, State=Normal, Type=Primary, Style=Dark
    "size=md|icon=no|state=normal|type=primary|style2=dark": __body9,
    // figma: Size=Small, Icon=No, State=Normal, Type=Primary, Style=Dark
    "size=sm|icon=no|state=normal|type=primary|style2=dark": __body24,
    // figma: Size=Tiny, Icon=No, State=Normal, Type=Primary, Style=Dark
    "size=tiny|icon=no|state=normal|type=primary|style2=dark": __body39,
    // figma: Size=Big, Icon=No, State=Normal, Type=Primary, Style=Dark
    "size=big|icon=no|state=normal|type=primary|style2=dark": __body54,
    // figma: Size=Medium, Icon=Right, State=Normal, Type=Seconadary, Style=Dark
    "size=md|icon=right|state=normal|type=seconadary|style2=dark": __body60,
    // figma: Size=Medium, Icon=Right, State=Hover, Type=Seconadary, Style=Dark
    "size=md|icon=right|state=hover|type=seconadary|style2=dark": __body61,
    // figma: Size=Small, Icon=Right, State=Normal, Type=Seconadary, Style=Dark
    "size=sm|icon=right|state=normal|type=seconadary|style2=dark": __body62,
    // figma: Size=Small, Icon=Right, State=Hover, Type=Seconadary, Style=Dark
    "size=sm|icon=right|state=hover|type=seconadary|style2=dark": __body63,
    // figma: Size=Tiny, Icon=Right, State=Normal, Type=Seconadary, Style=Dark
    "size=tiny|icon=right|state=normal|type=seconadary|style2=dark": __body64,
    // figma: Size=Tiny, Icon=Right, State=Hover, Type=Seconadary, Style=Dark
    "size=tiny|icon=right|state=hover|type=seconadary|style2=dark": __body65,
    // figma: Size=Big, Icon=Right, State=Normal, Type=Seconadary, Style=Dark
    "size=big|icon=right|state=normal|type=seconadary|style2=dark": __body66,
    // figma: Size=Big, Icon=Right, State=Hover, Type=Seconadary, Style=Dark
    "size=big|icon=right|state=hover|type=seconadary|style2=dark": __body67,
    // figma: Size=Medium, Icon=Left, State=Normal, Type=Seconadary, Style=Dark
    "size=md|icon=left|state=normal|type=seconadary|style2=dark": __body68,
    // figma: Size=Medium, Icon=Left, State=Hover, Type=Seconadary, Style=Dark
    "size=md|icon=left|state=hover|type=seconadary|style2=dark": __body69,
    // figma: Size=Small, Icon=Left, State=Normal, Type=Seconadary, Style=Dark
    "size=sm|icon=left|state=normal|type=seconadary|style2=dark": __body70,
    // figma: Size=Small, Icon=Left, State=Hover, Type=Seconadary, Style=Dark
    "size=sm|icon=left|state=hover|type=seconadary|style2=dark": __body71,
    // figma: Size=Tiny, Icon=Left, State=Normal, Type=Seconadary, Style=Dark
    "size=tiny|icon=left|state=normal|type=seconadary|style2=dark": __body72,
    // figma: Size=Tiny, Icon=Left, State=Hover, Type=Seconadary, Style=Dark
    "size=tiny|icon=left|state=hover|type=seconadary|style2=dark": __body73,
    // figma: Size=Big, Icon=Left, State=Normal, Type=Seconadary, Style=Dark
    "size=big|icon=left|state=normal|type=seconadary|style2=dark": __body74,
    // figma: Size=Big, Icon=Left, State=Hover, Type=Seconadary, Style=Dark
    "size=big|icon=left|state=hover|type=seconadary|style2=dark": __body75,
    // figma: Size=Medium, Icon=No, State=Normal, Type=Seconadary, Style=Dark
    "size=md|icon=no|state=normal|type=seconadary|style2=dark": __body76,
    // figma: Size=Medium, Icon=No, State=Hover, Type=Seconadary, Style=Dark
    "size=md|icon=no|state=hover|type=seconadary|style2=dark": __body77,
    // figma: Size=Small, Icon=No, State=Normal, Type=Seconadary, Style=Dark
    "size=sm|icon=no|state=normal|type=seconadary|style2=dark": __body78,
    // figma: Size=Small, Icon=No, State=Hover, Type=Seconadary, Style=Dark
    "size=sm|icon=no|state=hover|type=seconadary|style2=dark": __body79,
    // figma: Size=Tiny, Icon=No, State=Normal, Type=Seconadary, Style=Dark
    "size=tiny|icon=no|state=normal|type=seconadary|style2=dark": __body80,
    // figma: Size=Tiny, Icon=No, State=Hover, Type=Seconadary, Style=Dark
    "size=tiny|icon=no|state=hover|type=seconadary|style2=dark": __body81,
    // figma: Size=Big, Icon=No, State=Normal, Type=Seconadary, Style=Dark
    "size=big|icon=no|state=normal|type=seconadary|style2=dark": __body82,
    // figma: Size=Big, Icon=No, State=Hover, Type=Seconadary, Style=Dark
    "size=big|icon=no|state=hover|type=seconadary|style2=dark": __body83,
    // figma: Size=Medium, Icon=Right, State=Normal, Type=Confirm Blue, Style=Dark
    "size=md|icon=right|state=normal|type=confirm blue|style2=dark": __body6,
    // figma: Size=Small, Icon=Right, State=Normal, Type=Confirm Blue, Style=Dark
    "size=sm|icon=right|state=normal|type=confirm blue|style2=dark": __body21,
    // figma: Size=Tiny, Icon=Right, State=Normal, Type=Confirm Blue, Style=Dark
    "size=tiny|icon=right|state=normal|type=confirm blue|style2=dark": __body36,
    // figma: Size=Big, Icon=Right, State=Normal, Type=Confirm Blue, Style=Dark
    "size=big|icon=right|state=normal|type=confirm blue|style2=dark": __body51,
    // figma: Size=Medium, Icon=Left, State=Normal, Type=Confirm Blue, Style=Dark
    "size=md|icon=left|state=normal|type=confirm blue|style2=dark": __body7,
    // figma: Size=Small, Icon=Left, State=Normal, Type=Confirm Blue, Style=Dark
    "size=sm|icon=left|state=normal|type=confirm blue|style2=dark": __body22,
    // figma: Size=Tiny, Icon=Left, State=Normal, Type=Confirm Blue, Style=Dark
    "size=tiny|icon=left|state=normal|type=confirm blue|style2=dark": __body37,
    // figma: Size=Big, Icon=Left, State=Normal, Type=Confirm Blue, Style=Dark
    "size=big|icon=left|state=normal|type=confirm blue|style2=dark": __body52,
    // figma: Size=Medium, Icon=No, State=Normal, Type=Confirm Blue, Style=Dark
    "size=md|icon=no|state=normal|type=confirm blue|style2=dark": __body8,
    // figma: Size=Small, Icon=No, State=Normal, Type=Confirm Blue, Style=Dark
    "size=sm|icon=no|state=normal|type=confirm blue|style2=dark": __body23,
    // figma: Size=Tiny, Icon=No, State=Normal, Type=Confirm Blue, Style=Dark
    "size=tiny|icon=no|state=normal|type=confirm blue|style2=dark": __body38,
    // figma: Size=Big, Icon=No, State=Normal, Type=Confirm Blue, Style=Dark
    "size=big|icon=no|state=normal|type=confirm blue|style2=dark": __body53,
    // figma: Size=Medium, Icon=Right, State=Normal, Type=Just Text, Style=Dark
    "size=md|icon=right|state=normal|type=just text|style2=dark": __body84,
    // figma: Size=Small, Icon=Right, State=Normal, Type=Just Text, Style=Dark
    "size=sm|icon=right|state=normal|type=just text|style2=dark": __body85,
    // figma: Size=Tiny, Icon=Right, State=Normal, Type=Just Text, Style=Dark
    "size=tiny|icon=right|state=normal|type=just text|style2=dark": __body86,
    // figma: Size=Big, Icon=Right, State=Normal, Type=Just Text, Style=Dark
    "size=big|icon=right|state=normal|type=just text|style2=dark": __body87,
    // figma: Size=Medium, Icon=Left, State=Normal, Type=Just Text, Style=Dark
    "size=md|icon=left|state=normal|type=just text|style2=dark": __body88,
    // figma: Size=Small, Icon=Left, State=Normal, Type=Just Text, Style=Dark
    "size=sm|icon=left|state=normal|type=just text|style2=dark": __body89,
    // figma: Size=Tiny, Icon=Left, State=Normal, Type=Just Text, Style=Dark
    "size=tiny|icon=left|state=normal|type=just text|style2=dark": __body90,
    // figma: Size=Big, Icon=Left, State=Normal, Type=Just Text, Style=Dark
    "size=big|icon=left|state=normal|type=just text|style2=dark": __body91,
    // figma: Size=Medium, Icon=No, State=Normal, Type=Just Text, Style=Dark
    "size=md|icon=no|state=normal|type=just text|style2=dark": __body92,
    // figma: Size=Small, Icon=No, State=Normal, Type=Just Text, Style=Dark
    "size=sm|icon=no|state=normal|type=just text|style2=dark": __body93,
    // figma: Size=Tiny, Icon=No, State=Normal, Type=Just Text, Style=Dark
    "size=tiny|icon=no|state=normal|type=just text|style2=dark": __body94,
    // figma: Size=Big, Icon=No, State=Normal, Type=Just Text, Style=Dark
    "size=big|icon=no|state=normal|type=just text|style2=dark": __body95,
  };
  return (__impls[__vkey(props)] ?? __body46)();
}
export default FigmaButton;
