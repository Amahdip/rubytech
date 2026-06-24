// figma node: 1539:621 help_icon
export function HelpIcon(_p = {}) {
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
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 20,
        height: 20,
        color: "rgb(111,114,133)",
      }}>
        <path d={"M 9 16 L 11 16 L 11 14 L 9 14 L 9 16 Z M 10 0 C 4.48 0 0 4.48 0 10 C 0 15.52 4.48 20 10 20 C 15.52 20 20 15.52 20 10 C 20 4.48 15.52 0 10 0 Z M 10 18 C 5.59 18 2 14.41 2 10 C 2 5.59 5.59 2 10 2 C 14.41 2 18 5.59 18 10 C 18 14.41 14.41 18 10 18 Z M 10 4 C 7.79 4 6 5.79 6 8 L 8 8 C 8 6.9 8.9 6 10 6 C 11.1 6 12 6.9 12 8 C 12 10 9 9.75 9 13 L 11 13 C 11 10.75 14 10.5 14 8 C 14 5.79 12.21 4 10 4 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default HelpIcon;
