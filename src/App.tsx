import CreateRecipe from "./components/create-recipe/CreateRecipe";
import Header from "./components/header/Header";
import RecipeItem from "./components/recipe-item/RecipeItem";
import User from "./components/user/User";
import { useGetRecipesQuery } from "./store/api/api";

function App() {
  const { isLoading, data } = useGetRecipesQuery(null);

  return (
    <section>
      <Header />
      <CreateRecipe />
      <User />
      {isLoading && <h2>Идет загрузка...</h2>}
      <ul>
        {data ? (
          data.map((item) => (
            <li key={item.id}>
              <RecipeItem recipe={item} />
            </li>
          ))
        ) : (
          <h2>Не найдено</h2>
        )}
      </ul>
    </section>
  );
}

export default App;
