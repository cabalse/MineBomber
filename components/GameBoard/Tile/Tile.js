import styles from "./Tile.module.scss";

export default function Tile() {
  console.log("Tile", styles);
  return <div className={`${styles.tile} ${styles.filled}`}></div>;
}
