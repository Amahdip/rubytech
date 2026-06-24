// figma node: 1419:843 Checkboxes (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "active=" + __venc(p.active) + '|' + "style2=" + __venc(p.style2);

export function Checkboxes(_p = {}) {
  const props = { ..._p, active: _p.active ?? "selected", style2: _p.style2 ?? "dark" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 3,
        top: 3,
        width: 18,
        height: 18,
        border: "1px dashed currentColor",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontSize: 10,
        opacity: 0.45,
      }}>📍Icon</div>
      <div style={{
        position: "absolute",
        left: 3,
        top: 3,
        width: 18,
        height: 18,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 18,
          height: 18,
          clipPath: "inset(0px 0px 0px 0px)",
        }}>
          <div style={{
            position: "absolute",
            left: -3,
            top: -3,
            width: 24,
            height: 24,
            backgroundColor: "rgb(5,163,232)",
          }} />
        </div>
      </div>
      <svg width={40} height={40} viewBox="0 0 40 40" fill="none" style={{
        position: "absolute",
        left: -8,
        top: -8,
        width: 40,
        height: 40,
      }}>
        <path d={"M 20 40 C 31.046 40 40 31.046 40 20 C 40 8.954 31.046 0 20 0 C 8.954 0 0 8.954 0 20 C 0 31.046 8.954 40 20 40 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 3,
        top: 3,
        width: 18,
        height: 18,
        border: "1px dashed currentColor",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontSize: 10,
        opacity: 0.45,
      }}>📍Icon</div>
      <div style={{
        position: "absolute",
        left: 3,
        top: 3,
        width: 18,
        height: 18,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 18,
          height: 18,
          clipPath: "inset(0px 0px 0px 0px)",
        }}>
          <div style={{
            position: "absolute",
            left: -3,
            top: -3,
            width: 24,
            height: 24,
            backgroundColor: "rgb(111,114,133)",
          }} />
        </div>
      </div>
      <svg width={40} height={40} viewBox="0 0 40 40" fill="none" style={{
        position: "absolute",
        left: -8,
        top: -8,
        width: 40,
        height: 40,
      }}>
        <path d={"M 20 40 C 31.046 40 40 31.046 40 20 C 40 8.954 31.046 0 20 0 C 8.954 0 0 8.954 0 20 C 0 31.046 8.954 40 20 40 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 3,
        top: 3,
        width: 18,
        height: 18,
        border: "1px dashed currentColor",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontSize: 10,
        opacity: 0.45,
      }}>📍Icon</div>
      <div style={{
        position: "absolute",
        left: 3,
        top: 3,
        width: 18,
        height: 18,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 18,
          height: 18,
          clipPath: "inset(0px 0px 0px 0px)",
        }}>
          <div style={{
            position: "absolute",
            left: -3,
            top: -3,
            width: 24,
            height: 24,
            backgroundColor: "rgb(211,214,224)",
          }} />
        </div>
      </div>
      <svg width={40} height={40} viewBox="0 0 40 40" fill="none" style={{
        position: "absolute",
        left: -8,
        top: -8,
        width: 40,
        height: 40,
      }}>
        <path d={"M 20 40 C 31.046 40 40 31.046 40 20 C 40 8.954 31.046 0 20 0 C 8.954 0 0 8.954 0 20 C 0 31.046 8.954 40 20 40 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __impls = {
    // figma: Active=Neutral, Style=Light
    "active=neutral|style2=light": __body0,
    // figma: Active=Active6, Style=Dark
    "active=active6|style2=dark": __body0,
    // figma: Active=Deselected, Style=Light
    "active=deselected|style2=light": __body1,
    // figma: Active=Active5, Style=Dark
    "active=active5|style2=dark": __body2,
    // figma: Active=Selected, Style=Light
    "active=selected|style2=light": __body0,
    // figma: Active=Active4, Style=Dark
    "active=active4|style2=dark": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Checkboxes;
