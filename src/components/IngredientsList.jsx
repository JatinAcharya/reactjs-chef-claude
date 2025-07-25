import React from "react";

const IngredientsList = (props) => {
  const ingredientsListItems = props.ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });

  return (
    <>
      {props.ingredients.length > 0 && (
        <section className="ingredients-section">
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list" aria-live="polite">
            {ingredientsListItems}
          </ul>
          {props.ingredients.length > 3 && (
            <div className="get-recipe-container">
              <div>
                <h2>Ready for a recipe?</h2>
                <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button onClick={props.handleGetRecipe}>Get a recipe</button>
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default IngredientsList;
