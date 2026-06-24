import { ArrowDownIcon } from './ArrowDownIcon.jsx';
import { HelpIcon } from './HelpIcon.jsx';
import { InputHelper } from './InputHelper.jsx';

// figma node: 1541:833 Normal Input (8 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "titleDesc=" + __venc(p.titleDesc) + '|' + "helper=" + __venc(p.helper) + '|' + "style2=" + __venc(p.style2);

export function NormalInput(_p = {}) {
  const props = { ..._p, titleDesc: _p.titleDesc ?? false, helper: _p.helper ?? false, style2: _p.style2 ?? "light" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 535,
      height: 72,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "8px 16px 12px 16px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 18,
              height: 18,
              flexShrink: 0,
            }}>
            <HelpIcon style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />
          </div>
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
          }}>(اﺟﺒﺎری)</span>
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
          }}>ﻟﯿﻨﮏ وﯾﺪﯾﻮ ﺷﻤﺎ</span>
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
          }}>*</span>
        </div>
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
            }}>
            <ArrowDownIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
          </div>
          <span style={{
            position: "relative",
            fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            textAlign: "right",
            lineHeight: "100%",
            color: "rgb(111,114,133)",
            flexGrow: 1,
          }}>انتخاب ویدیو از کانال</span>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 535,
      height: 72,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "8px 16px 12px 16px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 18,
              height: 18,
              flexShrink: 0,
            }}>
            <HelpIcon style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />
          </div>
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
          }}>(اﺟﺒﺎری)</span>
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
          }}>ﻟﯿﻨﮏ وﯾﺪﯾﻮ ﺷﻤﺎ</span>
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
          }}>*</span>
        </div>
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
            }}>
            <ArrowDownIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
          </div>
          <span style={{
            position: "relative",
            fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            textAlign: "right",
            lineHeight: "100%",
            color: "rgb(157,161,177)",
            flexGrow: 1,
          }}>انتخاب ویدیو از کانال</span>
        </div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 535,
      height: 135,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "0px 0px 4px 0px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
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
          }}>ﻟﯿﻨﮏ وﯾﺪﯾﻮ ﺷﻤﺎ</span>
        </div>
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
        }}>لورم ایپسوم متنی است آزمایشی برای ساخت نمونه اولیه محصول در صنعت چاپ.</span>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 4,
        boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "8px 16px 12px 16px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 18,
              height: 18,
              flexShrink: 0,
            }}>
            <HelpIcon style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />
          </div>
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
          }}>(اﺟﺒﺎری)</span>
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
          }}>ﻟﯿﻨﮏ وﯾﺪﯾﻮ ﺷﻤﺎ</span>
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
          }}>*</span>
        </div>
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
            }}>
            <ArrowDownIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
          </div>
          <span style={{
            position: "relative",
            fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            textAlign: "right",
            lineHeight: "100%",
            color: "rgb(111,114,133)",
            flexGrow: 1,
          }}>انتخاب ویدیو از کانال</span>
        </div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 535,
      height: 135,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "0px 0px 4px 0px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
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
          }}>ﻟﯿﻨﮏ وﯾﺪﯾﻮ ﺷﻤﺎ</span>
        </div>
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
        }}>لورم ایپسوم متنی است آزمایشی برای ساخت نمونه اولیه محصول در صنعت چاپ.</span>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 4,
        boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "8px 16px 12px 16px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 18,
              height: 18,
              flexShrink: 0,
            }}>
            <HelpIcon style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />
          </div>
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
          }}>(اﺟﺒﺎری)</span>
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
          }}>ﻟﯿﻨﮏ وﯾﺪﯾﻮ ﺷﻤﺎ</span>
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
          }}>*</span>
        </div>
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
            }}>
            <ArrowDownIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
          </div>
          <span style={{
            position: "relative",
            fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            textAlign: "right",
            lineHeight: "100%",
            color: "rgb(157,161,177)",
            flexGrow: 1,
          }}>انتخاب ویدیو از کانال</span>
        </div>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 535,
      height: 97,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "8px 16px 12px 16px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 18,
              height: 18,
              flexShrink: 0,
            }}>
            <HelpIcon style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />
          </div>
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
          }}>(اﺟﺒﺎری)</span>
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
          }}>ﻟﯿﻨﮏ وﯾﺪﯾﻮ ﺷﻤﺎ</span>
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
          }}>*</span>
        </div>
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
            }}>
            <ArrowDownIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
          </div>
          <span style={{
            position: "relative",
            fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            textAlign: "right",
            lineHeight: "100%",
            color: "rgb(111,114,133)",
            flexGrow: 1,
          }}>انتخاب ویدیو از کانال</span>
        </div>
      </div>
      <InputHelper
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"لورم ایپسوم متنی است آزمایشی برای ساخت نمونه اولیه"}
        characterCounter={false}
        helperText={true}
        style2={"light"}
      />
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 535,
      height: 97,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "8px 16px 12px 16px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 18,
              height: 18,
              flexShrink: 0,
            }}>
            <HelpIcon style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />
          </div>
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
          }}>(اﺟﺒﺎری)</span>
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
          }}>ﻟﯿﻨﮏ وﯾﺪﯾﻮ ﺷﻤﺎ</span>
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
          }}>*</span>
        </div>
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
            }}>
            <ArrowDownIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
          </div>
          <span style={{
            position: "relative",
            fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            textAlign: "right",
            lineHeight: "100%",
            color: "rgb(157,161,177)",
            flexGrow: 1,
          }}>انتخاب ویدیو از کانال</span>
        </div>
      </div>
      <InputHelper
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"لورم ایپسوم متنی است آزمایشی برای ساخت نمونه اولیه"}
        characterCounter={false}
        helperText={true}
        style2={"dark"}
      />
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 535,
      height: 160,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "0px 0px 4px 0px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
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
          }}>ﻟﯿﻨﮏ وﯾﺪﯾﻮ ﺷﻤﺎ</span>
        </div>
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
        }}>لورم ایپسوم متنی است آزمایشی برای ساخت نمونه اولیه محصول در صنعت چاپ.</span>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 4,
        boxShadow: "inset 0 0 0 1px rgb(211,214,224)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "8px 16px 12px 16px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 18,
              height: 18,
              flexShrink: 0,
            }}>
            <HelpIcon style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />
          </div>
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
          }}>(اﺟﺒﺎری)</span>
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
          }}>ﻟﯿﻨﮏ وﯾﺪﯾﻮ ﺷﻤﺎ</span>
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
          }}>*</span>
        </div>
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
            }}>
            <ArrowDownIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
          </div>
          <span style={{
            position: "relative",
            fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            textAlign: "right",
            lineHeight: "100%",
            color: "rgb(111,114,133)",
            flexGrow: 1,
          }}>انتخاب ویدیو از کانال</span>
        </div>
      </div>
      <InputHelper
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"لورم ایپسوم متنی است آزمایشی برای ساخت نمونه اولیه"}
        characterCounter={false}
        helperText={true}
        style2={"light"}
      />
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 535,
      height: 160,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "0px 0px 4px 0px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
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
          }}>ﻟﯿﻨﮏ وﯾﺪﯾﻮ ﺷﻤﺎ</span>
        </div>
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
        }}>لورم ایپسوم متنی است آزمایشی برای ساخت نمونه اولیه محصول در صنعت چاپ.</span>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 4,
        boxShadow: "inset 0 0 0 1px rgb(72,75,98)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "8px 16px 12px 16px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 18,
              height: 18,
              flexShrink: 0,
            }}>
            <HelpIcon style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />
          </div>
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
          }}>(اﺟﺒﺎری)</span>
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
          }}>ﻟﯿﻨﮏ وﯾﺪﯾﻮ ﺷﻤﺎ</span>
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
          }}>*</span>
        </div>
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
            }}>
            <ArrowDownIcon style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />
          </div>
          <span style={{
            position: "relative",
            fontFamily: "IRANSansFaNum, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            textAlign: "right",
            lineHeight: "100%",
            color: "rgb(157,161,177)",
            flexGrow: 1,
          }}>انتخاب ویدیو از کانال</span>
        </div>
      </div>
      <InputHelper
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"لورم ایپسوم متنی است آزمایشی برای ساخت نمونه اولیه"}
        characterCounter={false}
        helperText={true}
        style2={"dark"}
      />
    </div>
  );
  const __impls = {
    // figma: Title & Desc.=No, Helper=No, Style=Light
    "titleDesc=false|helper=false|style2=light": __body0,
    // figma: Title & Desc.=No, Helper=No, Style=Dark
    "titleDesc=false|helper=false|style2=dark": __body1,
    // figma: Title & Desc.=Yes, Helper=No, Style=Light
    "titleDesc=true|helper=false|style2=light": __body2,
    // figma: Title & Desc.=Yes, Helper=No, Style=Dark
    "titleDesc=true|helper=false|style2=dark": __body3,
    // figma: Title & Desc.=No, Helper=Yes, Style=Light
    "titleDesc=false|helper=true|style2=light": __body4,
    // figma: Title & Desc.=No, Helper=Yes, Style=Dark
    "titleDesc=false|helper=true|style2=dark": __body5,
    // figma: Title & Desc.=Yes, Helper=Yes, Style=Light
    "titleDesc=true|helper=true|style2=light": __body6,
    // figma: Title & Desc.=Yes, Helper=Yes, Style=Dark
    "titleDesc=true|helper=true|style2=dark": __body7,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default NormalInput;
