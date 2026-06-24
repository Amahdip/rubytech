// figma node: 1539:653 arrowDown_icon
export function ArrowDownIcon(_p = {}) {
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
      <svg width={12} height={7.410} viewBox="0 0 12 7.410" fill="none" style={{
        position: "absolute",
        left: 6,
        top: 8.59,
        width: 12,
        height: 7.41,
        color: "rgb(111,114,133)",
      }}>
        <path d={"M 10.59 0 L 6 4.58 L 1.41 0 L 0 1.41 L 6 7.41 L 12 1.41 L 10.59 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default ArrowDownIcon;
