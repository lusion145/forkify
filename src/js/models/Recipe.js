import axios from "axios";
import {proxy} from '../config';
export default class  Recipe{
    constructor (id){
        this.id=id;
    }
    async getRecipe(){
        try{
            //wiil return a promise which we await 
            const res = await axios(`${proxy}https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
            this.title=res.data.recipe.title;
            this.author=res.data.recipe.publisher;
            this.image=res.data.recipe.image_url
            this.url=res.data.recipe.source_url;
            this.ingredients=res.data.recipe.ingredients;
          
        }
        catch(error){
            console.log(error);
            alert("error :(")
        }
    }
    calcTime() {
        // Assuming that we need 15 min for each 3 ingredients
        //shows us the no of ingredients(number of string literally)
        const numIng = this.ingredients.length;
        const periods = Math.ceil(numIng / 3);
        this.time = periods * 15;
    }

    calcServings() {
        this.servings = 4;
    }
}