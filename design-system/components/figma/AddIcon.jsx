// figma node: 1539:1017 add_icon
export function AddIcon(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 24,
        height: 24,
      }}>
        <path d={"M 0 0 L 24 0 L 24 24 L 0 24 L 0 0 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
      <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
        position: "absolute",
        left: 5,
        top: 5,
        width: 14,
        height: 14,
        color: "rgb(111,114,133)",
      }}>
        <path d={"M 14 8 L 8 8 L 8 14 L 6 14 L 6 8 L 0 8 L 0 6 L 6 6 L 6 0 L 8 0 L 8 6 L 14 6 L 14 8 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default AddIcon;
