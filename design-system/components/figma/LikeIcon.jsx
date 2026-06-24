// figma node: 1539:656 like_icon
export function LikeIcon(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(111,114,133)",
      ...props.style,
    }}>
      <svg width={20} height={18.350} viewBox="0 0 20 18.350" fill="none" style={{
        position: "absolute",
        left: 2,
        top: 3,
        width: 20,
        height: 18.35,
      }}>
        <path d={"M 14.5 0 C 12.76 0 11.09 0.81 10 2.09 C 8.91 0.81 7.24 0 5.5 0 C 2.42 0 0 2.42 0 5.5 C 0 9.28 3.4 12.36 8.55 17.04 L 10 18.35 L 11.45 17.03 C 16.6 12.36 20 9.28 20 5.5 C 20 2.42 17.58 0 14.5 0 Z M 10.1 15.55 L 10 15.65 L 9.9 15.55 C 5.14 11.24 2 8.39 2 5.5 C 2 3.5 3.5 2 5.5 2 C 7.04 2 8.54 2.99 9.07 4.36 L 10.94 4.36 C 11.46 2.99 12.96 2 14.5 2 C 16.5 2 18 3.5 18 5.5 C 18 8.39 14.86 11.24 10.1 15.55 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default LikeIcon;
