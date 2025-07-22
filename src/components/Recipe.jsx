import React from "react";
import Markdown from "react-markdown";

const Recipe = (props) => {
  const generatedRecipe = props.recipe.replace(/```markdown|```/gm, "");
  console.log(generatedRecipe);
  return (
    <>
      <section className="suggested-recipe-container" aria-live="polite">
        <h2>Chef Claude Recommends:</h2>
        <Markdown>{generatedRecipe}</Markdown>
      </section>
    </>
  );
};

export default Recipe;
