import React, {useState} from 'react';
import Axios from 'axios'
import {v4 as uuidv4} from "uuid"
import '../App.css';
import { Alert } from '../components/Alert';
import Recipe from '../components/Recipe';
const Home = () => {
const[query, setQuery] = useState("");
const [recipes, setRecipes] = useState([])
const [alert, setAlert] = useState("")
const appID = "28b9678e"

const appKey = "978d967775df6ddc4abefe59f0dd1869"

const url = `https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${appKey}`;

const getData = async () => {
    if(query !== ""){
    const result = await Axios.get(url);
    if(!result.data.more){
        return setAlert("You know that's not a word..")
    }
    setRecipes(result.data.hits)
    console.log(result);
    setAlert(" ");
    setQuery("");
    }else{
    setAlert("Type Something Man..")
} 
};
const onChange = (e) => {
    setQuery(e.target.value);
}

const onSubmit = (e) => {
    e.preventDefault();
    getData();
};

        return (
        <div className="App" id="Home">
            <h1 onClick={getData}>Recipe Looker-Upper</h1>
                {alert !== "" && <Alert alert={alert}/>}
            <form className="search-form" onSubmit={onSubmit}>
            <input type="text" placeholder="Search Food" autoComplete="off" onChange={onChange} value={query}/>
            <input type="submit" value="search" />
            </form>
        <div className="recipes">
            {recipes !== [] && recipes.map(recipe => 
            <Recipe key={uuidv4()} recipe= {recipe} /> )}
        </div>
        </div>
        )
    };


export default Home; 