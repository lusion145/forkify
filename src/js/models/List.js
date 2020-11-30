import uniqid from 'uniqid';
export default class List{
    constructor(){
        this.items=[];
    }
    addItem(count,unit,ingredient){
        const item={
            //will create a unique id for each of the items 
            id:uniqid(),
            count,
            unit,
            ingredient
        }
        this.items.push(item);
        //failure to return item causes undefined
        return item;
    }
    deleteItem(id){
    //delete id from the one generated in addItem
    //finds the index of of the element and returns the index
    const index=this.items.findIndex(el=>el.id===id);
    //[2,4,8] splice(1,1) returns 4 ,orignal array is [2,8] --mutates
    //[2,4,8] splice(1,2) returns [4,8],orignal array is [2]
    //[2,4,8] slice(1,1) returns nothing ,orignal array is [2,4,8]
    //[2,4,8] slice(1,2) returns 4 ,orignal array is [2,4,8]
     this.items.splice(index,1);
  
    }
    updateCount(id,newCount){
        //find looks for the element with id and returns the element
        this.items.find(el=>el.id===id).count=newCount;
    }
};