import styles from "./RecipeItem.module.css";
import { useActions } from "../../hooks/useActions";
import { useFavorites } from "../../hooks/useFavorites";

function RecipeItem({ recipe }) {
  const { favorites } = useFavorites();

  const {toggleFavorites} = useActions();

  const isExists = favorites.some((r) => r.id === recipe.id);

  return (
    <div className={styles.item}>
      <h3>{recipe.name}</h3>
      <button onClick={()=>toggleFavorites(recipe)}>
        {isExists ? "removed to favorites" : "Add to favorites"}
      </button>
    </div>
  );
}

export default RecipeItem;
