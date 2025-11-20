import { BsBookmarkHeartFill } from "react-icons/bs";
import styles from "./header.module.css";
import { useFavorites } from "../../hooks/useFavorites";

export default function Header() {
  const { favorites } = useFavorites();

  return (
    <header className={styles.header}>
      <span>{favorites.length}</span>
      <BsBookmarkHeartFill />
    </header>
  );
}
