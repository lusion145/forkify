/*
export const add=(a, b)=> a+ b;
export const multiply= (a,b)=>(a * b);
export const ID=25;
*/
import { elements } from './base';


// we are exporting the getInput function which gets results from the input form in the ui
//arrow functions without parameters do not need to use return 
export const getInput = () => elements.searchInput.value;
//its cleaner to add curly braces since we are not returning anything
export const clearInput=()=>{
    elements.searchInput.value="";
}

export const clearResults=()=>{
    elements.searchResultList.innerHTML="";
}
//no export on this fucnction because we dont need it outside of searchview.js
//the rendering is actually done in the renderrecipe fucntion. renderresults just does what renderrecipe does foreach
//recipe is the var that we put in the fucntion coming from the renderecipe  called in renderresults
const renderRecipe = recipe => {
    // we input data into html
    const markup = `
   <li>
         <a class="results__link" href="#${recipe.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="Test">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${recipe.title}</h4>
                <p class="results__author">${recipe.publisher}</p>
             </div>
        </a>
    </li>`;

//adds the new li to results list.
    elements.searchResultList.insertAdjacentHTML("beforeend",markup)
}

export const renderResults = recipes => {
    recipes.forEach(renderRecipe);
}