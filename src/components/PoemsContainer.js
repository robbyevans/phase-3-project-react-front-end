import React from "react";
import Poem from "./Poem";

function PoemsContainer({poemList,onDelete}) {

  return (
    <div className="poems-container">
      { poemList.map(poem=>{
    return<Poem
     key={poem.id}
    title={poem.title} 
    content={poem.lyrics}
    author={poem.author} 
    genre={poem.genre}
    poem={poem}
    onDelete={onDelete}
    />
  })/* render a list of <Poem> components in here */}
    </div>
  );
}

export default PoemsContainer;
