import React from "react";
import Recipe from "./Recipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../ai";

const Main = () => {
  // const ingredients = ["Chicken", "Oregano", "Tomatoes"];
  const [ingredients, setIngredients] = React.useState([]);
  // const [recipeShown, setRecipeShown] = React.useState(false);
  const [recipe, setRecipe] = React.useState("");

  const addIngredient = (formData) => {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  };

  const handleGetRecipe = async (event) => {
    // setRecipeShown(true);
    console.log(ingredients);
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    // const recipeMarkdown = ;
    // recipeMarkdown.replace("/^```.+\n|\n```$)/g", "");
    recipeMarkdown.replace(/```markdown|```/gm, "");
    setRecipe(recipeMarkdown);
    console.log(recipe);
  };

  return (
    <>
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
    </>
  );
};

export default Main;
