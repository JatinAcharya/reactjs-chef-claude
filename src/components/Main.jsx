import React from "react";
import Recipe from "./Recipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../ai";
import Spinner from "./Spinner";

const Main = () => {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipe, setRecipe] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const addIngredient = (formData) => {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  };

  const handleGetRecipe = async (event) => {
    setLoading(true);
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    recipeMarkdown.replace(/```markdown|```/gm, "");
    setLoading(false);
    setRecipe(recipeMarkdown);
    console.log(recipe);
  };

  return (
    <>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <main>
          <form action={addIngredient} className="add-ingredient-form">
            <input
              aria-label="Add ingredient"
              type="text"
              placeholder="e.g. oregano"
              name="ingredient"
              required
            />
            <button>Add Ingredient</button>
          </form>
          <IngredientsList
            ingredients={ingredients}
            handleGetRecipe={handleGetRecipe}
          />
          {recipe && <Recipe recipe={recipe} />}
        </main>
      )}
    </>
  );
};

export default Main;
