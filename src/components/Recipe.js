import React, {useState} from 'react'
import RecepieDetails from './RecepieDetails';
//imported a new piece of state: boolean
//functoinal component using "rafc" to load 
const Recipe = ({recipe}) => {
    // setting the show of the ingredients to false until clicked, and false unless clicked again
    const[show, setShow] = useState(false)
    //searching from recipe.recipe
    const {label, image, url, ingredients} = recipe.recipe;
    //setShow displays the ingredients
    return (
        <div className="recipe">
            <h2>{label}</h2>
            <img src={image} alt={label} />
            <a id="site-link" href={url} target="_blank" rel="noopener noreferrer"> 
            Website
            </a>
            <button onClick={() => setShow(!show)}>Ingredients</button>
            {show && <RecepieDetails ingredients={ingredients}/>}
        </div>
    )
}
//assigning from the recipedetails
// noopener noreferrer for security issues
export default Recipe
