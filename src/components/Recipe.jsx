import React from "react";
import Markdown from "react-markdown";

const Recipe = (props) => {
  const generatedRecipe = props.recipe.replace(/```markdown|```/gm, "");
  console.log(generatedRecipe);
  return (
    <>
      <section className="suggested-recipe-container">
        <Markdown>{generatedRecipe}</Markdown>
      </section>
    </>
  );
};

export default Recipe;
