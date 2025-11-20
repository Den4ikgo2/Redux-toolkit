import { ChangeEvent, useState } from "react";
import CreateRecipe from "./components/create-recipe/CreateRecipe";
import Header from "./components/header/Header";
import RecipeItem from "./components/recipe-item/RecipeItem";
import User from "./components/user/User";
import { useGetRecipesQuery } from "./store/api/api";

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [queryTerm, setQueryTerm] = useState('')

  const { isLoading, data } = useGetRecipesQuery(queryTerm);

  const handleSearch = () => {
    setQueryTerm(searchTerm)
  };

  return (
    <section>
      <Header />
      <CreateRecipe />
      <p>If you wanna find: </p>
      <div>
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter search term"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
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
