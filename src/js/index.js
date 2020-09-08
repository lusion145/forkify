/* explaining import export and basics
import str from  "./models/Search";
import {add,ID,multiply} from "./views/Searchview";

console.log(`using imported functions  add ${add(ID,2)} and multiply ${multiply(ID,2)}. Don't forget about ${str}`);
import axios from "axios";

async function getResults(query){
    //we have to use cors
    const proxy="https://cors-anywhere.herokuapp.com/";
    //first put the api url
    try{
        const res = await axios(`${proxy}https://forkify-api.herokuapp.com/api/search?q=${query}`);
        const recipes=res.data.recipes
        console.log(recipes)
    }
    //we put error as the argument so that when the promise fails, it will alert us of the reason
    catch(error){
        alert(error)
    }

}

 getResults("pizza");
*/


import Search from './models/Search';
import * as searchView from './views/searchView'
import{elements,renderLoader,clearLoader} from './views/base';
/* Global state of the app
 *-Search object
 *- Current recipe object
 *-Shopping list object 
 *-Liked receipts

 */
 const state={};

const controlSearch=async  ()=>{
    //1. Get query from the view
    const query=searchView.getInput()
    console.log(query)
    if (query){
        //2. New search object added to state. Takes query and uses method imported form search.js
        state.search=new Search(query);
        
        //3. Prepare ui for results
        searchView.clearInput()
        searchView.clearResults();
        renderLoader(elements.searchRes);

        //4. Search for recipes 
        // state.search is a new instance based on the Search class
        await state.search.getResults();
        

        //5. Render results on UI
        // in the getresults() method, we can access the result from the api search.
       // console.log(state.search.result)
       //we now add the renderresults function from searchview.js
       clearLoader();
       searchView.renderResults(state.search.result)

      
    }

}
//on clicking submit, get query from view 
 elements.searchButton.addEventListener("submit",e=>{
    e.preventDefault();
    controlSearch()
 })


 //using event delegation so buttons will click when clicked on(we target the div class searchResPages since the buttons arent there yet)
 elements.searchResPages.addEventListener("click",e=>{
     const btn=e.target.closest(".btn-inline");
     console.log(btn)
     if (btn){
         //shows the data on the buttons onces clicked data html attribute
         const goToPage=parseInt(btn.dataset.goto,10);
         searchView.clearResults()
         //gotopage is page no kind of
         searchView.renderResults(state.search.result,goToPage)
     }

 })

 /** shows how classes and methods imported from search.js can be used in index.js
  * // we create another search as the variable(small s) which we can use 
this pizza is the query which will be used in the search.js model
const search=new Search ("pizza")
console.log(search)
search.getResults();
  */


