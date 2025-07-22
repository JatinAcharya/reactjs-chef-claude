import React from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

const Main = () => {
  // const ingredients = ["Chicken", "Oregano", "Tomatoes"];
  const [ingredients, setIngredients] = React.useState([]);
  const [recipeShown, setRecipeShown] = React.useState(false);

  const addIngredient = (formData) => {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  };

  const handleGetRecipe = (event) => {
    setRecipeShown(true);
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
          />
          <button>Add Ingredient</button>
        </form>
        <IngredientsList
          ingredients={ingredients}
          handleGetRecipe={handleGetRecipe}
        />
        {recipeShown && <ClaudeRecipe />}
      </main>
    </>
  );
};

export default Main;
