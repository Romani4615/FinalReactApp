import React, {useState} from 'react';
import Axios from 'axios'
import {v4 as uuidv4} from "uuid"
import '../App.css';
import  Alert  from '../components/Alert';
import Recipe from '../components/Recipe';

//created my function
const Home = () => {
//piece of data that'll be updated, and the method used to update ""
const[query, setQuery] = useState("");
// same thing as above just setting it to a list
const [recipes, setRecipes] = useState([])
// set alert to empty string
const [alert, setAlert] = useState("")
//id to var
const appID = "28b9678e"
//key to var
const appKey = "978d967775df6ddc4abefe59f0dd1869"
//set my url to var instead of fetch, downloaded axious. set query to a searchable variable
const url = `https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${appKey}`;
// created new function needed get method for result using axious.get
const getData = async () => {
    // if query doesnt == a real word, then return the alert message
    if(query !== ""){
    const result = await Axios.get(url);
    //if "more" is set to false in console, it will burp this out, if it is, the recipes will show up
    if(!result.data.more){
        return setAlert("You know that's not a word..")
    }
    setRecipes(result.data.hits)
    //searched "data>hits for values in console to print out on front end"
    console.log(result);
    setAlert("");
    //clearing empty field
    setQuery("");
    }else{
    setAlert("Type Something Man..")
} 
};
//function created to handle the setQuery action
const onChange = (e) => {
    setQuery(e.target.value);
}
//handleing the on submit for the search, runs the event through the get data function
const onSubmit = (e) => {
    e.preventDefault();
    getData();
};

        return (
        <div className="App" id="Home">
            <h1 onClick={getData}>Secret Formula</h1>
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

// loop and check to see if recipes is an epty list using current item => recieves the recipe as the props
export default Home; 

//uuid did much of the heavy lifting^^^^^^ looks for unique things in the list