import { ArrowDownIcon } from './ArrowDownIcon.jsx';
import { InputAssets } from './InputAssets.jsx';
import { LikeIcon } from './LikeIcon.jsx';

// figma node: 1541:678 Input Field Variants (30 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "inputTitle=" + __venc(p.inputTitle) + '|' + "direction=" + __venc(p.direction) + '|' + "trailingIcon=" + __venc(p.trailingIcon) + '|' + "leadingIcon=" + __venc(p.leadingIcon) + '|' + "style2=" + __venc(p.style2);

export function InputFieldVariants(_p = {}) {
  const props = { ..._p, inputTitle: _p.inputTitle ?? false, direction: _p.direction ?? "rtl", trailingIcon: _p.trailingIcon ?? false, leadingIcon: _p.leadingIcon ?? false, style2: _p.style2 ?? "light" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 535,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "8px 16px 12px 16px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <InputAssets
        style={{ position: "relative", flexShrink: 0 }}
        size={"sm"}
        requiredField={false}
        tooltip={true}
        style2={"light"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "aparat.com"}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 535,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "8px 16px 12px 16px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <InputAssets
        style={{ position: "relative", flexShrink: 0 }}
        size={"sm"}
        requiredField={false}
        tooltip={true}
        style2={"dark"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          lineHeight: "100%",
          color: "rgb(157,161,177)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "aparat.com"}</span>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 535,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "8px 16px 12px 16px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <InputAssets
        style={{ position: "relative", flexShrink: 0 }}
        size={"sm"}
        requiredField={false}
        tooltip={true}
        style2={"light"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "aparat.com"}</span>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <ArrowDownIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 535,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "8px 16px 12px 16px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <InputAssets
        style={{ position: "relative", flexShrink: 0 }}
        size={"sm"}
        requiredField={false}
        tooltip={true}
        style2={"dark"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          lineHeight: "100%",
          color: "rgb(157,161,177)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "aparat.com"}</span>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <ArrowDownIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 535,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "8px 16px 12px 16px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <InputAssets
        style={{ position: "relative", flexShrink: 0 }}
        size={"sm"}
        requiredField={false}
        tooltip={true}
        style2={"light"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <LikeIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "aparat.com"}</span>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 535,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "8px 16px 12px 16px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <InputAssets
        style={{ position: "relative", flexShrink: 0 }}
        size={"sm"}
        requiredField={false}
        tooltip={true}
        style2={"dark"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <LikeIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          lineHeight: "100%",
          color: "rgb(157,161,177)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "aparat.com"}</span>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 535,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "8px 16px 12px 16px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <InputAssets
        style={{ position: "relative", flexShrink: 0 }}
        size={"sm"}
        requiredField={false}
        tooltip={true}
        style2={"light"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          textAlign: "right",
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "انتخاب ویدیو از کانال"}</span>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 535,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "8px 16px 12px 16px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <InputAssets
        style={{ position: "relative", flexShrink: 0 }}
        size={"sm"}
        requiredField={false}
        tooltip={true}
        style2={"dark"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          textAlign: "right",
          lineHeight: "100%",
          color: "rgb(157,161,177)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "انتخاب ویدیو از کانال"}</span>
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 535,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "8px 16px 12px 16px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <InputAssets
        style={{ position: "relative", flexShrink: 0 }}
        size={"sm"}
        requiredField={false}
        tooltip={true}
        style2={"light"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          textAlign: "right",
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "انتخاب ویدیو از کانال"}</span>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <LikeIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 535,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "8px 16px 12px 16px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <InputAssets
        style={{ position: "relative", flexShrink: 0 }}
        size={"sm"}
        requiredField={false}
        tooltip={true}
        style2={"dark"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          textAlign: "right",
          lineHeight: "100%",
          color: "rgb(157,161,177)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "انتخاب ویدیو از کانال"}</span>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <LikeIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 535,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "8px 16px 12px 16px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <InputAssets
        style={{ position: "relative", flexShrink: 0 }}
        size={"sm"}
        requiredField={false}
        tooltip={true}
        style2={"light"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <ArrowDownIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          textAlign: "right",
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "انتخاب ویدیو از کانال"}</span>
      </div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 535,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "8px 16px 12px 16px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <InputAssets
        style={{ position: "relative", flexShrink: 0 }}
        size={"sm"}
        requiredField={false}
        tooltip={true}
        style2={"dark"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <ArrowDownIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          textAlign: "right",
          lineHeight: "100%",
          color: "rgb(157,161,177)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "انتخاب ویدیو از کانال"}</span>
      </div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 535,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "8px 16px 12px 16px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <InputAssets
        style={{ position: "relative", flexShrink: 0 }}
        size={"sm"}
        requiredField={false}
        tooltip={true}
        style2={"light"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <ArrowDownIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          textAlign: "right",
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "انتخاب ویدیو از کانال"}</span>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon2 ?? <LikeIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 535,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "8px 16px 12px 16px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <InputAssets
        style={{ position: "relative", flexShrink: 0 }}
        size={"sm"}
        requiredField={false}
        tooltip={true}
        style2={"dark"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <ArrowDownIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          textAlign: "right",
          lineHeight: "100%",
          color: "rgb(157,161,177)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "انتخاب ویدیو از کانال"}</span>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon2 ?? <LikeIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: 535,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 16px 12px 16px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          textAlign: "right",
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "انتخاب ویدیو از کانال"}</span>
      </div>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: 535,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 16px 12px 16px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          textAlign: "right",
          lineHeight: "100%",
          color: "rgb(157,161,177)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "انتخاب ویدیو از کانال"}</span>
      </div>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: 535,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 16px 12px 16px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          textAlign: "right",
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "انتخاب ویدیو از کانال"}</span>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <LikeIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: 535,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 16px 12px 16px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          textAlign: "right",
          lineHeight: "100%",
          color: "rgb(157,161,177)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "انتخاب ویدیو از کانال"}</span>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <LikeIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: 535,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 16px 12px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "aparat.com"}</span>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <ArrowDownIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: 535,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 16px 12px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          lineHeight: "100%",
          color: "rgb(157,161,177)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "aparat.com"}</span>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <ArrowDownIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: 535,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 16px 12px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <LikeIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "aparat.com"}</span>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon2 ?? <ArrowDownIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: 535,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 16px 12px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <LikeIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          lineHeight: "100%",
          color: "rgb(157,161,177)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "aparat.com"}</span>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon2 ?? <ArrowDownIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: 535,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 16px 12px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "aparat.com"}</span>
      </div>
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: 535,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 16px 12px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          lineHeight: "100%",
          color: "rgb(157,161,177)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "aparat.com"}</span>
      </div>
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: 535,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 16px 12px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <LikeIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "aparat.com"}</span>
      </div>
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: 535,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 16px 12px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <LikeIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          lineHeight: "100%",
          color: "rgb(157,161,177)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "aparat.com"}</span>
      </div>
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: 535,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 16px 12px 16px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <ArrowDownIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          textAlign: "right",
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "انتخاب ویدیو از کانال"}</span>
      </div>
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: 535,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 16px 12px 16px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <ArrowDownIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          textAlign: "right",
          lineHeight: "100%",
          color: "rgb(157,161,177)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "انتخاب ویدیو از کانال"}</span>
      </div>
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: 535,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 16px 12px 16px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <ArrowDownIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          textAlign: "right",
          lineHeight: "100%",
          color: "rgb(111,114,133)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "انتخاب ویدیو از کانال"}</span>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon2 ?? <LikeIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: 535,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 16px 12px 16px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <ArrowDownIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          textAlign: "right",
          lineHeight: "100%",
          color: "rgb(157,161,177)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "انتخاب ویدیو از کانال"}</span>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon2 ?? <LikeIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Input Title=Yes, Direction=LTR, Trailing Icon=No, Leading icon=No, Style=Light
    "inputTitle=true|direction=ltr|trailingIcon=false|leadingIcon=false|style2=light": __body0,
    // figma: Input Title=Yes, Direction=LTR, Trailing Icon=No, Leading icon=No, Style=Dark
    "inputTitle=true|direction=ltr|trailingIcon=false|leadingIcon=false|style2=dark": __body1,
    // figma: Input Title=Yes, Direction=LTR, Trailing Icon=Yes, Leading icon=No, Style=Light
    "inputTitle=true|direction=ltr|trailingIcon=true|leadingIcon=false|style2=light": __body2,
    // figma: Input Title=Yes, Direction=LTR, Trailing Icon=Yes, Leading icon=No, Style=Dark
    "inputTitle=true|direction=ltr|trailingIcon=true|leadingIcon=false|style2=dark": __body3,
    // figma: Input Title=Yes, Direction=LTR, Trailing Icon=No, Leading icon=Yes, Style=Light
    "inputTitle=true|direction=ltr|trailingIcon=false|leadingIcon=true|style2=light": __body4,
    // figma: Input Title=Yes, Direction=LTR, Trailing Icon=No, Leading icon=Yes, Style=Dark
    "inputTitle=true|direction=ltr|trailingIcon=false|leadingIcon=true|style2=dark": __body5,
    // figma: Input Title=Yes, Direction=RTL, Trailing Icon=No, Leading icon=No, Style=Light
    "inputTitle=true|direction=rtl|trailingIcon=false|leadingIcon=false|style2=light": __body6,
    // figma: Input Title=Yes, Direction=RTL, Trailing Icon=No, Leading icon=No, Style=Dark
    "inputTitle=true|direction=rtl|trailingIcon=false|leadingIcon=false|style2=dark": __body7,
    // figma: Input Title=Yes, Direction=RTL, Trailing Icon=No, Leading icon=Yes, Style=Light
    "inputTitle=true|direction=rtl|trailingIcon=false|leadingIcon=true|style2=light": __body8,
    // figma: Input Title=Yes, Direction=RTL, Trailing Icon=No, Leading icon=Yes, Style=Dark
    "inputTitle=true|direction=rtl|trailingIcon=false|leadingIcon=true|style2=dark": __body9,
    // figma: Input Title=Yes, Direction=RTL, Trailing Icon=Yes, Leading icon=No, Style=Light
    "inputTitle=true|direction=rtl|trailingIcon=true|leadingIcon=false|style2=light": __body10,
    // figma: Input Title=Yes, Direction=RTL, Trailing Icon=Yes, Leading icon=No, Style=Dark
    "inputTitle=true|direction=rtl|trailingIcon=true|leadingIcon=false|style2=dark": __body11,
    // figma: Input Title=Yes, Direction=RTL, Trailing Icon=Yes, Leading icon=Yes, Style=Light
    "inputTitle=true|direction=rtl|trailingIcon=true|leadingIcon=true|style2=light": __body12,
    // figma: Input Title=Yes, Direction=RTL, Trailing Icon=Yes, Leading icon=Yes, Style=Dark
    "inputTitle=true|direction=rtl|trailingIcon=true|leadingIcon=true|style2=dark": __body13,
    // figma: Input Title=No, Direction=RTL, Trailing Icon=No, Leading icon=No, Style=Light
    "inputTitle=false|direction=rtl|trailingIcon=false|leadingIcon=false|style2=light": __body14,
    // figma: Input Title=No, Direction=RTL, Trailing Icon=No, Leading icon=No, Style=Dark
    "inputTitle=false|direction=rtl|trailingIcon=false|leadingIcon=false|style2=dark": __body15,
    // figma: Input Title=No, Direction=RTL, Trailing Icon=No, Leading icon=Yes, Style=Light
    "inputTitle=false|direction=rtl|trailingIcon=false|leadingIcon=true|style2=light": __body16,
    // figma: Input Title=No, Direction=RTL, Trailing Icon=No, Leading icon=Yes, Style=Dark
    "inputTitle=false|direction=rtl|trailingIcon=false|leadingIcon=true|style2=dark": __body17,
    // figma: Input Title=No, Direction=LTR, Trailing Icon=Yes, Leading icon=No, Style=Light
    "inputTitle=false|direction=ltr|trailingIcon=true|leadingIcon=false|style2=light": __body18,
    // figma: Input Title=No, Direction=LTR, Trailing Icon=Yes, Leading icon=No, Style=Dark
    "inputTitle=false|direction=ltr|trailingIcon=true|leadingIcon=false|style2=dark": __body19,
    // figma: Input Title=No, Direction=LTR, Trailing Icon=Yes, Leading icon=Yes, Style=Light
    "inputTitle=false|direction=ltr|trailingIcon=true|leadingIcon=true|style2=light": __body20,
    // figma: Input Title=No, Direction=LTR, Trailing Icon=Yes, Leading icon=Yes, Style=Dark
    "inputTitle=false|direction=ltr|trailingIcon=true|leadingIcon=true|style2=dark": __body21,
    // figma: Input Title=No, Direction=LTR, Trailing Icon=No, Leading icon=No, Style=Light
    "inputTitle=false|direction=ltr|trailingIcon=false|leadingIcon=false|style2=light": __body22,
    // figma: Input Title=No, Direction=LTR, Trailing Icon=No, Leading icon=No, Style=Dark
    "inputTitle=false|direction=ltr|trailingIcon=false|leadingIcon=false|style2=dark": __body23,
    // figma: Input Title=No, Direction=LTR, Trailing Icon=No, Leading icon=Yes, Style=Light
    "inputTitle=false|direction=ltr|trailingIcon=false|leadingIcon=true|style2=light": __body24,
    // figma: Input Title=No, Direction=LTR, Trailing Icon=No, Leading icon=Yes, Style=Dark
    "inputTitle=false|direction=ltr|trailingIcon=false|leadingIcon=true|style2=dark": __body25,
    // figma: Input Title=No, Direction=RTL, Trailing Icon=Yes, Leading icon=No, Style=Light
    "inputTitle=false|direction=rtl|trailingIcon=true|leadingIcon=false|style2=light": __body26,
    // figma: Input Title=No, Direction=RTL, Trailing Icon=Yes, Leading icon=No, Style=Dark
    "inputTitle=false|direction=rtl|trailingIcon=true|leadingIcon=false|style2=dark": __body27,
    // figma: Input Title=No, Direction=RTL, Trailing Icon=Yes, Leading icon=Yes, Style=Light
    "inputTitle=false|direction=rtl|trailingIcon=true|leadingIcon=true|style2=light": __body28,
    // figma: Input Title=No, Direction=RTL, Trailing Icon=Yes, Leading icon=Yes, Style=Dark
    "inputTitle=false|direction=rtl|trailingIcon=true|leadingIcon=true|style2=dark": __body29,
  };
  return (__impls[__vkey(props)] ?? __body14)();
}
export default InputFieldVariants;
