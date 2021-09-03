import React, {useState} from 'react'
import RecepieDetails from './RecepieDetails';
const Recipe = ({recipe}) => {
    const[show, setShow] = useState(false)
    const {label, image, url, ingredients} = recipe.recipe;
    return (
        <div className="recipe">
            <h2>{label}</h2>
            <img src={image} alt={image} />
            <a id="site-link" href={url} target="_blank" rel="noopener noreferrer"> 
            Website
            </a>
            <button onClick={() => setShow(!show)}>Ingredients</button>
            {show && <RecepieDetails ingredients={ingredients}/>}
        </div>
    )
}

export default Recipe
